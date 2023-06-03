import React from 'react'
import ContainerWrapper from './ContainerWrapper'
import AppButton from './AppButton'


const AddInfo = () => {
  return (
      <div className='flex h-screen bg-black px-5'>
        <ContainerWrapper>
            <div className='flex items-center justify-center mt-40'>
                    <form id='Info' 
                            action='submit' 
                            method='POST' 
                            className='@container h-fill w-1/2 flex flex-col items-center justify-center gap-y-4 p-4 rounded-md bg-fawn'> 
                        <div id='title' className='text-center font-bold italic text-xl p-2'>
                            <h2>Register Here</h2>
                        </div>

                        <div className='space-x-2'>
                            <label htmlFor="name">Name:</label>
                            <input className='text-center' type="text" id='name' name='name' placeholder='Enter your name' required/>
                        </div>
                        <div className='space-x-2'>
                            <label htmlFor="email">Email:</label>
                            <input className='text-center' type="email" id='email' name='email' placeholder='Enter your email' required/>
                        </div>
                        <div className='space-x-2 p-2'>
                            <label htmlFor="password">Password:</label>
                            <input className='text-center' type="password" id='password' name='password' placeholder='Enter your password' required/>
                        </div>
                            <AppButton label="SignUp"/>
                    </form>
            </div>
        </ContainerWrapper>
    </div>
  )
}

export default AddInfo