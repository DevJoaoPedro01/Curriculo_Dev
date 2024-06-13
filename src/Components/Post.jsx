import avatar from '../assets/img/avatar.webp'
import { Comments } from './Comments.jsx'
import style from './Post.module.css'

export function Post () {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img className={style.avatar} src={avatar} alt='https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png?authuser=1' />
                    <div className={style.authorInfo}>
                        <strong>Nome do Profissional</strong>
                        <span>Cargo/Função</span>
                    </div>
                </div>    
            </header>

            <div className={style.content}>
                <p>Sobre Você</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur itaque rem quaerat. Veniam in nemo quia nam, animi at explicabo laudantium omnis, deleniti voluptatem tempora. Itaque totam ratione asperiores incidunt error. Eius ut sunt id suscipit dolore, est ex placeat vero rerum facilis quos asperiores assumenda provident quaerat laborum magnam!</p>
                
                <p><a href=''>Link Repositórios</a></p>
                <p><a href=''>Último Projeto</a></p>
            </div>
            
            <form className={style.commentsForm}>
                <strong>Experiência Profissional</strong>
            </form>

            <div>
                <Comments />
            </div>

        </article>
    )
}