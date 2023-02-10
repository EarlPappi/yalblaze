import React from 'react'

function Wrapper({children}) {
  return (
    <div className='w-11/12 mx-auto md:lg:w-10/12'>
        {children}
    </div>
  )
}

export default Wrapper