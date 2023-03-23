import React from 'react';
import { loadQurban, loadBuyers } from '@lib/fetch-data';

import Sapi from '@assets/sapi.jpeg';
import Image from 'next/image';
import TableBuyers from '@components/TableBuyers';
import DescQurban from '@components/DescQurban';
import { arrayOf } from 'prop-types';
import { object } from 'prop-types';
import NavbarDetail from '@components/NavbarDetail';

const DetailQurban = ({ item, listBuyers }) => {
    return (
        <>
            <NavbarDetail text="Detail Hewan Qurban" />
            <div className="container mx-auto mt-14 md:mt-20">
                <div className="mb-8 md:mt-8 mt-0 md:flex">
                    <div className="md:mr-8 shrink-0">
                        <Image
                            src={Sapi}
                            layout="intrinsic"
                            width="600px"
                            height="350px"
                            alt="Sapi"
                            loading="lazy"
                            className="rounded"
                        />
                    </div>
                    <div className="mb-8 mx-4 md:mx-0 py-2 w-full">
                        <DescQurban item={item} />
                    </div>
                </div>

                <TableBuyers list={listBuyers} />
            </div>
        </>
    );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {
    const { id } = params;
    const item = await loadQurban({ id });
    const listBuyers = await loadBuyers(params.id);

    return {
        props: {
            item,
            listBuyers
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 7200 seconds
        revalidate: 7200 // In seconds
    };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
    const list = await loadQurban();
    // Get the paths we want to pre-render based on posts
    const paths = list.map((post) => ({
        params: { id: post._id }
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' };
}

DetailQurban.propTypes = {
    item: arrayOf(object),
    listBuyers: arrayOf(object)
};
DetailQurban.defaultProps = {
    item: [],
    listBuyers: []
};
export default DetailQurban;
