import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import borrowRoutes from './routes/borrow.js';
import returnRoutes from './routes/return.js';
import booksRoutes from './routes/books.js';
import membersRoutes from './routes/members.js';
import swaggerUi from 'swagger-ui-express';
import specs from './helper/swagger.js';

dotenv.config();

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

connectDB();

app.use('/borrow', borrowRoutes);
app.use('/return', returnRoutes);
app.use('/books', booksRoutes);
app.use('/members', membersRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
