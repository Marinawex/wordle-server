import app from './app';
const port = 3333;

app.listen(port, '0.0.0.0', () => {
  console.log(`lisening on port ${port}`);
});
