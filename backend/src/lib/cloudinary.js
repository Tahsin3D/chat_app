import {v2 as cloudinary} from 'cloudinary';

import {config} from 'dotenv';

config();

cloudinary.config({
    cloud_name: process.env.CLOUDINART_CLOUD_NAME,
    api_key: process.env.CLOUDINART_API_KEY,
    api_secret: process.env.CLOUDINART_API_SECRET,
})

export default cloudinary;