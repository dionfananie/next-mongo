import React from 'react';
import { loadQurban } from '@lib/fetch-data';

import Sapi from '@assets/sapi.jpeg';
import Image from 'next/image';
import DescQurban from '@components/DescQurban';
import FormBuyer from '@components/FormBuyer';
import NavbarDetail from '@components/NavbarDetail';
import { object } from 'prop-types';

const Order = ({ item }) => {
    const { image } = item || {};
    return (
        <>
            <NavbarDetail />
            <div className="container mx-auto mt-14 md:mt-20">
                <div className="mb-8 md:mt-8 mt-0 md:flex md:px-6">
                    <div className="md:mr-8 shrink-0">
                        <Image
                            src={image?.photos || Sapi}
                            layout="intrinsic"
                            width="600px"
                            height="350px"
                            alt="Sapi"
                        />
                    </div>
                    <div className="mb-8 px-4 md:mx-0 py-2 w-full">
                        <DescQurban item={item} />
                    </div>
                </div>
                <FormBuyer />
            </div>
        </>
    );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps({ params }) {
    const item = await loadQurban({ id: params.id });

    return {
        props: {
            item
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
    const list = await loadQurban();
    // Get the paths we want to pre-render based on posts
    const paths = list?.map((post) => ({
        params: { id: post._id }
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' };
}

Order.propTypes = {
    item: object
};
Order.defaultProps = {
    item: {}
};
export default Order;
