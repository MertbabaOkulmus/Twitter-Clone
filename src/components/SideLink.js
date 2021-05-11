import React from 'react'
import { act } from 'react-dom/test-utils'

const SideLink = ({ name, Icon, active, onMenuItemClick }) => {
    const isActive= active==name // Sidebar dan props olarak gelen active ve name birbirine eşit ise true değil ise false atama işlemi yapar , active den gelen seçili name dir , seçili olan name in tespiti için kullandık true false i
    return (
        <li className="group cursor-pointer" onClick={()=>onMenuItemClick(name)}>
            <a href={name.toLowerCase()} className="block text-xl pointer-events-none">{/*a tağına her tıklama da refresh yapmaması için pointer-events-none kullanılır*/}
                <div className="inline-block">
                    <div className={`flex items-center  ml-4 pl-3 pr-8 py-3 group-hover:bg-primary-light group-hover:text-primary-base rounded-full transform transition-colors duration-200
                    ${isActive ? "text-primary-base":"" }
                    `}>
                        <Icon />
                        <span className="ml-4 font-bold"> {name} </span>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default SideLink
