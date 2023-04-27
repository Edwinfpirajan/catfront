import Logo from '../assets/img/smart-escuela-de-idiomas-bogota-logo.jpg'

const Navigation = () => {
    return (
        <nav className="flex justify-between items-center bg-red-600 px-20 h-20" style={{borderBottom:"1px solid gray"}}>
            <div className="flex items-center" >
                <img src={Logo} className="w-10 h-10 mr-2" alt="logo" />
                <span className="font-semibold text-xl text-white tracking-tight">My App</span>
            </div>
            <div className="w-full block lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow flex justify-between w-full">
                    <a
                        href="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 font-medium transition duration-700 mr-4 text-lg"
                        style={{ fontSize: "1.2rem" }}
                    >
                        Inicio
                    </a>
                    <a
                        href="/images"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 font-medium transition duration-700 mr-4 text-lg"
                        style={{ fontSize: "1.2rem" }}
                    >
                        Imagenes
                    </a>
                    <a
                        href="/cats"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 font-medium transition duration-700 mr-4 text-lg"
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