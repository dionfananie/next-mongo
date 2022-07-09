import Layout from 'Layout/admin';
import { loadBuyersAll } from '@lib/fetch-data';
import { arrayOf } from 'prop-types';
import { object } from 'prop-types';
import Title from '@components/Admin/Title';

export default function Buyer({ item }) {
    return (
        <Layout>
            <Title text="Daftar Pembeli" />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-3 px-4 sm:px-0">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nama Pemesan
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Alamat
                            </th>
                            <th scope="col" className="px-6 py-3">
                                No Handphone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Keterangan
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {item?.map((item) => {
                            const { _id, name, desc, handphone, address } = item;
                            return (
                                <tr className="bg-white border-b" key={_id}>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                                        {name}
                                    </th>
                                    <td className="px-6 py-4">{address}</td>
                                    <td className="px-6 py-4">{handphone}</td>
                                    <td className="px-6 py-4">{desc}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const item = await loadBuyersAll();

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

Buyer.propTypes = {
    item: arrayOf(object)
};
Buyer.defaultProps = {
    item: []
};
