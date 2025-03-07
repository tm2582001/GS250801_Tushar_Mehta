import GsynergyLogo from '../../assets/Gsynergy Logo V2 Long Description.svg?react'


import "./nav-bar.styles.css";

const NavBar = ()=>{
    return (
        <nav className='nav-bar-container'>
            <GsynergyLogo className='company-logo'/>
            <h1 className='application-name'>Data Viewer App</h1>
        </nav>
    )
}

export default NavBar;