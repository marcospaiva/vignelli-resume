import style from '../styles/CTA.module.css'
import f from '../styles/Form.module.css'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function CTA() {
    const router = useRouter();
    const [query, setQuery] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        router.push(`/resume/${query}`)
    }
    const handleParam = setValue => e => setValue(e.target.value)

    return (
        <section id="cta" className={style.Section}>
            <h2>Get started</h2>
            <form className={f.form} onSubmit={handleSubmit}>
                <div className={f.inputGroup}>
                    <label htmlFor="linkedin_name" className={f.inputPrefix}>https://linkedin.com/in/</label>
                    <input type="text" id="linkedin_name" value={query} onChange={handleParam(setQuery)} name="linkedin_name" className={f.input}/>
                </div>
            </form>
        </section>
    )
}