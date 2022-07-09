import Title from '@components/Admin/Title';
import { TrashIcon, UploadIcon } from '@heroicons/react/outline';
// import { postQurban } from '@lib/fetch-data';
import Layout from 'Layout/admin';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const FormBuyer = () => {
    const { handleSubmit, register } = useForm();
    const [selectedImg, setSelectedImg] = useState();
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        // postQurban(formData);
    };
    const handleUpload = (e) => {
        const fileUploaded = e.target.files[0];
        if (fileUploaded)
            setSelectedImg({ img: URL.createObjectURL(fileUploaded), name: fileUploaded.name });
    };

    const handleRemove = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setSelectedImg();
    };

    const renderImg = () => {
        return (
            <div className="text-center">
                <Image src={selectedImg.img} width={250} height={140} alt="uploaded file" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">{selectedImg?.name}</span>
                </p>
                <button
                    onClick={handleRemove}
                    className={`text-white focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2 text-center bg-red-600 hover:bg-red-800 focus:ring-red-300`}>
                    <span className="flex items-center">
                        <TrashIcon className="w-6 h-6 mr-2" />
                        Hapus Gambar
                    </span>
                </button>
            </div>
        );
    };

    const renderUpload = () => {
        return (
            <>
                <UploadIcon className="mb-3 w-10 h-10 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Upload Gambar</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
            </>
        );
    };
    return (
        <Layout>
            <Title text="Tambah Sapi Qurban" />
            <div className="mb-5 px-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative z-0 w-full mb-6 group">
                        <div className="flex justify-center items-center w-full">
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer ">
                                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                    {selectedImg ? renderImg() : renderUpload()}
                                </div>
                                <input
                                    id="dropzone-file"
                                    accept=".png, .jpg, .jpeg"
                                    type="file"
                                    className="hidden"
                                    {...register('image', { onChange: handleUpload })}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-purple-900">
                            Nama Sapi
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
                            htmlFor="qurban_type"
                            className="block mb-2 text-sm font-medium text-purple-900">
                            Tipe Sapi
                        </label>
                        <input
                            type="text"
                            id="qurban_type"
                            required
                            {...register('qurban_type')}
                            className="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5 "
                        />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label
                            htmlFor="weight"
                            className="block mb-2 text-sm font-medium text-purple-900">
                            Berat
                        </label>
                        <input
                            type="text"
                            id="weight"
                            required
                            {...register('weight')}
                            className="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5 "
                        />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-purple-900">
                            Harga Sapi
                        </label>
                        <textarea
                            type="text"
                            id="price"
                            {...register('price')}
                            className="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5 "
                        />
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <label
                            htmlFor="quota"
                            className="block mb-2 text-sm font-medium text-purple-900">
                            Quota
                        </label>
                        <textarea
                            type="text"
                            id="quota"
                            {...register('quota')}
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
        </Layout>
    );
};

export default FormBuyer;
