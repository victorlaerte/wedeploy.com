import Raven from 'raven';
import packageJson from '../../package.json';

export default (app, magnet) => {
  switch (process.env.NODE_ENV) {
    case 'production':
    case 'staging':
      Raven.config(process.env.WEDEPLOY_SENTRY_DSN_LANDING, {
        environment: process.env.NODE_ENV
      }).install();
      app.use(Raven.requestHandler());
      return;
  }
};
