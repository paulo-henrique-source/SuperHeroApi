import React, { Fragment, useState, } from 'react'

function Home() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search?q=${title}`;
  }
    return (
      <Fragment>
        <form onSubmit={handleSubmit}>
          <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}></input>
          <button>Search</button>
        </form>
      </Fragment>
    )

}


export default Home;