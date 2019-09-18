import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Routes from '../routes/serverRoutes';

import render from '../../server/render';

const main = (req, res, next) => {
  try {
    const html = renderToString(
      <StaticRouter
        location={req.url}
        context={{}}
      >
        {renderRoutes(Routes)}
      </StaticRouter>
    )
    res.send(render(html));
  } catch(err) {
    next(err);
  }
};

export default main;