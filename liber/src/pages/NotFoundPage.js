import {Fragment} from "react";
import { Link } from 'react-router-dom'

function NotFoundPage(){

    return (
        <Fragment>
            Página não encontrada, confira se o conteudo ainda está disponivel ou a rota acessada está correta.
            <Link to={"/"}>
                <button>
                    Ir para central
                </button>
            </Link>
        </Fragment>
    );
}

export default NotFoundPage;