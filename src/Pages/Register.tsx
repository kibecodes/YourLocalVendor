import ContainerWrapper from '../components/ContainerWrapper'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddInfo from '../components/AddInfo'

const Register = () => {
  return (
    <>
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

                        <div id='signUp' className='bg-fawn max-w-screen-lg mx-auto'>
                        <AddInfo/>
                        </div>
                </ContainerWrapper>
            </main>
    </>
  )
}

export default Register