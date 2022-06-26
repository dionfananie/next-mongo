import Head from 'next/head';

import { arrayOf } from 'prop-types';
import { object } from 'prop-types';
import Layout from 'Layout';

export default function Home() {
    return (
        <>
            <Head>
                <title>Qurban Site</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout> Home Page</Layout>
        </>
    );
}

export async function getServerSideProps() {
    try {
        const res = await fetch(`https://express-mongo-iota.vercel.app/qurban`);
        const data = await res.json();
        return {
            props: { list: data }
        };
    } catch (e) {
        console.error(e);
        return {
            props: { list: [] }
        };
    }
}

Home.propTypes = {
    list: arrayOf(object)
};
