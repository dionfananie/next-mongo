import mappingType from '@helpers/mappingType';
import toIDR from '@helpers/toIDR';
import { object } from 'prop-types';
import React from 'react';
import Quota from '../Quota';
const admPrice = 1575000;

const DescQurban = ({ item }) => {
    const { name, qurban_type, price, weight, quota } = item;
    return (
        <>
            <div className="flex justify-between items-start">
                <a href="#" style={{ maxWidth: '85%' }}>
                    <h5 className="text-3xl font-semibold tracking-tight text-gray-900 ">
                        {name || 'Sapi'}
                    </h5>
                </a>
                <span className="bg-purple-100 text-purple-800 my-1 text-xs font-semibold px-2 py-1 rounded dark:bg-purple-200 dark:text-purple-800">
                    {mappingType(qurban_type)}
                </span>
            </div>
            <div className="py-5">
                <div className="flex justify-between items-center mb-1">
                    <p>Berat: </p>
                    <p className="font-semibold">{weight} kg</p>
                </div>
                <div className="flex justify-between items-center mb-1">
                    <p>Harga Sapi: </p>
                    <p className="font-semibold">{toIDR(price)}</p>
                </div>
                <div className="flex justify-between items-center mb-1">
                    <p>Ongkos Potong: </p>
                    <p className="font-semibold">{toIDR(admPrice)}</p>
                </div>
                <div className="flex justify-between items-center mb-1">
                    <p>Total Biaya: </p>
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
                <Quota quota={quota} />
            </div>
        </>
    );
};

DescQurban.propTypes = {
    item: object
};
DescQurban.defaultProps = {
    item: {}
};

export default DescQurban;
