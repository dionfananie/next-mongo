import React, { useEffect, useState } from 'react';

import { deleteBuyer, loadBuyersAll, loadQurban } from '@lib/fetch-data';
import Title from '@components/Admin/Title';
import ListOption from '@components/Admin/ListOption';
import AdminLayout from 'Layout/admin';
import styles from '@styles/buyer.module.css';
import dayjs from 'dayjs';
import MarkPaid from '@components/Buyer/MarkPaid';
import Delete from '@components/CTA/Delete';
import ModalDelete from '@components/Admin/ModalDelete';
function Buyer() {
    const [allItem, setAllItem] = useState([]);
    const [itemFiltered, setItemFiltered] = useState([]);
    const [listQurban, setListQurban] = useState([]);
    const [selectedItem, setSelectedItem] = useState();

    const handleChange = (value) => {
        if (value === 'all') {
            setItemFiltered(allItem);
            return;
        }
        const filtered = allItem.filter((v) => v.qurbanId === value);
        setItemFiltered(filtered);
    };

    const fetchData = async () => {
        const item = await loadBuyersAll();
        const list = await loadQurban({ projection: JSON.stringify({ name: 1 }) });
        setAllItem(item);
        setItemFiltered(item);
        setListQurban(list);
    };

    const handleDelete = async () => {
        await deleteBuyer(selectedItem?.item);
    };

    useEffect(() => fetchData(), []);

    return (
        <>
            <div className="flex justify-between items-center">
                <Title text="Daftar Penqurban" />
                <ListOption list={listQurban} onChange={handleChange} />
            </div>
            <h3 className="text-slate-500 mb-3">Total: {itemFiltered?.length || 0} Orang</h3>
            <div
                className={`${styles.wrapperTable} relative h-5/6 overflow-x-auto shadow-md sm:rounded-lg my-3 px-4 sm:px-0`}>
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
                                Tanggal
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kelunasan
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {Boolean(itemFiltered.length) && (
                        <tbody>
                            {itemFiltered?.map((item) => {
                                const { _id, name, desc, handphone, address, date } = item;
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
                                            {dayjs(date).format('DD-MMM-YYYY')}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="bg-gray-100 text-gray-800 my-1 text-xs font-semibold px-2 py-1 rounded">
                                                Belum Lunas
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <MarkPaid />
                                                <Delete onClick={() => setSelectedItem(item)} />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    )}
                </table>
                {!itemFiltered.length && (
                    <div className="flex justify-center items-center h-32">
                        <p className="text-gray-500">Belum ada Pengurban</p>
                    </div>
                )}
            </div>
            {Boolean(selectedItem) && (
                <ModalDelete
                    onSubmit={handleDelete}
                    onClose={() => setSelectedItem(0)}
                    text={`Anda yakin akan menghapus daftar penqurban <b>${
                        selectedItem?.name || ''
                    }</b> ini?`}
                />
            )}
        </>
    );
}
Buyer.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};
export default Buyer;
