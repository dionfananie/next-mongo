import React from 'react';
import { loadData, loadBuyers } from '@lib/fetch-data';

import Sapi from '@assets/sapi.jpeg';
import Image from 'next/image';
import mappingType from '@helpers/mappingType';
import toIDR from '@helpers/toIDR';
import TableBuyers from '@components/TableBuyers';

const DetailQurban = ({ item, listBuyers }) => {
    const { name, type, price, weight, quota } = item;
    return (
        <div className="container mx-auto">
            <div className="mb-8 md:mt-8 mt-0 md:flex">
                <div className="md:mr-8">
                    <Image
                        src={Sapi}
                        layout="intrinsic"
                        width="600px"
                        height="350px"
                        alt="Sapi"
                        className="rounded-lg"
                    />
                </div>
                <div className="mb-8 mx-4 md:mx-0">
                    <p className="md:text-6xl text-xl font-semibold tracking-tight text-gray-900 mb-4">
                        {name}
                    </p>

                    <p className="text-xl mb-4">
                        Jenis Sapi:{' '}
                        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                            {mappingType(type) || 'No Type'}
                        </span>
                    </p>
                    <p className="text-xl mb-4 font-semibold text-orange-600">
                        Harga: {toIDR(price)}
                    </p>
                    <p className="text-xl mb-4">Berat: {weight} Kg</p>
                    <p className="text-xl mb-4">Tersisa: {quota}</p>
                </div>
            </div>

            <TableBuyers list={listBuyers} />
        </div>
    );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {
    const item = await loadData(params.id);
    const listBuyers = await loadBuyers(params.id);

    return {
        props: {
            item,
            listBuyers
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 7200 // In seconds
    };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
    const list = await loadData();
    // Get the paths we want to pre-render based on posts
    const paths = list.map((post) => ({
        params: { id: post._id }
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' };
}

export default DetailQurban;
