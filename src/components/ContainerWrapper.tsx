import React, { ReactNode } from 'react'

interface ContainerWrapperProps {
    children: ReactNode
}

const ContainerWrapper: React.FC<ContainerWrapperProps> = ({ children }) => {
  return (
    <div className='container'> 
        {children}
    </div>
  )
}

export default ContainerWrapper