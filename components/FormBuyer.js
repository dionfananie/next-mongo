import { postBuyer } from '@lib/fetch-data';
import { useRouter } from 'next/router';
import { object } from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import LoaderState from './LoaderState';
import ModalSuccess from './Modal/Success';

const FormBuyer = ({ item }) => {
    const router = useRouter();
    const { handleSubmit, register } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const { _id: id, name, qurban_type } = item || {};
    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            const formData = new URLSearchParams();
            formData.append('qurban', JSON.stringify({ qurban_id: id, name, qurban_type }));
            formData.append('hasPaid', false);
            for (const key in data) {
                formData.append(key, data[key]);
            }
            const resp = await postBuyer(formData.toString());
            if (resp?.is_success) setIsShow(true);
        } catch (error) {
            console.error(error);
        }
    };

    const onClose = () => {
        router.push(`/qurban/${id}`);
    };
    return (
        <div className="mb-5 px-4">
            <p className="text-2xl mb-4">Form Pemesanan</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative z-0 w-full mb-6 group">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-purple-900">
                        Nama Pemesan
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        {...register('name')}
                        className="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "
                    />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label
                        htmlFor="address"
                        className="block mb-2 text-sm font-medium text-purple-900">
                        Alamat
                    </label>
                    <input
                        type="text"
                        id="address"
                        required
                        {...register('address')}
                        className="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5 "
                    />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label
                        htmlFor="handphone"
                        className="block mb-2 text-sm font-medium text-purple-900">
                        No Handphone
                    </label>
                    <input
                        type="text"
                        id="handphone"
                        required
                        {...register('handphone')}
                        className="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5 "
                    />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-purple-900">
                        Keterangan
                    </label>
                    <textarea
                        type="text"
                        id="description"
                        {...register('description')}
                        className="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5 "
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                    {isLoading ? <LoaderState /> : 'Pesan'}
                </button>
            </form>
            {isShow && <ModalSuccess text="Sukses Memesan Hewan Qurban" onClose={onClose} />}
        </div>
    );
};
FormBuyer.propTypes = {
    item: object.isRequired
};
export default FormBuyer;
