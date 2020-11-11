import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';

export default ({ black }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `/search?q=${title}`;
    }
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://1000logos.net/wp-content/uploads/2020/06/Hero-Logo.png" />
                </a>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="search-box">
                    <input type="text" name="" value={title} required className="search-txt" placeholder="Search..." onChange={(e) => setTitle(e.target.value)} />
                    <a className="search-btn" onClick={handleSubmit}>
                        <span><SearchIcon style={{ fontSize: 50 }} /></span>
                    </a>
                </div>
            </form>
            <div className="header--user">
                <img src="/assets/user-logo.png" />
            </div>
        </header>
    )
}
