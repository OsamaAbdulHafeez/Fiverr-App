import React, { useState } from 'react'
import './gigs.scss'
import GigCard from '../../components/gigCard/GigCard'
import { gigs } from '../../data'
import down from '../../assets/img/down.png'
const Gigs = () => {
  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState("sales")

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }
  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumbs">Liverr &gt; Graphics & Design &gt;</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder='min' />
            <input type="text" placeholder='max' />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className='sortBy'>SortBy</span>
            <span className='sortType'>{sort === "sales" ? 'Best Selling' : 'Newest'}</span>
            <img src={down} alt="" onClick={() => setOpen(!open)} />
            {open &&
              <div className="rightMenu">
                {sort === "sales" ? <span onClick={() => reSort("createdAt")}>Newest</span> :
                  <span onClick={() => reSort("sales")}>Best Selling</span>}
              </div>
            }
          </div>
        </div>
        <div className="cards">
          {gigs.map(item => (
            <GigCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs
