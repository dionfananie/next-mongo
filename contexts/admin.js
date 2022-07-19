import { node } from 'prop-types';
import React, { createContext, useState } from 'react';

export const AdminContext = createContext({});

const AdminProvider = ({ children }) => {
    const [messageContact, setMessageContact] = useState('hahah');
    return (
        <AdminContext.Provider
            value={{
                messageContact,
                setMessageContact
            }}>
            {children}
        </AdminContext.Provider>
    );
};
AdminProvider.propTypes = {
    children: node.isRequired
};

export default AdminProvider;
