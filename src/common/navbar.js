import React from 'react'

const Navbar = ({title, links, clickHandler, activeTab, blockMenu}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    {title}
                </a>
                <div className="navbar-collapse">
                    {blockMenu > 1 &&
                        <ul className="navbar-nav mr-auto">
                            {links.map((link, i) => (
                                <li
                                    key={i}
                                    className={"nav-item" + (activeTab === i ? 'active' : '')}
                                >
                                    <a
                                        className="nav-link"
                                        onClick={() => clickHandler(i)}
                                        href="#"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        </nav>
    )
};

export default Navbar