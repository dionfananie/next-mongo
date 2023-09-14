import { postLogin } from '../../lib/fetch-data';
import Layout from 'Layout/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();

    const [isInvalid, setIsInvalid] = useState({ success: true, text: '' });
    const { handleSubmit, register } = useForm();
    const onSubmit = async (data) => {
        try {
            const formData = new URLSearchParams();
            for (const key in data) {
                formData.append(key, data[key]);
            }
            const resp = await postLogin(formData.toString());
            console.log('resp: ', resp);
            if (resp?.success) router.push('/');
            setIsInvalid({ success: false, text: resp?.message });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Layout>
            {!isInvalid?.success && (
                <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-3 rounded relative sm:max-w-md w-full"
                    role="alert">
                    <span className="block sm:inline">
                        <strong className="font-bold">Error: </strong>
                        {isInvalid?.text}
                    </span>

                    <span
                        className="absolute top-0 bottom-0 right-0 px-4 py-3"
                        onClick={() => setIsInvalid({ is_success: 1 })}>
                        <svg
                            className="fill-current h-6 w-6 text-red-500"
                            role="button"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <title>Close</title>
                            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                        </svg>
                    </span>
                </div>
            )}

            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign in to your account
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900">
                                Your email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="name@company.com"
                                required
                                {...register('email')}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                required
                                {...register('password')}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                        required=""
                                    />
                                </div>
                                <div className="ml-3 text-sm cursor-pointer">
                                    <label htmlFor="remember" className="text-gray-500">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="text-sm font-medium text-primary-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Sign in
                        </button>
                        <p className="text-sm font-light text-gray-500">
                            Don’t have an account yet?{' '}
                            <a href="#" className="font-medium text-primary-600 hover:underline">
                                Sign up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
