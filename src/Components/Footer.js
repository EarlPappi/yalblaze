import React from 'react'
import { HouseIcon, PhoneIcon } from '../Assets/Icons'
import Wrapper from './Wrapper'

function Footer() {
    return (
        <div className='pt-[5em]'>
            <Wrapper>
                <div className='pt-6 flex-col md:flex-row gap-8 border-t-2 flex items-start md:items-center justify-between'>
                    <div className='flex gap-4'>
                        <div>
                            <HouseIcon/>
                        </div>
                        <div>
                            <p>2nd Floor, The Garnet Building, KM14 </p>
                            <p>Lekki Epe Expressway, Lagos, Nigeria.</p>
                        </div>
                    </div>

                    <p className='font-bold '>Loyalbaze is almost here.</p>

                    <div className='flex gap-4'>
                        <div>
                            <PhoneIcon/>
                        </div>

                        <p>+234 903 618 9485</p>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Footer