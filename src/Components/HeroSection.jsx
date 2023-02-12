import React from 'react'
import { MailIcon, ProfileIcon } from '../Assets/Icons'
import Wrapper from './Wrapper'

function HeroSection() {
    return (
        <div className='pb-[20%] pt-[3%]'>
            <Wrapper>
                <div>
                    <div className='w-10/12 md:w-5/6 mx-auto my-4'>
                        <h1 className='text-center font-extrabold text-[1.5em] md:text-[2.5em] lg:text-[4em] lg:w-10/12 lg:mx-auto leading-[120%]'>Turn your best customers into <span className='text-[#A75FD2]'>Loyal fans</span></h1>
                        <p className='text-center text-sm md:text-xl lg:text-2xl font-thin my-6'>Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business. Sign up now to get early access.</p>
                    </div>

                    <div className='md:w-2/3 lg:w-1/3 mx-auto'>
                        <form action="">

                            <div class="relative my-6">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <ProfileIcon />
                                </div>
                                <input type="text" id="email-address-icon" class="bg-transparent border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:focus:border-blue-500 placeholder:text-white" placeholder="Tell us your name" />
                            </div>
                            <div class="relative my-6">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <MailIcon />
                                </div>
                                <input type="text" id="email-address-icon" class="bg-transparent border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:focus:border-blue-500 placeholder:text-white" placeholder="Enter your email address" />
                            </div>

                            <button type="submit" class="text-white bg-gradient-to-r from-[#5403FF] to-[#B43AC9] hover:bg-gradient-to-tr focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-4 text-center mr-2 mb-2 w-full">Get Early Access</button>
                        </form>

                    </div>

                    <div className='flex justify-center items-baseline my-4 gap-4'>
                        <div class="flex items-center mb-5 -space-x-4">
                            <p class="px-4 py-2 bg-[#175CE1] font-bold  rounded-full dark:border-gray-800">G</p>
                            <p class="px-4 py-2 bg-[#A75FD2] font-bold  rounded-full dark:border-gray-800">O</p>
                            <p class="px-4 py-2 bg-[#175CE1] font-bold  rounded-full dark:border-gray-800">U</p>
                            <p class="px-4 py-2 bg-[#A75FD2] font-bold  rounded-full dark:border-gray-800">M</p>

                        </div>
                        <p className='font-bold text-xl'>+57 Joined</p>
                    </div>

                </div>
            </Wrapper>
        </div>
    )
}

export default HeroSection