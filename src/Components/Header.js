import React from 'react'
import Wrapper from './Wrapper'
import logoPng from '../Assets/logoPNG.png';

function Header() {
    return (
        <div>
            <Wrapper>
                <div className='flex justify-between items-center'>
                    <div className='w-1/3 md:w-1/2'>
                        <img src={ logoPng } alt="" width=''/>
                    </div>

                    <div className='w-2/3 md:w-1/2 text-right'>
                        <a href="#access" className='px-4 py-3 text-sm border md:px-8 md:py-4 font-bold md:text-lg rounded-full'>Get Priority Access</a>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Header