import Image from 'next/image';
import Logo from '@assets/logo_dkm.png';
import { node } from 'prop-types';

const AuthLayout = ({ children }) => {
    return (
        <section className="bg-gray-50">
            <div className="flex h-screen flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold">
                    <Image className="w-8 h-8 mr-2" src={Logo} alt="logo DKM" />
                </a>
                {children}
            </div>
        </section>
    );
};

AuthLayout.propTypes = {
    children: node.isRequired
};
AuthLayout.defaultProps = {
    children: <div />
};
export default AuthLayout;
