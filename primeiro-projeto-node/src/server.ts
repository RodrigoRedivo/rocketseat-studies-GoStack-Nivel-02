import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Nivel 02 GoStack' });
});

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
