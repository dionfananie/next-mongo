import { bool, func } from 'prop-types';

import noop from '@helpers/noop';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@assets/logo_dkm.png';
import { useRouter } from 'next/router';
import {
    ChartPieIcon,
    PlusIcon,
    ViewListIcon,
    ColorSwatchIcon,
    LoginIcon,
    UserGroupIcon
} from '@heroicons/react/solid';

const LIST_MENU = [
    { url: '/admin', text: 'Dashboard', icon: <ChartPieIcon /> },
    { url: '/admin/buyer', text: 'List Pembeli', icon: <UserGroupIcon /> },
    { url: '/admin/qurban/create', text: 'Add Qurban', icon: <PlusIcon /> },
    { url: '/admin/qurban', text: 'List Qurban', icon: <ViewListIcon /> },
    { url: '/admin/qurban/type', text: 'Tipe Sapi Qurban', icon: <ColorSwatchIcon /> },
    { url: '/sign-in', text: 'Sign In', icon: <LoginIcon /> }
];
const Sidebar = () => {
    const router = useRouter();
    const currentRoute = router.pathname;
    console.log(currentRoute);
    return (
        <aside className="w-64 z-0 mt-1" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded  h-screen">
                <div className="bg-white-10 mb-4">
                    <Link className="flex-shrink-0" href="/" passHref>
                        <Image className="h-8 w-8" src={Logo} alt="Logo" height={50} width={200} />
                    </Link>
                </div>
                <ul className="space-y-2">
                    {LIST_MENU.map((item, key) => {
                        const { url, text, count, icon } = item;
                        const isActive = url === currentRoute;
                        return (
                            <li className="cursor-pointer" key={`menu-${key}`}>
                                <Link passHref href={url}>
                                    <div
                                        className={`flex items-center p-2 text-base font-normal text-gray-900 hover:text-gray-900 rounded-lg transition duration-75 hover:bg-gray-200 group ${
                                            isActive && 'bg-purple-600 text-white'
                                        }`}>
                                        <div
                                            className={`flex-shrink-0 w-6 h-6 hover:text-gray-500 ${
                                                isActive ? 'text-white' : 'text-gray-500'
                                            }`}>
                                            {icon}
                                        </div>
                                        <span className="ml-3">{text}</span>
                                        {count && (
                                            <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full">
                                                {count}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 ">
                    <li className="cursor-pointer">
                        <Link passHref href="/sign-in">
                            <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group">
                                <svg
                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span className="ml-3">Help</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
Sidebar.propTypes = {
    sidebarOpen: bool,
    setSidebarOpen: func
};
Sidebar.defaultProps = {
    sidebarOpen: false,
    setSidebarOpen: noop
};
