import React from 'react'

function Modal({ showModal, setShowModal }) {
    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <div>
            <div className='w-full h-full bg-blue-300 absolute inset-0 overflow-hidden' onClick={closeModal} >

            </div>
        </div>
    )
}

export default Modal