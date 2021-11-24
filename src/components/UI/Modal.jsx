import React from 'react'
import reactDom from 'react-dom'


const BoxModal = ({children}) => {
    return (
        <div className="fixed bg-white shadow-lg top-1/2 left-1/2 z-50 transform -translate-y-1/2 -translate-x-1/2 w-11/12 h-60 sm:w-3/4 sm:h-3/5 lg:h-3/5 xl:h-3/4">
            {children}
        </div>
    )
}

const Overlay = ({handleClose}) => {
    return (
        <div className="fixed w-full h-full top-0 bottom-0 left-0 right-0 z-30 bg-overlay" onClick={handleClose}>
        </div>
    )
}

const Modal = ({children, handleClose}) => {
    return (
        <>
            {reactDom.createPortal(<BoxModal children={children}/>, document.getElementById('modal'))}
            {reactDom.createPortal(<Overlay handleClose={handleClose}/>, document.getElementById('overlay'))}
        </>
    )
}

export default Modal
