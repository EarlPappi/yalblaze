import React from 'react'
import Wrapper from './Wrapper'
import { LogoIcon } from '../Assets/Icons'

function Header() {
    return (
        <div>
            <Wrapper>
                <div className='flex justify-between items-center'>
                    <div>
                        <LogoIcon />
                    </div>

                    <a href="#access" className='border px-8 py-4 font-bold text-lg rounded-full'>Get Priority Access</a>
                </div>
            </Wrapper>
        </div>
    )
}

export default Header