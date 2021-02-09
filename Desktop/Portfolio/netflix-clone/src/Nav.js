import React, {useState, useEffect} from 'react'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => { 
        window.addEventListener("scroll", () => {
       if (window.scrollY > 100) {
           handleShow(true);
       } else handleShow(false);
    });
        return () => {
         window.removeEventListener("scroll");
    };
    }, []);

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img
            className="nav_logo"
            src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt="Netflix Logo"           
           />

           <img
           className="nav_avatar"
           src="https://img.pngio.com/avatar-black-man-beard-black-man-job-icon-png-and-vector-for-black-man-png-free-512_512.png"
           alt="Netflix Logo"
           />
        </div>
    )
}

export default Nav
