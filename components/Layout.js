import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({title, keywords, description, children}) {
    return (
        <div className="relative pt-6 pb-12 sm:pb-16 md:pb-10 lg:pb-18 xl:pb-22">
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}/>
                <meta name='viewport' content="initial-scale=1.0, width=device-width"/>
                <link rel="shortcut icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            {children}
        </div>
    )
}


Layout.defaultProps = {
    title: 'Autonomy Network',
    description: 'Make your smart contracts smart',
    keywords: 'smart contract, yara yara'
}