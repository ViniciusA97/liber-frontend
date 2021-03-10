import { DrawBooks } from "../components/drawBooks";
import axios from 'axios'
import styles from "../styles/components/listBooks.module.css"
import { useEffect, useState } from "react";

export function ListBooks(){
    const [books, setBooks] = useState(null);
    const [carregou, setCarregou] = useState(false);

    function searchBooks(){
        axios.get("http://localhost:8080/api/livro/").then(response => {
            setBooks(response.data)
            console.log(books);
        })
    }
    
    useEffect(() => {
        if(!carregou){
            searchBooks();
            setCarregou(true);
        }
    })

    return(
        <div className={styles.listBooks}>
            {
                carregou && books &&(
                    books.map((value, key) =>{
                        return <DrawBooks key = {key}
                            image = {value.path_foto}
                            title = {value.titulo}
                            author = {value.autor}
                            genre = {value.genero}
                        />;
                    })
                )
            }
        </div>
    );
}

