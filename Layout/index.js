import Navigation from '@components/Navigation';
import { node } from 'prop-types';
import React from 'react';
const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
};

Layout.propTypes = {
    children: node.isRequired
};
export default Layout;
