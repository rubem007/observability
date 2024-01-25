import express, { Request, Response } from 'express';
import * as prometheus from 'prom-client';

const app = express();
const port = process.env.PORT || 3000;

// Prometheus Registry Configuration
const register = new prometheus.Registry();

// Creation of a custom counter metric
const customCounter = new prometheus.Counter({
  name: "app_total_http_requests",
  help: "Total counter for the / route",
});

// Add custom metric to the registry
register.registerMetric(customCounter);

// Additional configuration for collecting default metrics
prometheus.collectDefaultMetrics({ register });

// Main route to increment the custom counter
app.get('/', (req: Request, res: Response) => {
  customCounter.inc();
  res.send('Hello Word ^_^');
});

// Route to expose Prometheus metrics
app.get('/metrics', async (req: Request, res: Response) => {
  res.set('Content-Type', register.contentType);
  res.send(await register.metrics());
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
