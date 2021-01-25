import style from '../styles/CTA.module.css'
import f from '../styles/Form.module.css'


export default function CTA() {
    return (
        <section id="cta" className={style.Section}>
            <h2>Get started</h2>
            <form action="/" className={f.form}>
                <div className={f.inputGroup}>
                    <div className={f.inputPrefix}>https://linkedin.com/in/</div>
                    <input type="text" name="linkedin_name" className={f.input}/>
                </div>
            </form>
        </section>
    )
}