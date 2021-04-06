import styles from '../styles/components/drawBook.module.css'


export function DrawBook(props){
    console.log(props.id)
    return(

            <div className={styles.drawBooks}>
            <div className={styles.containerImage}>
                <img src={props.image}/>
            </div>
            <div className={styles.informacoes}>
                <h1>Titulo: {props.title}</h1>
                <h4>Autor: {props.author}</h4>
                <div>
                    Genero: {props.genre}
                    <div className={styles.rating}>
                        
                        <span>Avaliação: {props.avaliacao}</span>
                        <span><img src = "star.svg"/></span>
                        
                        Avaliação Total: {props.total_avaliacao}
                        <span><img src = "star.svg"/></span>
                    </div>
                    <div className={styles.dados}>
                        <div>Edição: {props.edicao}</div>
                        <div>ISBN: {props.ISBN} </div>
                        <div>Ano: {props.ano}</div>
                        <div>Paginas: {props.paginas}</div>
                        <div>Editora: {props.editora}</div>
                    </div>
                </div>
                <div>
                    <p>{props.sinopse}</p>
                    <p>{props.resenha}</p>
                </div>
            </div>    
        </div>
    );
}
