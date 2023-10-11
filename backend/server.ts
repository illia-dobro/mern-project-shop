import express from 'express';
import productRouter from './routes/products-routes.js';
import 'dotenv/config'
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/error-middleware.js';

const port = process.env.PORT;

connectDB()
const app = express();


app.get('/', (req, res) => {
  res.send('api running');
});

app.use('/api/products', productRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
