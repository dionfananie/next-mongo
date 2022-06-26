import Head from 'next/head';

import DropdownMenu from '@components/DropdownMenu';
import RadioGroup from '@components/RadioGroup';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1 className="text-6xl font-bold underline">Hello world!</h1>
                <DropdownMenu />
                <RadioGroup />
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        console.log('a');
        return {
            props: { isConnected: true, users: [] }
        };
    } catch (e) {
        console.error(e);
        return {
            props: { isConnected: false }
        };
    }
}
