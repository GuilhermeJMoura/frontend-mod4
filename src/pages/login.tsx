export const Login = () => {
    return (
        <div className="flex flex-col lg:flex-row bg-slate-900 min-h-screen max-sm:h-screen max-sm:justify-center max-sm: items-center">
            <div className="w-screen lg:w-1/2 h-screen  bg-stone-900 min-h-screen max-sm:h-screen max-sm:justify-center max-sm: items-center">
                <div className="m-12 lg:m-20">
                    <form className="bg-neutral-800 shadow-md px-8 pt-6 pb-8 mb-4">
                        <div className="text-center">
                            <img className="w-64 mx-auto mb-8" src="src/assets/logo.png" alt="logo" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="bg-yellow-300 hover:bg-red-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Login
                            </button>
                        </div>
                        <br />
                        <br />
                    </form>
                </div>
            </div>
            <div className="w-full lg:w-1/2 h-screen bg-slate-950">
                <img className="w-screen h-screen object-cover max-sm:hidden max-dm:screen" src="https://pubimg.band.uol.com.br/files/26d840eb9aa5c99de862.webp" alt="" />
            </div>
        </div>
    );
};