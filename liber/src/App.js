import React, { Fragment } from 'react';
import AlterarLivro from './pages/Livro/Alterar'
import StyledGlobal from './components/styledGlobal'
function App() {
  return (
    <Fragment>
      <StyledGlobal/>
      <AlterarLivro/>
    </Fragment>
  );
}

export default App;
