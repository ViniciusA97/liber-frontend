import React, { Fragment } from 'react';
import CadastroLivro from './pages/Livro/Cadastrar'
import StyledGlobal from './components/styledGlobal'
function App() {
  return (
    <Fragment>
      <StyledGlobal/>
      <CadastroLivro/>
    </Fragment>
  );
}

export default App;
