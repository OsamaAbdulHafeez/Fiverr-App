import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
    const {pathname} = useLocation()
    console.log(pathname)
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', isActive)

        return () => {
            window.removeEventListener('scroll', isActive)
        }
    }, [])

    const currentUser = {
        id: 1,
        username: 'John Doe',
        isSeller: true
    }
    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to='/' className='link'>
                        <span className='text'>fiverr</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Fiver Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    {!currentUser && <span>Sign in</span>}
                    {!currentUser?.isSeller && <span>Become a seller</span>}
                    {!currentUser && <button>Join Now</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
                            <span>UserName</span>
                            {open && <div className="options">
                                {currentUser?.isSeller && (
                                    <>
                                        <Link className='link' to='/myGigs'>Gigs</Link>
                                        <Link className='link' to='/add'>Add new Gig</Link>
                                    </>
                                )}
                                <Link className='link' to='/orders'>Order</Link>
                                <Link className='link' to='/messages'>Messages</Link>
                                <Link className='link' to='/'>Logout</Link>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
            {(active || pathname !== "/") && <>
                <hr />
                <div className='menu'>
                    <Link to="/" className='link menuLink'>
                        Graphics & Design
                    </Link>
                    <Link to="/" className='link'>
                        Writing & Translation
                    </Link>
                    <Link to="/" className='link'>
                        Graphics & Design
                    </Link>
                    <Link to="/" className='link'>
                        All Services
                    </Link>
                    <Link to="/" className='link'>
                        Digital Marketing
                    </Link>
                    <Link to="/" className='link'>
                        Music & Audio
                    </Link>
                    <Link to="/" className='link'>
                        Programming & Tech
                    </Link>
                    <Link to="/" className='link'>
                       Business
                    </Link>
                    <Link to="/" className='link'>
                       Lifestyle
                    </Link>
                </div>
                <hr />
            </>}
        </div>
    )
}

export default Navbar