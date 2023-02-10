import React from 'react'
import { BlueLineIcon } from '../Assets/Icons'
import Wrapper from './Wrapper'

function AccessSection() {
    return (
        <div className='my-8' id='access'>
            <Wrapper>
                <div className='flex justify-center flex-col lg:flex-row gap-8 lg:justify-between items-center'>
                    <div className='lg:w-1/2 '>
                        <div className='flex item-center items-center lg:items-start flex-col justify-center '>
                            <h2 className='text-center lg:text-left  inline-block font-bold text-5xl'>Priority Access</h2>
                            <div className='text-center'><BlueLineIcon /></div>
                        </div>

                        <p className='text-lg mx-auto lg:m-0 text-center lg:text-left font-bold w-10/12 '>Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze. Skip the waitlist and get exclusive priority access to LoyalBaze. Limited slots available. Please tell us a bit about your business and needs and of our consultants will be in touch Immediately!</p>
                    </div>

                    <div className='w-full lg:w-1/2 bg-[#1D2939] px-[2em]  md:px-[4em] py-[2em] rounded-lg'>
                        <h2 className='font-bold text-lg'>Book a Consultation with us</h2>
                        <form action="">
                            <div class="mb-6">
                                {/* Name Input */}
                                <input type="text" id="email" class="bg-[#1D2939] border border-[#DDDDDD80] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-6 placeholder:text-white" placeholder="Enter Your full name" required />

                                {/* Email Input */}
                                <input type="email" id="email" class="bg-[#1D2939] border border-[#DDDDDD80] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-6 placeholder:text-white" placeholder="Enter Your work email" required />

                                {/* mobile Input */}
                                <input type="tel" id="email" class="bg-[#1D2939] border border-[#DDDDDD80] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-6 placeholder:text-white" placeholder="Mobile Nunber" required />

                                {/* Company Input */}
                                <input type="text" id="email" class="bg-[#1D2939] border border-[#DDDDDD80] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-6 placeholder:text-white" placeholder="Company Name" required />

                                {/* MEssage Input */}
                                <textarea name="" id="" cols="30" rows="10" class="bg-[#1D2939] border border-[#DDDDDD80] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none placeholder:text-white my-6" placeholder="Drop a message..."></textarea>

                                <button type="submit" class="text-white bg-gradient-to-r from-[#5403FF] to-[#B43AC9] hover:bg-gradient-to-tr focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-4 text-center mr-2 mb-2 w-full">Send Request</button>

                            </div>

                        </form>

                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default AccessSection