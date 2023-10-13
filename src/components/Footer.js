import React from 'react'
import icon from "./cloud.png"
const Footer = () => {
    return (
        <div>
            <div className="myInfo">
                
                <p className="text-center h6 p-2"><img src={icon} className="img" alt="weather Icon" /> © 2021 | Developed by<a className="h6 text-primary ps-1" target="_blank">Divyanshu Kumar</a></p>
            </div>

        </div>
    )
}

export default Footer
