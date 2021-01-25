import style from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className="grid-container HeightCommon">
            <div className={style.Header}>
                <h1 className={style.head}>
                    Vignelli <span className={style.subhead}>Resume</span>
                </h1>
                <p className={style.tagline}>Generate your resume with graphic design inspired in Massimo Vignelli's work.</p>
            </div>
            <div className={style.BottomRight}>
                <a href="#showcase" className={style.variateWeight}><span className={style.weightNormal}>Create.</span> <span className={style.weightBold}>Impress.</span></a>
            </div>
        </header>
    )
}