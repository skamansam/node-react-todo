import http from 'http';
import path from 'fs'
import express from 'express';
import request from 'request';

import React, {Component} from 'react';
import {renderToString} from 'react-dom/server';

import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';

import routes from './routes';


/*eslint-disable*/
const app = express();
/*eslint-enable*/

app.use('/static', express.static(path.join(__dirname, 'static')))

app.get('*', (req, res) => {
  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({route}) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData() : Promise.resolve(null)
  });
  return Promise.all(promises).then((data) => {
    let context = {};
    const content = renderToString(
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    );
    if (context.status === 404) {
      res.status(404);
    }
    if (context.status === 302) {
      return res.redirect(302, context.url);
    }
    console.info(res)
    res.render('index.html', {title: 'Express', data: {stateData: []}, content: content });
  });
});

const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'production';
//const server = http.createServer(router);
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
