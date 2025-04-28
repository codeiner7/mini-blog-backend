import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadImageToCloudinary = async (filePath, folderName = 'uploads') => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      filePath,
      public_id: `${folderName}/${Date.now()}`
    });

    fs.unlinkSync(filePath);

    return {
      url: result.secure_url,
      public_id: result.public_id
    };
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw new Error('Cloudinary Upload Failed');
  }
};
