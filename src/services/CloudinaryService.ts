import cloudinary from 'cloudinary';
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_FOLDER_NAME,
} from '../config/config';

import * as fs from 'fs';

export const CloudinaryUploadService = async (files: any[]) => {
  cloudinary.v2.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });

  if (!files) return;

  const params = files?.map((file: any) => {
    const tempPath = `/tmp/${file.originalname}`;
    fs.writeFileSync(tempPath, file.buffer);
    return {
      file: tempPath,
    };
  });

  return await Promise.all(
    params?.map(async (param) => {
      try {
        const resp = await cloudinary.v2.uploader.upload(param.file, {
          folder: CLOUDINARY_FOLDER_NAME,
          resource_type: 'auto',
        });
        if (resp) {
          fs.unlinkSync(param.file);
          return { url: resp.url };
        }
      } catch (error) {
        return error;
      }
    })
  );
};
