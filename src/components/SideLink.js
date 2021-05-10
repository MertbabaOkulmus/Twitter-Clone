import React from 'react'

const SideLink = ({ name, Icon }) => {
    return (
        <li>
            <a href="#">
                <div className="flex items-center mb-6 hover:bg-primary-light hover:text-primary-base rounded-full transform transition-colors duration-200">
                    <span className="ml-4"> <Icon /> </span>
                    <span className="ml-4 font-bold"> {name} </span>
                </div>
            </a>
        </li>
    )
}

export default SideLink
