import React from 'react'
import Avatar from "../images/Avatar.png"
const UserBox = () => {
    return (// 5. video dk 11:47
        <div className="flex justify-between items-center mb-4 hover:bg-primary-light cursor-pointer rounded-full p-3 mt-1">
            <img src={Avatar} alt="Profile" className="w-11 h-11 rounded-full" />
            <div>
                <span>Mertbaba Okul...</span>
                <span>@mert_okulmus</span>
            </div>
            <div>
                <div />
            </div>
        </div>
    )
}

export default UserBox
