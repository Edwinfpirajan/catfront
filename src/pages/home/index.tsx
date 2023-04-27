const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Documentación de mi aplicación</h1>
                <p className="text-lg mb-2">Este proyecto fue realizado con las siguientes tecnologías:</p>
                <ul className="flex justify-center text-lg mb-4">
                    <li className="mr-4"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--m_Ng9MLF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/fppjegg7q1kb2pdzmlvf.png" style={{height:"100px"}}/></li>
                    <li className="mr-4"><img src="https://vitejs.dev/logo-with-shadow.png" style={{height:"100px"}}/></li>
                    <li className="mr-4"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png" style={{height:"100px"}}/></li>
                    <li className="mr-4"><img src="https://desarrolloweb.com/storage/tag_images/actual/F2Cam6JmHqcvyb6Y0GVl7lSCqA4tEYLMufLm5OHo.png" style={{height:"100px"}}/></li>
                    <li className="mr-4"><img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" style={{height:"100px"}}/></li>
                    <li className="mr-4"><img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" style={{height:"100px"}}/></li>
                    <li className="mr-4"><img src="https://railway.app/brand/logo-dark.svg" style={{height:"100px"}}/></li>
                </ul>
                <p className="text-lg mb-2">Puede acceder a la documentación de la aplicación en el siguiente enlace:</p>
                <a href="https://catbackend-production.up.railway.app/documentation" className="underline text-red-500 font-bold">
                    catbackend-production.up.railway.app/documentation
                </a>
            </div>
        </div>
    )
}

export default Home