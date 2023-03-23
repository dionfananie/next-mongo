import { TrashIcon } from '@heroicons/react/outline';
import { func } from 'prop-types';

const Delete = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="text-white focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-1 text-center bg-red-600 hover:bg-red-800 focus:ring-red-300">
            <span className="flex items-center">
                <TrashIcon className="w-6 h-6 mr-2" />
                Delete
            </span>
        </button>
    );
};
Delete.propTypes = {
    onClick: func.isRequired
};
export default Delete;
