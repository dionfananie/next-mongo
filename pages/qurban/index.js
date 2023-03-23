import Head from 'next/head';

import ListQurban from '@components/ListQurban';
import Layout from 'Layout';

import { arrayOf } from 'prop-types';
import { object } from 'prop-types';

import { useRouter } from 'next/router';

export default function Qurban({ list }) {
    const router = useRouter();

    const handleClick = (id) => {
        router.push(`/qurban/${id}/order`);
    };

    return (
        <>
            <Head>
                <title>Qurban Site</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div>
                    <div className="container mx-auto py-10">
                        <div className="grid md:grid-cols-3 gap-4 px-4 md:px-0">
                            {list?.map((item, key) => (
                                <ListQurban key={key} item={item} handleClick={handleClick} />
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export async function getServerSideProps() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/qurban`);
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

Qurban.propTypes = {
    list: arrayOf(object)
};
Qurban.defaultProps = {
    list: []
};
