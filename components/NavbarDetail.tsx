import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

interface NavbarDetailProps {
    text: string;
}
const NavbarDetail = ({ text = '' }: NavbarDetailProps) => {
    const router = useRouter();
    return (
        <nav className="bg-white shadow-lg fixed z-10 w-full top-0">
            <div className="mx-auto px-4 md:px-8 py-4">
                <div className="flex items-center">
                    <ArrowLeftIcon
                        className="h-5 w-5 text-black-500 mr-4"
                        onClick={() => router.back()}
                    />
                    <p className="font-semibold text-lg">{text}</p>
                </div>
            </div>
        </nav>
    );
};

export default NavbarDetail;
