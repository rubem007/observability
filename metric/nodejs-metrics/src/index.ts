import express, { Request, Response } from 'express';
import * as prometheus from 'prom-client';

const app = express();
const port = process.env.PORT || 3000;

// Configure the Prometheus
//let collectDefaultMetrics = prometheus.collectDefaultMetrics;
const register = new prometheus.Registry();
//prometheus.collectDefaultMetrics({ register });

// Create custom metrics
const customCounter = new prometheus.Counter({
  name: "app_total_http_requests",
  help: "Total counter for / route",
});

// Add your custom metric to the registry
register.registerMetric(customCounter);

prometheus.collectDefaultMetrics({ register });

app.get('/', (req: Request, res: Response) => {
  customCounter.inc();
  res.send('Hello Word ^_^');
});

// Route for prometheus metric
app.get('/metrics', async (req: Request, res: Response) => {
  res.set('Content-Type', register.contentType);
  res.send(await register.metrics());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
