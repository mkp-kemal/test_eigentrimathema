import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './infrastructure/db/connectDB.js';
import bookRoutes from './presentation/routes/book.routes.js';
import memberRoutes from './presentation/routes/member.routes.js';
import swaggerUi from 'swagger-ui-express';
import specs from './infrastructure/helper/swagger.js';
dotenv.config();

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

connectDB();

app.use('/books', bookRoutes);
app.use('/members', memberRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
