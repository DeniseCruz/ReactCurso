
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css' ;
import { Avatar } from './Avatar' ;
import PropTypes from 'prop-types';
import { useState } from 'react' ;

export function Comment(props, {content, onDeleteComment}) {
///export function Comment(props) {

   const [likeCount, setLikeCount] = useState(0);

   function handleDeleteComment(){
      console.log("handle delete") ;
     /// onDeleteComment(props.content) ; /// não funciona
     props.onDeleteComment(props.content) ;
   }
 
   function handleLikeComment(){
    
      ///setLikeCount(likeCount + 1);
      ///ou abaixo 
      setLikeCount(( numeroSomado) => {
         return numeroSomado + 1
      });
     

   } 



    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://wallpapers.com/images/high/avatar-pictures-dd4xl9zde3mv7luo.webp" alt="" />

            <div className={styles.commentBox}>

              <div className={styles.commentContent}>
                  <header>
                    <div className={styles.autorAndTime}>
                       <strong>Denise Cruz</strong>
                       <time title="03 de outubro as 10h" dateTime="2024-10-03">Cerca de 1 hora atrás.</time>
                    </div>
                    <button onClick={handleDeleteComment}  title="Deletar comentário">
                        <Trash size={20} />
                    </button>
                  </header>
                  <p>{props.content}</p>
                </div>
                <footer>
                  <button onClick={handleLikeComment} >
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                  </button>
                  
                </footer>

            </div>
           
            
        </div>
    )
}