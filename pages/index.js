import Head from 'next/head';

import DropdownMenu from '@components/DropdownMenu';
import RadioGroup from '@components/RadioGroup';
import { arrayOf } from 'prop-types';
import { object } from 'prop-types';

export default function Home({ list }) {
    console.log('list: ', list);
    return (
        <div className="container">
            <Head>
                <title>Qurban Site</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1 className="text-6xl font-bold underline">Hello world!</h1>
                <DropdownMenu />
                <RadioGroup />
                {list?.map((item, key) => (
                    <>
                        <p key={key}>{item.name}</p>
                        <p key={key}>{item.price}</p>
                    </>
                ))}
            </div>
        </div>
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
