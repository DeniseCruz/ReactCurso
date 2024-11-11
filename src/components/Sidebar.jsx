
import { PencilLine} from 'phosphor-react' ;
import  styles from './Sidebar.module.css' ;
import { Avatar } from './Avatar';

export function Sidebar(){
   return(
     <aside className={styles.sidebar}>
        <img className={styles.cover}  src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> 
        <div className={styles.profile}>
           
            <Avatar src="https://i.pinimg.com/236x/73/cd/49/73cd499652ea0fc3eaa87e55985733af.jpg"  /> 
             
            <strong>Denise</strong>
            <span>Web Developer</span>
        </div>
        <footer className={styles.footer}></footer>
        <div className={styles.footer_a}>
              <a href="#">
                <PencilLine size={20}/>
                  Editar seu perfil
              </a>
        </div>
     </aside>
   ) ;
}