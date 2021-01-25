import style from '../styles/CTA.module.css'
import f from '../styles/Form.module.css'


export default function CTA() {
    return (
        <section id="cta" className={style.Section}>
            <h2>Get started</h2>
            <form action="/" className={f.form}>
                <div className={f.inputGroup}>
                    <label for="linkedin_name" className={f.inputPrefix}>https://linkedin.com/in/</label>
                    <input type="text" id="linkedin_name" name="linkedin_name" className={f.input}/>
                </div>
            </form>
        </section>
    )
}