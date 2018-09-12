import fs from 'fs';
import path from 'path';
import express from 'express';

export const controller = app => {
  const electricPath = path.join(__dirname, '..', '..', '..', '..', 'electric');

  app.use('/blog', express.static(path.join(electricPath, 'blog')));
  app.use('/docs', express.static(path.join(electricPath, 'docs')));
  app.use('/fonts', express.static(path.join(electricPath, 'fonts')));
  app.use('/images', express.static(path.join(electricPath, 'images')));
  app.use('/js', express.static(path.join(electricPath, 'js')));
  app.use('/scripts', express.static(path.join(electricPath, 'scripts')));
  app.use('/styles', express.static(path.join(electricPath, 'styles')));
  app.use('/terms', express.static(path.join(electricPath, 'terms')));
  app.use('/security', express.static(path.join(electricPath, 'security')));
  app.use('/tutorials', express.static(path.join(electricPath, 'tutorials')));
  app.use('/updates', express.static(path.join(electricPath, 'updates')));
  app.use('/vendor', express.static(path.join(electricPath, 'vendor')));

  app.get('/site.json', (req, res) => {
    const siteJson = fs.readFileSync(path.join(electricPath, 'site.json'));
    res.json(JSON.parse(siteJson.toString()));
  });
};
