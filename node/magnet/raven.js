import Raven from 'raven';

export const controller = app => {
  switch (process.env.NODE_ENV) {
    case 'production':
    case 'staging':
      app.use(Raven.errorHandler());
      return;
  }
};
