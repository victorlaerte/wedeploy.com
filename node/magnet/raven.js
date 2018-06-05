import Raven from 'raven';

export const controller = app => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return;
  }
  app.use(Raven.errorHandler());
};
