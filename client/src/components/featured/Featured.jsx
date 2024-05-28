import React from 'react'
import './featured.scss'
import man from '../../assets/img/man.png'
import search from '../../assets/img/search.png'
const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the perfect <i>freelance</i> services for your business</h1>
                <div className="search">
                    <div className="searchInputs">
                        <img src={search} alt="" />
                        <input type="text" placeholder='Try "Building Mobile App"'/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Designs</button>
                    <button>Workpress</button>
                    <button>Logo Designs</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">
                <img src={man} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured
