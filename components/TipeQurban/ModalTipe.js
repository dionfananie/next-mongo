import { bool, func } from 'prop-types';
import style from './modal.module.css';
import { useForm } from 'react-hook-form';
import LoaderState from '../LoaderState';
import { XIcon } from '@heroicons/react/solid';

const ModalTipe = ({ onClose, onSubmit, isLoading }) => {
    // const router = useRouter();
    const { handleSubmit, register } = useForm();

    return (
        <>
            <div className={style.wrapperModal}></div>
            <div
                tabIndex="-1"
                className={`${style.innerModal} overflow-y-auto overflow-x-hidden fixed right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex`}
                aria-modal="true"
                role="dialog">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-gray-100 rounded-lg shadow">
                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <XIcon className="w-6 h-6" />

                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-4">
                            <p className="text-2xl mb-4">Form Pemesanan</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="relative z-0 w-full mb-6 group">
                                    <label
                                        htmlFor="tipe"
                                        className="block mb-2 text-sm font-medium text-purple-900">
                                        Tipe Sapi
                                    </label>
                                    <input
                                        type="text"
                                        id="type"
                                        required
                                        {...register('type')}
                                        className="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "
                                    />
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <label
                                        htmlFor="address"
                                        className="block mb-2 text-sm font-medium text-purple-900">
                                        Nama Sapi
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        {...register('name')}
                                        className="bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5 "
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                                    {isLoading ? <LoaderState /> : 'Tambah Tipe'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

ModalTipe.propTypes = {
    onClose: func.isRequired,
    onSubmit: func.isRequired,
    isLoading: bool
};
ModalTipe.defaultProps = {
    isLoading: false
};

export default ModalTipe;
