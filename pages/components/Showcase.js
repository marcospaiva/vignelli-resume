import style from '../styles/Showcase.module.css'
import Image from 'next/image'

export default function Showcase() {
    return (
        <section id="showcase" className={style.Showcase}>
            <h2>Showcase</h2>
            <p className="generalContentText">Check how people like you turn your resume in a masterpiece of graphic design.</p>

            <ul className={style.ShowcaseSlider}>
                <li className={style.ShowcaseSlide}>
                    <a href="">
                        <Image src="/vignellis.png" alt="me" width="401" height="568" />
                    </a>
                </li>
                <li className={style.ShowcaseSlide}>
                    <a href="">
                        <Image src="/exemple2.png" alt="me" width="401" height="568" />
                    </a>
                </li>
                <li className={style.ShowcaseSlide}>
                    <a href="">
                        <Image src="/exemple3.png" alt="me" width="401" height="568" />
                    </a>
                </li>
                <li className={style.ShowcaseSlide}>
                    <a href="">
                        <Image src="/exemple4.png" alt="me" width="401" height="568" />
                    </a>
                </li>
            </ul>

        </section>
    )
}