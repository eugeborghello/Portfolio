import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);


    return (
        <>
           <nav className='navbar'> 
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        María Eugenia Borghello
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                </div>
            </nav>
        </>
    )
}

export default NavBar
