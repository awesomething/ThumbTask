//import Home from './Home';
import { Button } from "@material-ui/core";
import React from 'react'
//import Home from './Home'
import './Header.css'
import { Link, useHistory } from 'react-router-dom';
//import SearchPage from './SearchPage';
//import FacebookIcon from '@material-ui/icons/Facebook'; <FacebookIcon/>
//import LinkedInIcon from '@material-ui/icons/LinkedIn'; <LinkedInIcon/>
//import React, { useState } from 'react'




function Header() {
    const history = useHistory();
//const [showSearch, setShowSearch] = useState(false);
    return (
        <div className='header'>
            
            <Link to='/'>
                <center><h2>ThumbTask</h2></center>
                <img
                    className="header__icon"
                    src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_bb487be551c0717712203a6d6cd29e01/thumbtack.png"
                    alt=""
                />
            </Link>
       
<div className="header_info" >
            <h5>We make writing goals look cool</h5>
              
            
<Button onClick={() => history.push('/searchPage')} variant='outlined'>Organize Your Tasks</Button>
    </div>
        </div>
    )

    
  }

export default Header
  