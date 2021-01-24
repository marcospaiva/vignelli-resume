import style from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className="Header">
            <h1 className={style.head}>
                Vignelli <span className={style.subhead}>Resume</span>
            </h1>
        </header>
    )
}