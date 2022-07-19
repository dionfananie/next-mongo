import Sidebar from '@components/Sidebar';
import { node } from 'prop-types';
import React from 'react';
import Head from 'next/head';

const AdminLayout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Admin - Qurban Darussalam</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex">
                <div className="shrink-0">
                    <Sidebar />
                </div>
                <div className="px-8 py-10 w-full">{children}</div>
            </div>
        </>
    );
};
AdminLayout.propTypes = {
    children: node.isRequired
};
AdminLayout.defaultProps = {
    children: <div />
};
export default AdminLayout;
