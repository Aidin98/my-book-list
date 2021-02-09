import React from "react"
import './Header.css'
function Header(){
    return(
        <div className='heder'>
            <div className='logo-icon'><i class='fas fa-book'></i></div>
            <h1 className='title'>My Book List</h1>
        </div>
    )
}

export default Header