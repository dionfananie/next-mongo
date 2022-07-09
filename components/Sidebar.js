import { bool } from 'prop-types';
import { func } from 'prop-types';
import noop from '@helpers/noop';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@assets/logo_dkm.png';
const Sidebar = () => {
    return (
        <aside className="w-64 z-0 mt-1" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded  h-screen">
                <div className="bg-white-10 mb-4">
                    <Link className="flex-shrink-0" href="/" passHref>
                        <Image className="h-8 w-8" src={Logo} alt="Logo" height={50} width={200} />
                    </Link>
                </div>
                <ul className="space-y-2">
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ">
                            <svg
                                className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <span className="ml-3">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>

                            <span className="flex-1 ml-3 whitespace-nowrap">Add Qurban</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                />
                            </svg>

                            <span className="flex-1 ml-3 whitespace-nowrap">List Qurban</span>
                            <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full ">
                                10
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">List Buyer</span>
                            <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full">
                                20
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ">
                            <svg
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Tipe Qurban</span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ">
                            <svg
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                        </a>
                    </li>
                </ul>
                <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 ">
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100  group">
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
                        </a>
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
