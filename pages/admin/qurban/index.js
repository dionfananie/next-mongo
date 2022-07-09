import mappingType from '@helpers/mappingType';
import toIDR from '@helpers/toIDR';
import { loadData } from '@lib/fetch-data';
import Layout from 'Layout/admin';
import { object } from 'prop-types';
import { arrayOf } from 'prop-types';

export default function Qurban({ item }) {
    return (
        <Layout>
            <p className="text-2xl text-bold">Hello</p>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-3 px-4 sm:px-0">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nama Sapi
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Harga
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kuota tersisa
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Jenis sapi
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Berat
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {item?.map((item) => {
                            const { _id, name, qurban_type, quota, price, weight } = item;
                            return (
                                <tr className="bg-white border-b" key={_id}>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                                        {name}
                                    </th>
                                    <td className="px-6 py-4">{toIDR(price)}</td>
                                    <td className="px-6 py-4">{quota}</td>
                                    <td className="px-6 py-4">{mappingType(qurban_type)}</td>
                                    <td className="px-6 py-4">{weight} kg</td>
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
    const item = await loadData();

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

Qurban.propTypes = {
    item: arrayOf(object)
};
Qurban.defaultProps = {
    item: []
};
