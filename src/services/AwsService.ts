import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import {
  AWS_ACCESS_KEY,
  AWS_REGION,
  AWS_SECRET_KEY,
  BUCKET_NAME,
} from '../config/config';

import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const S3UploadService = async (files: any[]) => {
  const s3Client = new S3Client({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY,
      secretAccessKey: AWS_SECRET_KEY,
    },
  });

  if (!files) return;
  const params = files?.map((file: any) => {
    return {
      Bucket: BUCKET_NAME,
      Key: `uploads/${file.originalname}`,
      Body: file.buffer,
    };
  });

  return await Promise.all(
    params?.map(async (param) => {
      try {
        const isUploaded = await s3Client.send(new PutObjectCommand(param));

        if (isUploaded) {
          const command = new GetObjectCommand({
            Bucket: param.Bucket,
            Key: param.Key,
          });

          const signedUrl = await getSignedUrl(s3Client, command, {
            expiresIn: 600,
          });

          return {
            Key: param.Key,
            url: signedUrl,
          };
        }
      } catch (error) {
        return error;
      }
    })
  );
};
