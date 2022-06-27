import { object } from 'prop-types';
import React, { useMemo } from 'react';
import Image from 'next/image';
import Sapi from '@assets/sapi.jpeg';
import toIDR from '@helpers/toIDR';
import mappingType from '@helpers/mappingType';
import { func } from 'prop-types';
import noop from '@helpers/noop';

const admPrice = 1575000;
const maxQuota = 7;
const ListQurban = ({ item, handleClick }) => {
    const { name, type, price, weight, quota, _id } = item;
    const availQuota = useMemo(() => quota / maxQuota, [quota]);

    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md mb-6">
            <div className="rounded-lg">
                <a href="#">
                    <Image
                        src={Sapi}
                        layout="responsive"
                        alt="Sapi"
                        className="rounded-tl-lg rounded-tr-lg"
                    />
                </a>
            </div>
            <div className="px-5 py-2">
                <div className="flex justify-between items-center">
                    <a href="#">
                        <h5 className="text-3xl font-semibold tracking-tight text-gray-900 ">
                            {name || Sapi}
                        </h5>
                    </a>
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded dark:bg-purple-200 dark:text-purple-800">
                        {mappingType(type) || 'No Type'}
                    </span>
                </div>
                <div className="py-5">
                    <div className="flex justify-between items-center">
                        <p>Berat: </p>
                        <p className="font-semibold">{weight} kg</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Harga Sapi: </p>
                        <p className="font-semibold">{toIDR(price)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Ongkos Potong: </p>
                        <p className="font-semibold">{toIDR(admPrice)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Total: </p>
                        <p className="font-semibold text-orange-500">{toIDR(price + admPrice)}</p>
                    </div>
                </div>

                <div>
                    <p className="text-xl font-semibold text-orange-600">
                        {toIDR(Math.round(Math.floor((price + admPrice) / 7)), 2)}
                        <span className="font-normal text-base text-gray-600"> /orang</span>
                    </p>
                </div>
                <div className="py-2">
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-purple-700 ">Tersisa</span>
                        <span className="text-sm font-medium text-purple-700 ">
                            {quota} Quota lagi
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-purple-600 h-2.5 rounded-full"
                            style={{ width: 100 - availQuota * 100 + '%' }}></div>
                    </div>
                </div>
                <div className="py-2">
                    <button
                        onClick={() => handleClick(_id)}
                        className={`text-white focus:ring-4 w-full focus:outline-none font-medium rounded-lg text-sm px-4 py-4 text-center ${
                            !quota
                                ? 'bg-gray-400 focus:ring-gray-300'
                                : 'bg-purple-600 hover:bg-purple-800 focus:ring-purple-300'
                        }`}>
                        {quota ? 'Pesan Sekarang' : 'Habis, Cek Detail'}
                    </button>
                </div>
            </div>
        </div>
    );
};

ListQurban.propTypes = {
    item: object,
    handleClick: func
};
ListQurban.defaultProps = {
    item: {},
    handleClick: noop
};
export default ListQurban;
