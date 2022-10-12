import React from 'react';

function Nav() { 

    return (
        <nav className="nav">
        <div className="nav--links">
            <a href="#" className="nav--link">
                <i className="material-icons">check_box</i>
                Inbox
            </a>
            <a href="#" className="nav--link">
                <i className="material-icons">event</i>
                Today
            </a>
            <a href="#" className="nav--link">
                <i className="material-icons">calendar_month</i>
                Upcoming
            </a>
        </div>
        <div className="nav--overlay">

        </div>
        </nav>
    );
}
export default Nav;
