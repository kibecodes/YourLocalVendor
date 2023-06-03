import React from 'react'

interface AppButtonProps {
    label: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const AppButton = ({ label, onClick }: AppButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(onClick) {
      onClick(e)
    }
    console.log('button clicked')

  }

  return (
        <button 
          type='submit'
          className='h-20 w-32 bg-jungle-green rounded-md shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' 
          onClick={handleClick}>{label}
        </button>
  )
}

export default AppButton