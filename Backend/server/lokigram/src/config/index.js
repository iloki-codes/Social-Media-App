﻿import dotenv from 'dotenv';

dotenv.config();

const config = { PORT : process.env.PORT || 5000,
                 MONGODB_URL : process.env.MONGODB_URL || "mongodb+srv://lokicodes:cluster0.hfkx5kx.mongodb.net/" } ;

export default config;

//advantage of doing this in a separate file is to access it every time whenever you need it 
