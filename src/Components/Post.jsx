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
                        <strong>João Pedro Lopes Silvério</strong>
                        <span>Dev Full-Stack</span>
                    </div>
                </div>    
            </header>

            <div className={style.content}>
                <p>Sobre</p>
                <p>Um jovem de 18 anos, é um entusiasta da Tecnologia da Informação (TI) desde tenra idade. Nascido em uma pequena cidade do interior, sua curiosidade e fascínio por computadores começaram cedo, desmontando e remontando velhos computadores que seu pai trouxe para casa. Seu interesse natural rapidamente evoluiu para explorar linguagens de programação e sistemas operacionais.</p>
                
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