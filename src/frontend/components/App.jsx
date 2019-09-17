import React from 'react';
import './../assets/styles/App.scss';

import planeta from './download.jpeg';

const App = () => (
  <React.Fragment>
    <div>Hola mundo</div>
    <img src={planeta} />
  </React.Fragment>
);

export default App;