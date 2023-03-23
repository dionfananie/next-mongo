import Title from '@components/Admin/Title';
import TipeQurban from '@components/TipeQurban';
import DeleteTipe from '@components/TipeQurban/DeleteTipe';
import { loadQurbanType } from '@lib/fetch-data';
import Layout from 'Layout/admin';
import { useEffect, useState } from 'react';

export default function QurbanType() {
    const [listTipe, setListTipe] = useState([]);

    const fetchData = async () => {
        const item = await loadQurbanType();
        setListTipe(item);
    };
    useEffect(() => fetchData(), []);

    return (
        <Layout>
            <div className="flex justify-between">
                <Title text="Tipe Qurban" />
                <TipeQurban fetchData={fetchData} />
            </div>
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
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listTipe?.map((item) => {
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
                                    <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                        <DeleteTipe id={_id} fetch={fetchData} />
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
