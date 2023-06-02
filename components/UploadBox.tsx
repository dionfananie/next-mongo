import noop from '../helpers/noop';
import { UploadIcon, TrashIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { func, object } from 'prop-types';

interface UploadBoxProps {
    selectedImg: { img: string; name: string };
    handleRemove: () => void;
}

const UploadBox = ({ selectedImg, handleRemove }: UploadBoxProps) => {
    if (!selectedImg?.img)
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
UploadBox.propTypes = {
    selectedImg: object,
    handleRemove: func
};
UploadBox.defaultProps = {
    selectedImg: {},
    handleRemove: noop
};
export default UploadBox;
