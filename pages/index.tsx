import Head from 'next/head';

import Image from 'next/image';
import blurHashToDataURL from '../helpers/blurToDataURl';
import { ListQurban } from 'types/List';

export default function Home({ list }: ListQurban) {
    return (
        <>
            <Head>
                <title>Test Auth</title>
            </Head>
            <div>Next 13</div>
            {list?.map((item) => {
                console.log(item);

                const { blurhash, url, name, hash, width, height } =
                    item?.attributes?.photo?.data?.attributes || {};
                const blurUrl = blurHashToDataURL(blurhash, width, height);
                return (
                    <>
                        <Image
                            key={hash}
                            src={url}
                            blurDataURL={blurUrl}
                            placeholder="blur"
                            alt={name}
                            width={150}
                            height={120}
                        />
                    </>
                );
            })}
            <div></div>
        </>
    );
}

export async function getServerSideProps() {
    try {
        const res = await fetch(`https://strapi.dionfananie.my.id/api/list-qurbans?populate=*`);
        const data = await res.json();
        console.log(data);

        return {
            props: { list: data.data }
        };
    } catch (e) {
        console.error(e);
        return {
            props: { list: [] }
        };
    }
}
