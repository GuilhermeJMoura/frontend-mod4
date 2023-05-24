
export const Login = () => {
        return (
                <div className="flex bg-slate-900 items-center h-screen">
                    <div className="flex-1  w-1/2 h-full bg-stone-900">
                        <div className="m-44">
                            <form className="bg-neutral-800 shadow-md px-8 pt-6 pb-8 mb-4">
                                <img className="" src="src\assets\logo.png" alt="logo" />
                                <br />
                                <br />
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Username
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                </div>
                                <div className="flex justify-center items-center">
                                    <button className="bg-yellow-300 hover:bg-red-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="flex-2 w-1/2 h-screen bg-slate-950">
                        <img className="h-screen" src="https://pubimg.band.uol.com.br/files/26d840eb9aa5c99de862.webp" alt="" />
                    </div>
                </div>
        );
    };