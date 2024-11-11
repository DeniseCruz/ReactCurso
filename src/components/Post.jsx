

import { format , formatDistanceToNow} from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
import { Avatar } from './Avatar';
import { Comment } from './Comment' ;
import { useState } from 'react' ;


///const comments = [1,2,3,];


export function Post(props,publishedAt,  content ){
  //// console.log(props) ;

  const [comments,setComments ] = useState([
     'Post muito bacana !', 
  ])

  const [newCommentText, setNewCommentText] = useState('')

 ///// console.log(newCommentText) ;

  /*
  ///NÃO FUNCIONA
   const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR',{
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
   }).format(publishedAt);
   */

const dataFormatada = props.publishedAt ;
console.log(" dataaaaa: " + props.publishedAt) ;

console.log('comentario :' + content) ;

   const publishedDateFormatted = format(dataFormatada,"dd/MM/yyyy");

   const publishedDate = format(dataFormatada,"d 'de' LLLL 'às' HH:mm'h'",{locale: ptBR});

   const publishedDateRelativeToNow = formatDistanceToNow(dataFormatada,{locale: ptBR, addSuffix: true} );

   function handleCreateNewComment() {
      event.preventDefault();
      console.log('oi') ;

      ////comments.push(3);
      ///setComments([...comments, comments.length + 1 ]);

      const newCommentText = event.target.comment.value ;

      setComments([...comments, newCommentText ]);
      setNewCommentText('');

      
   }

   function handleNewCommentChange(){
         setNewCommentText(event.target.value) ;
   }
   
   function handleNewCommentInvalid(){
      console.log(event);

      setNewCommentText(event.target.value);
     
   }  
   

   ///function deleteComment(comment){
   function deleteComment(commentToDelete){
       console.log(" deletar COMENTARIO :" + commentToDelete );

       const commentsWithoutDeleteOne = comments.filter(comment => {
         return comment != commentToDelete ;
       })

       setComments(commentsWithoutDeleteOne) ;

   }


   const isNewCommentEmpty = newCommentText.length==0 ;

   return(
    <article className={styles.post}>
       <header>
          <div className={styles.author}>
           {/* <img  className={styles.avatar} src="https://i.pinimg.com/236x/73/cd/49/73cd499652ea0fc3eaa87e55985733af.jpg"  /> */}
           <Avatar src={props.author.avatarUrl} />
            <div className={styles.authorInfo}>
                 <strong>{props.author.name}</strong>
                 <span>{props.author.role}</span>
            </div>
          </div>
          <time title={publishedDate} dateTime="2024-10-01 10:10:30">{publishedDateRelativeToNow}</time> 
       </header>
       <div className={styles.content}>
         {props.content.map(line => {
            if (line.type == 'paragraph') {
                return <p key={line.content}>{line.content}</p>;  
            } else if (line.type == 'link') {
               return <p key={line.content}><a href="#">{line.content}</a></p>;
            }
         })}

          {/*
          <p>Fala Galera</p>
          <p>Acabei de subir mais um projeto para o meu portifolio.O nome do projeto é DoctorCare 🚀</p>
          <p><a href="">👉{' '} jane.design/doctorcare</a></p>
          <p><a href="">#novoprojeto</a></p>{' '}
          <p><a href="">#nlw #rocketseat</a></p>
          */}
       </div>

       <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
           <strong>Deixe seu feedback</strong>

           <textarea name="comment"
               placeholder="Deixe seu comentário"
               value={newCommentText}
               onChange={handleNewCommentChange}
               onInvalid={handleNewCommentInvalid}
               required
           />
           <footer>
           <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
           </footer>
       </form>

       <div className={styles.commentList}>
       {/* <Comment />
         <Comment />
         <Comment />
        */}
        {comments.map(comment => {
         return ( <Comment key={comment} content={comment} 
            onDeleteComment={deleteComment}
           
            /> )
        })}
       </div>

    </article>
   )
}