
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
                    <main className='overflow-hidden p-2 mb-10'>
                        //**Navbar */
                        <section id='hero' className='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-6 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height'>
                                <article className='sm:w-1/2'>
                                    <h2 className='max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'>Shop Local Support Community</h2>
                                        <p className='max-w-md text-2xl mt-4 text-center sm:text-3xl sm:text-left text-slate-700 dark:text-slate-400'>Fostering a Cohesive Community by Championing Local Businesses and Supporting Small Vendors to Thrive Together.</p>
                                        <p className='max-w-md text-2xl mt-4 text-center sm:text-3xl sm:text-left text-slate-700 dark:text-slate-400'>Growing together.</p>
                                </article>
                                <div id='call' className='bg-call-image rounded-md bg-cover bg-center h-64 flex flex-col items-center justify-evenly pt-4 w-1/3 child place-self-stretch'>
                                    <button type='button' className='pt-4 px-6 rounded-lg text-white text-center p-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                                        Vendor Login
                                    </button>
                                    <button type='button' className='pt-4 px-6 rounded-lg bg-purple-700 hover:bg-purple-500 text-white text-center p-4'>
                                        Customer Login
                                    </button>
                                    <h3 className='font-bold dark:text-slate-400'>Don't have an account yet?</h3>
                                    <button className='pt-4 px-6 rounded-lg bg-black text-white dark:text-white hover:bg-slate-500 text-center p-4'>Register</button>
                                </div>
                        </section>

                        //**Features*/
                        <section id='features' className='flex flex-col justify-center sm:flex-row p-6 items-center gap-8 mb-6 scroll-mt-40 w-full'>
                            <main id='slideshow' className='w-full hover:overflow-x-scroll grid grid-flow-col justify-start gap-8 py-4 px-4'>
                                
                                    <div className='w-40 h-56 flex flex-col bg-pay-image bg-cover text-center rounded-md'>
                                        Payment
                                    </div>
                                    <div className='w-40 h-56 flex flex-col bg-phone-image bg-cover text-center rounded-md'>
                                        Call/ Message
                                    </div>
                                    <div className='w-40 h-56 flex flex-col bg-basket-image bg-cover text-center rounded-md'>
                                        Available goods
                                    </div>
                                    <div className='w-40 h-56 flex flex-col bg-amber-400 text-center rounded-md'>
                                        Notification
                                    </div>
                                    <div className='w-40 h-56 flex flex-col bg-amber-500 text-center rounded-md'>
                                        Add Testimony
                                    </div>
                                    <div className='w-40 h-56 flex flex-col bg-tip-image bg-cover text-center rounded-md'>
                                        Tip
                                    </div>
                                    <div className='w-40 h-56 flex flex-col bg-rate-image bg-cover text-center rounded-md'>
                                        Rate/ Review
                                    </div>
                                    <div className='w-40 h-56 flex flex-col bg-amber-700 text-center rounded-md'>
                                        Feedback
                                    </div>
                                
                            </main>
                        </section>
                        
                        //**Testimonials  */
                        <section id='test' className='flex flex-row space-x-2 p-6 overflow-x-auto h-80 w-full'>
                                <figure id='v-scroll' className='flex flex-col justify-center h-full w-1/2 p-2 bg-white italic rounded-md'>
                                    <blockquote className='rounded space-y-2 overflow-y-auto h-full'>
                                        <p className=''>
                                            Awesome app! Highly recommended for all the Mama Mbogas out there.
                                        </p>
                                    
                                        <p className=''>
                                            Its amazing no one thought of this earlier. I now don't have to worry about looking for other places to get my veggies.
                                        </p>
                                    
                                        <p className=''>
                                            Its just genius. I can now get anything I want.
                                        </p>
                                    
                                        <p className=''>
                                            Trusting your vendor to get you the right quality of goods has never been easier. Thank you!
                                        </p>
                                        <p className=''>
                                            This app has transformed the way I work and stay organized. It's a game-changer that saves me time, boosts my productivity, and simplifies my life
                                        </p>
                                        <p className=''>
                                            I can't express how much I love this app. It's incredibly user-friendly, intuitive, and has become an essential tool in my daily routine
                                        </p>
                                        <p className=''>
                                            I've tried many apps, but this one stands out from the rest. It's powerful, versatile, and seamlessly integrates into my workflow
                                        </p>
                                    </blockquote>
                                     
                                </figure>
                                <figure id='sponsors' className='flex flex-col h-full w-1/2 items-center p-4 rounded-md bg-fawn italic' >
                                    <article>
                                        <h2>Imani Trust Group(logo)</h2>
                                    </article>
                                    <article className='text-center text-xl font-bold sm:text-2xl'>
                                        An innovative tool that was lacking for a long time.
                                    </article>
                                </figure>    
                        </section>



                        //**Footer section */
                        <section id='footers' className='flex flex-row w-full h-80 rounded space-x-2 p-6 items-center justify-center '>
                            <figure className='flex h-full w-full justify-center rounded space-x-2'>
                                <div id='footer' className='h-full w-1/2 bg-sky-200 text-center rounded'>
                                    <h1 className='text-xl font-semibold italic'>About</h1>
                                </div>
                                <div id='footer-2' className='h-full w-1/2 bg-sky-500 text-center rounded'>
                                    <h1 className='text-xl font-semibold italic'>Contact Info</h1>
                                </div>
                            </figure>
                        </section>
                    </main>
                </Content>
            </main>
        </Wrapper>
    </>
)
}

export default LandingPage