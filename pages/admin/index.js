// import Title from '@components/Admin/Title';
import AdminProvider from 'contexts/admin';
import Layout from 'Layout/admin';

function Admin() {
    return <Layout title="Admin page"></Layout>;
}

Admin.getLayout = function getLayout(page) {
    return <AdminProvider>{page}</AdminProvider>;
};

export default Admin;
