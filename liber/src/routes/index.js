import {BrowserRouter,Switch, Route} from 'react-router-dom'

import ListarLivro from '../pages/Livro/listBooks'
import DeleteLivro from '../pages/Livro/deleteBook'
import CadastroLivro from '../pages/Livro/Cadastrar'
import AlterarLivro from '../pages/Livro/Alterar'

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ListarLivro} exact/>
                <Route path="/delete" component={DeleteLivro} />
                <Route path="/cadastrar" component={CadastroLivro} />
                <Route path="/alterar" component={AlterarLivro} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router