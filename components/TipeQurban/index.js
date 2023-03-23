import { PlusIcon } from '@heroicons/react/solid';
import TipeQurbanQurban from '@components/TipeQurban/ModalTipe';
import { useState } from 'react';
import { postTypeQurban } from '@lib/fetch-data';
import ToastSuccess from './ToastInfo';
import { func } from 'prop-types';

const TipeQurban = ({ fetchData }) => {
    const [isShow, setIsShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowToast, setIsShowToast] = useState(false);

    const onClose = () => {
        setIsLoading(false);
        setIsShow(false);
    };
    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            const formData = new URLSearchParams();
            for (const key in data) {
                formData.append(key, data[key]);
            }
            const resp = await postTypeQurban(formData.toString());
            if (resp?.is_success) {
                setIsShowToast(true);
                setIsLoading(false);
                setIsShow(false);
                fetchData();
                setTimeout(() => {
                    setIsShowToast(false);
                }, 2000);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsShow(true)}
                className="text-white focus:ring-4 focus:outline-none rounded-lg text-sm px-4 text-center bg-purple-600 hover:bg-purple-800 focus:ring-purple-300">
                <span className="flex items-center">
                    <PlusIcon className="w-6 h-6 mr-2" />
                    Tambah Tipe
                </span>
            </button>
            {isShow && (
                <TipeQurbanQurban onClose={onClose} isLoading={isLoading} onSubmit={onSubmit} />
            )}
            {isShowToast && (
                <ToastSuccess
                    onClose={() => setIsShowToast(false)}
                    text=" Sukses menambah tipe qurban"
                />
            )}
        </>
    );
};

TipeQurban.propTypes = {
    fetchData: func.isRequired
};

export default TipeQurban;
