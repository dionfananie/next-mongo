import Title from '@components/Admin/Title';
import mappingType from '@helpers/mappingType';
import toIDR from '@helpers/toIDR';
import { PlusIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { deleteQurban, loadQurban } from '@lib/fetch-data';
import Layout from 'Layout/admin';
import { object, arrayOf } from 'prop-types';
import { useRouter } from 'next/router';
import ModalDelete from '@components/Admin/ModalDelete';

export default function Qurban({ items }) {
    const router = useRouter();
    const [selectedItem, setSelectedItem] = useState();
    const handleOpen = (id) => setSelectedItem(id);
    const handleDelete = async () => {
        try {
            const resp = await deleteQurban(selectedItem?._id);
            console.log(resp);
            if (resp?.is_success) setSelectedItem();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Layout>
            <div className="flex justify-between">
                <Title text="List Sapi Qurban" />
                <button
                    onClick={() => router.push('/admin/qurban/create')}
                    className="text-white focus:ring-4 focus:outline-none rounded-lg text-sm px-4 text-center bg-purple-600 hover:bg-purple-800 focus:ring-purple-300">
                    <span className="flex items-center">
                        <PlusIcon className="w-6 h-6 mr-2" />
                        Tambah Qurban
                    </span>
                </button>
            </div>
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
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items?.map((item) => {
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
                                    <td className="px-6 py-4">
                                        <button
                                            data-modal-toggle="popup-modal"
                                            onClick={() => handleOpen(item)}
                                            className="text-white focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-1 text-center bg-red-600 hover:bg-red-800 focus:ring-red-300">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {Boolean(selectedItem) && (
                <ModalDelete
                    onSubmit={handleDelete}
                    onClose={() => setSelectedItem(0)}
                    name={selectedItem?.name}
                />
            )}
        </Layout>
    );
}

export async function getStaticProps() {
    const items = await loadQurban();

    return {
        props: {
            items
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 7200 // In seconds
    };
}

Qurban.propTypes = {
    items: arrayOf(object)
};
Qurban.defaultProps = {
    items: []
};
