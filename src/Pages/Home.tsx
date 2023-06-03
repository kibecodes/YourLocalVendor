import { faShop } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ContainerWrapper from "../components/ContainerWrapper"
import AppButton from "../components/AppButton"
import { NavLink } from 'react-router-dom'


const Home = () => {
    const handleClick = () => {
        <NavLink to={'/register'} />
    }
  return (
    

        <main className="h-screen w-screen">    
            <ContainerWrapper>
                    <div className="@container mx-auto px-5 max-w-screen-lg bg-jungle-green">
                        <section id="navbar" className="flex justify-between position-sticky z-1 h-40 rounded-2xl bg-slate-900 text-white px-2">
                            <figure className="flex justify-start p-2">
                                <div className="flex items-center justify-between">
                                    <FontAwesomeIcon icon={faShop} size='xl'/>
                                    <div id='title' className='p-4 mr-40'>
                                                <h1 className='font-bold text-2xl'>
                                                        Your Friendly Neighborhood Vendor
                                                </h1>      
                                    </div>
                                </div>
                            </figure>
                            <figure className="flex flex-row items-center space-x-8 p-4">
                                <div className="flex space-x-8 text-black dark:text-white hover:text-white font-bold text-xl cursor-pointer mr-8">
                                    <div className="hover:" >Services</div>
                                    <div>About</div>
                                    <div>Contact Us</div>
                                </div>
                            </figure>
                        </section>
                    </div>
            
                <main className="@container mx-auto px-5 max-w-screen-lg h-fit bg-laurel-green">
                    <div id="content" className="flex flex-cols h-screen items-center justify-center bg-sepia ">
                        <div className="flex flex-col h-3/2 w-1/2 items-center justify-center space-y-12 bg-fawn p-4">
                            <AppButton label="Vendor Login"/>
                            <AppButton label="Customer Login "/>
                            <h3 className="text-xl italic ">Don't have an account yet ?</h3>
                            <AppButton label="Register" onClick={handleClick}/>
                        </div>
                    </div>
                </main>
            </ContainerWrapper>
        </main>

    
  )
}

export default Home