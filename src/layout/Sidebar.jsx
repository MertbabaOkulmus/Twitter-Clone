import React,{useState} from 'react';
import TwitterLogo from "../images/Twitter.svg";
import { 
    HomeIcon, 
    ExploreIcon, 
    NotificationsIcon, 
    MessagesIcon, 
    BookmarksIcon, 
    ListsIcon, 
    ProfileIcon, 
    MoreIcon, 
    PopulerIcon, 
    ImageIcon, 
    GIFIcon, 
    PollIcon, 
    EmojiIcon, 
    ScheduleIcon, 
    ReplyIcon, 
    ReTweetIcon, 
    LikeIcon, 
    ShareIcon, 
    SearchIcon 
} from '../icons/Icon';
import SideLink from '../components/SideLink';
import UserBox from '../components/UserBox';

const sideLinks=[
    {
        name:'Home',
        icon:HomeIcon
    },
    {
        name:'Explore',
        icon:ExploreIcon
    },
    {
        name:'Notifications',
        icon:NotificationsIcon
    },
    {
        name:'Message',
        icon:MessagesIcon
    },
    {
        name:'Bookmarks',
        icon:BookmarksIcon
    },
    {
        name:'Lists',
        icon:ListsIcon
    },
    {
        name:'Profile',
        icon:ProfileIcon
    },
    {
        name:'More',
        icon:MoreIcon
    }
];

const Sidebar = () => {
    const [active,setActive]=useState("Home");

    const  handleMenuItemClick=(name)=>{
        setActive(name);//seçili olan companentin name ini active ye kaydediyoruz
    }
    return (
        <div className="flex flex-col justify-between w-72  px-2">
            <div>
                <div className="mt-1 mb-2 ml-1 hover:bg-gray-lightest w-12 h-12 rounded-full flex items-center justify-center">
                <img src={TwitterLogo} alt="Twitter Logo" className="w-9 h-9"/>
                </div>
                <nav className="mb-2">
                    <ul>
                        {sideLinks.map(({name,icon})=>(
                            <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick}/>//icon aslında bir function companent olduğu için companentleri props olarak geçerken büyük harfle isimlendirilir
                        ))}
                    </ul>
                </nav>
                <button className="bg-primary-base hover:bg-primary-dark transform transition-colors duration-200 text-white rounded-full py-3 px-8 w-11/12 shadow-lg">
                    Tweet
                </button>
            </div>

            <UserBox/>

        </div>
    )
}

export default Sidebar
