import { DrawBooks } from "../../components/drawBooks";
import axios from 'axios'
import styles from "../../styles/components/listBooks.module.css"
import {Fragment, useEffect, useState} from "react";

function ListBooks(){
    const [books, setBooks] = useState(null);
    const [carregou, setCarregou] = useState(false);

    function searchBooks(){
        axios.get("http://localhost:8080/api/livro/").then(response => {
            setBooks(response.data)
            console.log(books);
        })
    }
    console.log(books);
    useEffect(() => {
        if(!carregou){
            searchBooks();
            setCarregou(true);
        }
    })

    return(
        <div className={styles.listBooks} id={"root"}>
            {
                carregou && books &&(
                    books.map((value, key) =>{
                        return (
                            <Fragment>
                                <DrawBooks key = {key}
                                           id = {value.id}
                                           image = {value.path_foto}
                                           title = {value.titulo}
                                           author = {value.autor}
                                           genre = {value.genero}
                                           onClick
                                />
                            </Fragment>
                        );
                    })
                )
            }
        </div>
    );
}

export default ListBooks