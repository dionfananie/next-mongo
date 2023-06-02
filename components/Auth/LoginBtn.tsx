import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login() {
    const { data: session } = useSession();

    const renderHasSign = () => {
        return (
            <>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Signed in as {session?.user?.email || ''}
                </h1>

                <button
                    type="button"
                    onClick={() => signOut()}
                    className="focus:outline-none w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    Sign Out
                </button>
            </>
        );
    };

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            {session ? (
                                renderHasSign()
                            ) : (
                                <>
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Sign in to your account
                                    </h1>

                                    <button
                                        type="button"
                                        onClick={() => signIn()}
                                        className="focus:outline-none w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                                        Sign In
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
