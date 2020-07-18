import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'

function Header() {

    const [{basket}] = useStateValue()

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" 
                alt=""/>
             </Link> 
            
             <div className="header__search">
                <input type ="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
             </div>

             <div className="headerNav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Keshav</span>
                        <span className="header__optionLineTwo" >Signin</span>
                    </div>
                </Link>
             </div>

             <div className="headerNav">
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns &</span>
                        <span className="header__optionLineTwo">Orders</span>
                    </div>
                </Link>
             </div>

             <div className="headerNav">
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
             </div>

             <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
             </Link>
            
         </nav>
    )
}

export default Header
