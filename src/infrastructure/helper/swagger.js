import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';
import { fileURLToPath } from 'url';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFilePath);

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Library API',
            version: '1.0.0',
            description: 'API documentation for a library management system',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: [path.join(currentDir, './routes/*.js')],
};

const specs = swaggerJsdoc(options);

export default specs;
