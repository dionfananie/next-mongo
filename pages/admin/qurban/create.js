import Title from '@components/Admin/Title';
import { object, arrayOf } from 'prop-types';

import Layout from 'Layout/admin';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loadQurbanType, postQurban } from '@lib/fetch-data';
import ListType from '@components/Admin/ListType';
import UploadBox from '@components/UploadBox';

const FormBuyer = ({ item }) => {
    const { handleSubmit, register } = useForm();
    const [selectedImg, setSelectedImg] = useState();
    const [imgUpload, setImgUpload] = useState();
    const [selectedType, setSelectedType] = useState(0);
    const onSubmit = async (data) => {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        formData.append('qurban_type', selectedType);
        formData.append('image', imgUpload);
        postQurban(formData);
    };

    const handleChange = (e) => setSelectedType(e);

    const handleUpload = (e) => {
        const fileUploaded = e.target.files[0];
        if (fileUploaded) {
            setImgUpload(fileUploaded);
            setSelectedImg({ img: URL.createObjectURL(fileUploaded), name: fileUploaded.name });
        }
    };

    const handleRemove = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setSelectedImg();
    };

    return (
        <Layout>
            <Title text="Tambah Sapi Qurban" />
            <div className="mb-5 px-4">
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <div className="relative w-full mb-6 group">
                        <div className="flex justify-center items-center w-full">
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer ">
                                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                    <UploadBox
                                        selectedImg={selectedImg}
                                        handleRemove={handleRemove}
                                    />
                                </div>
                                <input
                                    id="dropzone-file"
                                    accept=".png, .jpg, .jpeg"
                                    type="file"
                                    className="hidden"
                                    onChange={handleUpload}
                                    // {...register('image', { onChange: handleUpload })}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="relative w-full mb-6 group">
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
                    <div className="relative w-full mb-6 group">
                        <label
                            htmlFor="qurban_type"
                            className="block mb-2 text-sm font-medium text-purple-900">
                            Tipe Sapi
                        </label>
                        <ListType list={item} onChange={handleChange} />
                    </div>
                    <div className="relative w-full mb-6 group">
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
                    <div className="relative w-full mb-6 group">
                        <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-purple-900">
                            Harga Sapi
                        </label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-500 sm:text-sm">Rp</span>
                            </div>

                            <input
                                type="text"
                                id="price"
                                {...register('price')}
                                className="bg-purple-50 pl-8 pr-12 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5 "
                            />
                        </div>
                    </div>
                    <div className="relative w-full mb-6 group">
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
                        value="Tambah Qurban"
                        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                    />
                </form>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const item = await loadQurbanType();

    return {
        props: {
            item
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 7200 // In seconds
    };
}

FormBuyer.propTypes = {
    item: arrayOf(object)
};
FormBuyer.defaultProps = {
    item: []
};

export default FormBuyer;
