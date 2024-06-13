import reactLogo from '../assets/img/reactLogo.png'
import style from './Header.module.css'

export function Header() {
    return (
        <header className={style.header}>
            <img src={reactLogo} alt='https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png?authuser=1' />
            <strong>E-Currículo Profissional</strong>            
        </header>
    )
}