import { CheckIcon, MinusIcon } from '@heroicons/react/outline';
import { bool, func } from 'prop-types';

const MarkPaid = ({ hasPaid, onClick }) => {
    const hasPaidCss = hasPaid
        ? 'bg-red-600 hover:bg-red-800 focus:ring-red-300'
        : 'bg-purple-600 hover:bg-purple-800 focus:ring-purple-300';
    return (
        <button
            onClick={onClick}
            className={`text-white focus:ring-4 focus:outline-none px-4 py-1 rounded-lg text-sm text-center mr-3 ${hasPaidCss}`}>
            <div className="flex items-center">
                {hasPaid ? (
                    <MinusIcon className="w-6 h-6 mr-2" />
                ) : (
                    <CheckIcon className="w-6 h-6 mr-2" />
                )}
                {hasPaid ? 'Tandai Belum Lunas' : ' Tandai Sudah Lunas'}
            </div>
        </button>
    );
};
MarkPaid.propTypes = {
    hasPaid: bool,
    onClick: func
};
MarkPaid.defaultProps = {
    hasPaid: false,
    onClick: () => {}
};
export default MarkPaid;
