import React from 'react'
import PropTypes from 'prop-types'



export default function NavBar({name, onChangeInput, onButtonClick}) {
    return(
        <div>
            <input className= "search-bar" value={name} onChange={e => onChangeInput(e)}/>
            <div className= "search-button" onClick={() => onButtonClick()}>Search</div>
        </div>
        )
}

NavBar.propTyes = {
    name: PropTypes.string.isRequired,
    onChangeInput: PropTypes.func.isRequired,
    onButtonClick: PropTypes.func.isRequired
}