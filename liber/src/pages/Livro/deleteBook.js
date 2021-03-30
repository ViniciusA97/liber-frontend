import { DrawBook } from "../../components/drawBook";
import axios from 'axios'
import styles from "../../styles/components/deleteBook.module.css"
import { useEffect, useState } from "react";

function DeleteBook(){
    const [books, setBooks] = useState(null);
    const [carregou, setCarregou] = useState(false);
    const [clicou, setClicou] = useState(false);
    const [id, setID] = useState(0);
    function searchBooks(){
        axios.get("http://localhost:8080/api/livro/9").then(response => {
            setBooks(response.data)
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
    })

    return(
        <div className={styles.listBooks}>
            <div>
                {
                    carregou && books &&(
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
                    )
                }
                
            </div>
            <div className={styles.delete}>
                <button onClick={deleteBook}>deletar</button>

                <button>voltar</button>
            </div>
        </div>
    );
}

export default DeleteBook