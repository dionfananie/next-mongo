import { func, string } from 'prop-types';
import { BadgeCheckIcon, XIcon } from '@heroicons/react/solid';
import style from './Success.module.css';
const ModalSuccess = ({ onClose, text }) => {
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
                        <div className="p-6 text-center">
                            <BadgeCheckIcon className="mx-auto mb-4 w-20 h-20 text-green-500" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500">{text}</h3>
                            <button
                                type="button"
                                onClick={onClose}
                                className="text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

ModalSuccess.propTypes = {
    onClose: func.isRequired,
    text: string
};
ModalSuccess.defaultProps = {
    text: ''
};

export default ModalSuccess;
