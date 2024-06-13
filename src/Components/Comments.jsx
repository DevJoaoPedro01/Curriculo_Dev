import profile from '../assets/img/profile.png'
import style from './Comments.module.css'

export function Comments () {
    return (
        <div className={style.comments}>
            <img src={profile} alt='https://cdn-icons-png.flaticon.com/512/1066/1066421.png'  />
            <div className={style.commentsBox}>
                <div className={style.commentsContent1}>
                    <header>
                        <div>
                            <strong>Experiência 1</strong>
                        </div>
                    </header>
                    <p>Estágio na Google (6 meses)</p>
                </div>

                <div className={style.commentsContent2}>
                    <header>
                        <div>
                            <strong>Experiência 2</strong>
                        </div>
                    </header>
                    <p>Estágio na Microsoft (10 meses)</p>
                </div>

                <div className={style.commentsContent3}>
                    <header>
                        <div>
                            <strong>Experiência 3</strong>
                        </div>
                    </header>
                    <p>Energisa (Contratado)</p>
                </div>
            </div>

        </div>
    )
}