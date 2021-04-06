import styles from '../styles/components/drawBooks.module.css'
import { Link } from 'react-router-dom'

export function DrawBooks(props){
    return(
        <Link to={"/livro/"+props.id}>
        <div className={styles.drawBooks}>
            <div className={styles.containerImage}>
                <img src={props.image}/>
            </div>
            <h1>{props.title}</h1>
            <h4>{props.author}</h4>
            <div>
                {props.genre}
                <div>
                    <span>{props.rating}</span>
                    <span><img src = "star.svg"/></span>
                </div>
            </div>
        </div>
        </Link>
    );
}