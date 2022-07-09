import { postBuyer } from '@lib/fetch-data';
import React from 'react';
import { useForm } from 'react-hook-form';

const FormBuyer = () => {
    console.log(process.env.NEXT_PUBLIC_API_URL_LOCAL);
    const { handleSubmit, register } = useForm();
    const onSubmit = async (data) => {
        const formData = new URLSearchParams();
        for (const key in data) {
            formData.append(key, data[key]);
        }

        for (const pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        const res = await postBuyer(formData.toString());
        console.log('res: ', res);
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
                <input
                    type="submit"
                    value="Pesan"
                    className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                />
            </form>
        </div>
    );
};

export default FormBuyer;
