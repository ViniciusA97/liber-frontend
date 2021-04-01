import React, { Fragment } from 'react';
import StyledGlobal from './components/styledGlobal'
import Router from './routes'
import Alterar from './pages/Livro/Alterar'

function App() {
  return (
    <Fragment>
      <StyledGlobal/>
      <Router />
    </Fragment>
  );
}

export default App;
