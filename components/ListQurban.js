import { object } from 'prop-types';
import React from 'react';
import Image from 'next/image';
import Sapi from '@assets/sapi.jpeg';
import toIDR from '@helpers/toIDR';
import mappingType from '@helpers/mappingType';

const admPrice = 1575000;
const ListQurban = ({ item }) => {
    const { name, type, price, weight } = item;
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
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded dark:bg-purple-200 dark:text-purple-800">
                        {mappingType(type) || 'No Type'}
                    </span>
                </div>
                <div className="py-5">
                    <div className="flex justify-between items-center">
                        <p>Berat: </p>
                        <p className="font-semibold">{weight}</p>
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
                        <span className="font-normal text-gray-800"> /orang</span>
                    </p>
                </div>
                <div className="py-2">
                    <button className="text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 w-full focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-4 text-center">
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        </div>
    );
};

ListQurban.propTypes = {
    item: object
};
ListQurban.defaultProps = {
    item: {}
};
export default ListQurban;
