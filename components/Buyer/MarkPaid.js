import { CheckIcon, BadgeCheckIcon } from '@heroicons/react/outline';
import { bool } from 'prop-types';

const MarkPaid = ({ isPaid }) => {
    const isPaidCss = isPaid
        ? 'bg-green-600 hover:bg-green-800 focus:ring-green-300'
        : 'bg-purple-600 hover:bg-purple-800 focus:ring-purple-300';
    return (
        <button
            className={`text-white focus:ring-4 focus:outline-none px-4 py-1 rounded-lg text-sm text-center mr-3 ${isPaidCss}`}>
            <span className="flex items-center">
                {isPaid ? (
                    <BadgeCheckIcon className="w-6 h-6 mr-2" />
                ) : (
                    <CheckIcon className="w-6 h-6 mr-2" />
                )}
                {isPaid ? 'Lunas' : ' Tandai Sudah Lunas'}
            </span>
        </button>
    );
};
MarkPaid.propTypes = {
    isPaid: bool
};
MarkPaid.defaultProps = {
    isPaid: false
};
export default MarkPaid;
