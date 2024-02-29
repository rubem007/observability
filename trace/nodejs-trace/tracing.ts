import process from 'process';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import {
  ConsoleMetricExporter,
  PeriodicExportingMetricReader,
} from '@opentelemetry/sdk-metrics';
import {
  BatchSpanProcessor,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-node';
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';


//const traceExporter = new ConsoleSpanExporter();
const options = {
  headers: {
    'my-header': 'header-value',
  },
  url: 'http://localhost:9411/api/v2/spans',
  // optional interceptor
  getExportRequestHeaders: () => {
    return {
      'my-header': 'header-value',
    };
  },
}; 

const traceExporter = new ZipkinExporter(options);

const sdk = new NodeSDK({
  serviceName: 'my-app',
  traceExporter,
  instrumentations: [
    new HttpInstrumentation(),
    new ExpressInstrumentation(),
    /* getNodeAutoInstrumentations() */],
});

// initialize the SDK and register with the OpenTelemetry API
// this enables the API to record telemetry
sdk.start();

// gracefully shut down the SDK on process exit
process.on('SIGTERM', () => {
  sdk
    .shutdown()
    .then(() => console.log('Tracing terminated'))
    .catch((error: Error) => console.log('Error terminating tracing', error))
    .finally(() => process.exit(0));
});
