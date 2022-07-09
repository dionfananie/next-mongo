import Navigation from '@components/NavigationAdmin';
import { node } from 'prop-types';
import React from 'react';

const Admin = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
};
Admin.propTypes = {
    children: node.isRequired
};
export default Admin;
