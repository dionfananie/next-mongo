import Layout from 'Layout/admin';
import { loadBuyersAll } from '@lib/fetch-data';
import { arrayOf } from 'prop-types';
import { object } from 'prop-types';
import Title from '@components/Admin/Title';
import { CheckIcon } from '@heroicons/react/solid';

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
                                Keterangan
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kelunasan
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
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
                                        className="px-6 py-4 font-medium whitespace-nowrap">
                                        <span className="text-gray-900 text-lg">{name}</span>
                                        <br />
                                        {address}
                                        <br />
                                        {handphone}
                                    </th>
                                    <td className="px-6 py-4">{desc}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-100 text-gray-800 my-1 text-xs font-semibold px-2 py-1 rounded">
                                            Belum Lunas
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            className={`text-white focus:ring-4 focus:outline-none py-1 rounded-lg text-sm px-4 text-center bg-purple-600 hover:bg-purple-800 focus:ring-purple-300`}>
                                            <span className="flex items-center">
                                                <CheckIcon className="w-6 h-6 mr-2" />
                                                Tandai Sudah Lunas
                                            </span>
                                        </button>
                                    </td>
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
