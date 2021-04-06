import { DrawBook } from "../../components/drawBook";
import axios from 'axios'
import styles from "../../styles/components/deleteBook.module.css"
import { useEffect, useState } from "react";
import { useParams,useHistory   } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";

function DeleteBook(){
    let { id } = useParams();
    console.log(id)

    const [books, setBooks] = useState(null);
    const [carregou, setCarregou] = useState(false);
    const [clicou, setClicou] = useState(false);
    const history = useHistory();


    function searchBooks(){
        axios.get("http://localhost:8080/api/livro/"+id).then(response => {
            setBooks(response.data)
            console.log(books)

        }).catch((e)=>{
            console.log(e)
        })
    }
    
    function deleteBook(){
        if(!clicou && carregou){
            axios.delete(`http://localhost:8080/api/livro/delete/${books.id}`);
            console.log(`Delete o livro do ID: ${books.id}`);
            setClicou(true);
        }
    }

    useEffect(() => {
        if(!carregou){
            searchBooks();
            setCarregou(true);
        }
    },[books,carregou])

    return(
        <div className={styles.listBooks}>
                {

                    (carregou && books) ? (
                        <div>
                            <DrawBook
                            image = {books.path_foto}
                            id = {books.id}
                            title = {books.titulo}
                            author = {books.autor}
                            genre = {books.genero}
                            avaliacao = {books.avaliacao}
                            total_avaliacao = {books.total_avaliacao}
                            edicao = {books.edicao}
                            ISBN = {books.isbn}
                            ano = {books.ano}
                            paginas = {books.paginas}
                            editora = {books.editora}
                            sinopse = {books.sinopse}
                            resenha = {books.resenha}
                            />
                    <div className={styles.delete}>
                    <button onClick={deleteBook}>deletar</button>

                    <button>voltar</button>
                    </div>
                    </div>
                    ) :
                        <NotFoundPage/>

                }
        </div>
    );
}

export default DeleteBook