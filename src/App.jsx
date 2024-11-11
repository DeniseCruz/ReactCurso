
import { Post } from  './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css' ;

import './global.css' ;

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://i.pinimg.com/236x/73/cd/49/73cd499652ea0fc3eaa87e55985733af.jpg',
      name: 'Denise Cruz',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'paragraph', content: 'Acabei de subir ao projeto. É um de posts.'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-10-07 11:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4TDV3LeqZ1XhKGGJBxQTjWWO_JvmW3tVpfDR15jSXvEQlwMOOA4KbsFX4UYmOa_sIdU&usqp=CAU' ,
      name: 'Roberta Alves',
      role: 'System Analyst'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'paragraph', content: 'Acabei de subir ao projeto. É um de posts.'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-10-08 11:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
           {posts.map(post => {
              return  (<Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                 />)
              })
            }
            {/* mostra em vermelhor mas funciona
            <Post 
              author="Denise Cruz"
            />
            <Post 
              author="Vladimir Cruz"
            />
            */}
          </main> 
       </div>
    </div>
  );
}
