import Title from '@components/Admin/Title';
import { loadQurbanType } from '@lib/fetch-data';
import Layout from 'Layout/admin';
import { object } from 'prop-types';
import { arrayOf } from 'prop-types';

export default function QurbanType({ item }) {
    return (
        <Layout>
            <Title text="Tipe Qurban" />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-3 px-4 sm:px-0">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tipe Sapi
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama Sapi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {item?.map((item) => {
                            const { _id, name, type } = item;
                            return (
                                <tr className="bg-white border-b" key={_id}>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                                        {type}
                                    </th>
                                    <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                        {name}
                                    </th>
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
    const item = await loadQurbanType();

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

QurbanType.propTypes = {
    item: arrayOf(object)
};
QurbanType.defaultProps = {
    item: []
};
