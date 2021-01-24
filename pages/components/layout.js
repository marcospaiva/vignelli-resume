import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'


export default function Layout({
    children,
    title = 'Default title',
}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {children}
        </div>
    )
}
