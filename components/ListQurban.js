import { object } from 'prop-types';
import React from 'react';
import Image from 'next/image';
import Sapi from '@assets/sapi.jpeg';
import { func } from 'prop-types';
import noop from '@helpers/noop';
import DescQurban from './DescQurban';

const ListQurban = ({ item, handleClick }) => {
    const { quota, _id, image } = item;
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-xl mb-6">
            <div className="rounded-lg">
                <a href="#">
                    <Image
                        src={image?.photos || Sapi}
                        width={450}
                        height={280}
                        alt="Sapi"
                        className="rounded-tl-lg rounded-tr-lg"
                    />
                </a>
            </div>
            <div className="px-5 py-2">
                <DescQurban item={item} />
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
