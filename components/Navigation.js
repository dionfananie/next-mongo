/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex items-center justify-between h-16">
                    <div className=" flex items-center">
                        <Link className="flex-shrink-0" href="/" passHref>
                            <Image
                                className="h-8 w-8"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt="Workflow"
                                height={40}
                                width={40}
                            />
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    href="/#">
                                    Home
                                </Link>
                                <Link
                                    className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    href="/#">
                                    List Qurban
                                </Link>

                                <Link
                                    className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    href="/#">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="ml-4 flex items-center md:ml-6"></div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            <svg
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="h-8 w-8"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        href="/#">
                        Home
                    </Link>
                    <Link
                        className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
                        href="/#">
                        List Qurban
                    </Link>

                    <Link
                        className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        href="/#">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
