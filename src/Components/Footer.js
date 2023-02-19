import React from 'react'
import { HouseIcon, PhoneIcon } from '../Assets/Icons'
import Wrapper from './Wrapper'

function Footer() {
    return (
        <div className='pt-[5em]'>
            <Wrapper>
                <div className='pt-6 flex-col items-center md:flex-row gap-8 border-t-2 flex items-start md:items-center justify-between'>
                    <div className='flex gap-4'>
                        <div>
                            <HouseIcon/>
                        </div>
                        <div>
                            <p>13  Ashridge Walk,</p>
                            <p>Hatfield, United Kingdom</p>
                        </div>
                    </div>

                    <p className='font-bold '>Loyalbaze is almost here.</p>

                    <div className='flex gap-4'>
                        <div>
                            <PhoneIcon/>
                        </div>

                        <p>+1 333 444 222</p>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Footer
