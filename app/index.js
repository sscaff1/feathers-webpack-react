import React from 'react';
import { render } from 'react-dom';

render(
  <h1>React Webpack Feathers setup done!</h1>,
  document.getElementById('app')
);

module.hot.accept();
