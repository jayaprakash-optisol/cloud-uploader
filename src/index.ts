import { S3UploadService } from './services/AwsService';
import { CloudinaryUploadService } from './services/CloudinaryService';

export const FileUploadHandler = async (provider: string, files: any[]) => {
  if (files.length === 0 || !provider) return;

  if (provider === 'aws') {
    return S3UploadService(files);
  }

  if (provider === 'cloudinary') {
    return CloudinaryUploadService(files);
  }
};
