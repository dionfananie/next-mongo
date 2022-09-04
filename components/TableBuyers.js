import { object } from 'prop-types';
import { arrayOf } from 'prop-types';
import React from 'react';

const TableBuyers = ({ list }) => {
    if (!list.length) return null;
    return (
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
                            Keterangan
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {list?.map((item) => {
                        const { _id, name, desc, address } = item;
                        return (
                            <tr className="bg-white border-b" key={_id}>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                                    {name}
                                </th>
                                <td className="px-6 py-4">{address}</td>
                                <td className="px-6 py-4">{desc}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

TableBuyers.propTypes = {
    list: arrayOf(object)
};
TableBuyers.defaultProps = {
    list: []
};
export default TableBuyers;
