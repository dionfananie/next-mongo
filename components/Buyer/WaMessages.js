import { ChatIcon } from '@heroicons/react/solid';
import useSWR from 'swr';
const WAMessages = () => {
    useSWR();
    return (
        <button
            // onClick={onClick}
            className={`text-white focus:ring-4 focus:outline-none px-4 py-1 rounded-lg text-sm text-center mr-3`}>
            <ChatIcon /> Whatsapp
        </button>
    );
};

export default WAMessages;
