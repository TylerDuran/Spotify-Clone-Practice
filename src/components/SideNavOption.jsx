import React from 'react'
import "../css/SideNavOption.css"

const SideNavOption = ({ selection, Icon }) => {
    return (
        <div className='SideNavOption'>
            <p><Icon className="SideNavOptionIcon" /></p>
            <p>{selection}</p>
        </div>
    )
}

export default SideNavOption