import Head from 'next/head';

import Sidebar from '@components/Sidebar';

export default function Qurban() {
    return (
        <>
            <Head>
                <title>Admin - Qurban Darussalam</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar />
        </>
    );
}
