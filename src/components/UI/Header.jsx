import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [isScrolled, setIsScrolled] = useState('bg-header-sticky')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 60) {
                setIsScrolled('bg-header')
            } else {
                setIsScrolled('bg-header-sticky')
            }
        })
    }, [isScrolled])

    return (
        <div className={`px-10 py-4 fixed ${isScrolled} top-0 left-0 right-0 z-10 shadow-lg`}>
            <div className="container text-white text-center">
                <Link to="/" className="text-xl">Game Center</Link>
            </div>
        </div>
    )
}

export default Header
