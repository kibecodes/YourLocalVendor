
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'

const LandingPage = () => {

    const Wrapper = styled.main`
    height: 100%;
    width: 100%;
    padding: 0;
    flex-direction: column;
    `
    const Navbar = styled.nav`
    height: 20%;
    outline: none;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: darkcyan;
    position: sticky;
    top: 0;
    z-index: 1;
    #Nav {
        font-size: large;
        font-weight: 600;
        padding: 16px;
        cursor: pointer;
        :hover,
        :focus{
            color: white;
        }
    }
    `
    const Content = styled.div`
        flex-grow: 1;
        overflow-y: auto;  
    ` 
    
    
  return (
    <>
        <Wrapper>
            <main id='main' className='h-screen w-screen bg-black scroll-auto overflow-auto pr-0'>
                <Navbar id='nav'>
                    <section className='px-3'>
                        <div>
                        <FontAwesomeIcon icon={faShop} size='xl'/>
                        </div>
                            <div id='title' className='p-4 mr-40'>
                                <h1 className='font-bold text-2xl'>
                                        Your Friendly Neighborhood Vendor
                                </h1>      
                            </div>
                    </section>
                    <section className='mx-auto flex max-w-4xl justify-start p-16'>
                        <div id='header' className='p-0 flex'>
                            <div className='flex flex-col justify-start'>
                            </div>
                            <div id='Nav'>
                                Services
                            </div>
                            <div id='Nav'>About</div>
                            <div id='Nav'>Contact Us</div>
                        </div>
                    </section>
                </Navbar>

                <Content id='div'>
                    <main className='overflow-auto @container'>
                        //**Header section */
                        <section id='hero' className='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height'>
                                <article className='sm:w-1/2'>
                                    <h2 className='max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'>Shop Local Support Community</h2>
                                        <p className='max-w-md text-2xl mt-4 text-center sm:text-3xl sm:text-left text-slate-700 dark:text-slate-400'>Fostering a Cohesive Community by Championing Local Businesses and Supporting Small Vendors to Thrive Together.</p>
                                        <p className='max-w-md text-2xl mt-4 text-center sm:text-3xl sm:text-left text-slate-700 dark:text-slate-400'>Growing together.</p>
                                </article>
                                <div id='call' className='bg-call-image rounded-md bg-cover bg-center h-64 flex flex-col items-center justify-evenly pt-4 w-1/3 child place-self-stretch'>
                                    <button type='button' className='pt-4 px-6 rounded-lg bg-sky-700 hover:bg-sky-500 text-white text-center p-4'>
                                        Vendor Login
                                    </button>
                                    <button type='button' className='pt-4 px-6 rounded-lg bg-purple-700 hover:bg-purple-500 text-white text-center p-4'>
                                        Customer Login
                                    </button>
                                    <h3 className='font-bold dark:text-slate-400'>Don't have an account yet?</h3>
                                    <button className='pt-4 px-6 rounded-lg bg-black text-white dark:text-white hover:bg-slate-500 text-center p-4'>Register</button>
                                </div>
                        </section>

                        //**Feature section image issue */
                        <section id='hero' className='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height'>
                            <div id='bg-happy-image bg-cover bg-center h-64 flex flex-col items-center justify-evenly pt-4 w-1/3 child place-self-stretch'>
                                Slides

                            </div>
                        </section>
                        

                        {/* <section id='features' className='flex flex-col-reverse justify-center sm:flex-row p-6 items-center scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height bg-red-400'>
                                <div id='feature' className=''>Slideshow</div>
                                <div id='testimonials'></div>
                                <div id='feature-2'></div>
                        </section> */}



                        //**Footer section */
                        <section id='footers' className='p-2 m'>
                                <div id='footer' className=''>

                                </div>
                                <div id='footer-2'></div>
                        </section>
                    </main>
                </Content>
            </main>
        </Wrapper>
    </>
)
}

export default LandingPage