import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListBooks from "./pages/Livro/listBooks";
import DeleteBook from "./pages/Livro/deleteBook";
import AlterarLivro from "./pages/Livro/Alterar";
import CadastroLivro from "./pages/Livro/Cadastrar";
import NotFoundPage from "./pages/NotFoundPage";

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={ListBooks}/>
                <Route path="/livro/deletar/:id" exact={true} component={DeleteBook} />
                <Route path="/livro/criar" exact={true} component={CadastroLivro} />
                <Route path="/livro/:id" exact={true} component={AlterarLivro} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </ BrowserRouter>
    );
}

export default Router;