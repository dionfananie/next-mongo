import { CheckIcon } from '@heroicons/react/solid';

const MarkPaid = () => {
    return (
        <button
            className={`text-white focus:ring-4 focus:outline-none px-4 py-1 rounded-lg text-sm text-center bg-purple-600 hover:bg-purple-800 focus:ring-purple-300 mr-3`}>
            <span className="flex items-center">
                <CheckIcon className="w-6 h-6 mr-2" />
                Tandai Sudah Lunas
            </span>
        </button>
    );
};

export default MarkPaid;
