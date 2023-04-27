const Navigation = () => {
    return (
        <nav className="flex justify-between items-center bg-transparent p-6 px-20">
            <div className="flex items-center">
                <img src="" className="w-10 h-10 mr-2" alt="logo" />
                <span className="font-semibold text-xl tracking-tight">My App</span>
            </div>
            <div className="w-full block lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow flex justify-between w-full">
                    <a
                        href="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-800 font-medium transition duration-700 mr-4 text-lg"
                        style={{ fontSize: "1.2rem" }}
                    >
                        Inicio
                    </a>
                    <a
                        href="/images"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-800 font-medium transition duration-700 mr-4 text-lg"
                        style={{ fontSize: "1.2rem" }}
                    >
                        Imagenes
                    </a>
                    <a
                        href="/cats"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-800 font-medium transition duration-700 mr-4 text-lg"
                        style={{ fontSize: "1.2rem" }}
                    >
                        Gatos
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;