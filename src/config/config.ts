import dotenv from 'dotenv';
dotenv.config();

export const AWS_ACCESS_KEY: any = process.env.AWS_ACCESS_KEY;
export const AWS_SECRET_KEY: any = process.env.AWS_SECRET_KEY;
export const BUCKET_NAME: any = process.env.BUCKET_NAME;
export const AWS_REGION: any = process.env.AWS_REGION;

export const CLOUDINARY_CLOUD_NAME: any = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY: any = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET: any = process.env.CLOUDINARY_API_SECRET;
export const CLOUDINARY_FOLDER_NAME: any = process.env.CLOUDINARY_FOLDER_NAME;
