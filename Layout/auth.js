import { node } from 'prop-types';

const AuthLayout = ({ children }) => {
    return (
        <section className="bg-gray-50">
            <div className="flex h-screen flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
