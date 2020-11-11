import React, { Fragment, useState, } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';

function Home() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search?q=${title}`;
  }
  return (
    <Fragment>
      <form className="search" onSubmit={handleSubmit} style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://source.unsplash.com/collection/1773397)`
      }}>
        <h1 className="home-title">Search Your Super Hero Name</h1>
        <div className="search-box">
          <input type="text" name="" value={title} required className="search-txt" placeholder="Search..." onChange={(e) => setTitle(e.target.value)} />
          <a className="search-btn" onClick={handleSubmit}>
            <span><SearchIcon style={{ fontSize: 50 }} /></span>
          </a>
        </div>
      </form>
    </Fragment>
  )

}


export default Home;