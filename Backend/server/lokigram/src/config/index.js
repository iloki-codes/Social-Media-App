import dotenv from 'dotenv';

dotenv.config();

const config = { PORT : process.env.PORT || 5000,
                 MONGODB_URL : process.env.MONGODB_URL || "https://ap-south-1.aws.data.mongodb-api.com/app/data-oqwhi/endpoint/data/v1" 
                } ;

export default config;

//advantage of doing this in a separate file is to access it every time whenever you need it 