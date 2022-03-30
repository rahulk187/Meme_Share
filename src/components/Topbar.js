import React from 'react'
import "./Topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import { Person,Chat,Notifications } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">Social</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
        <SearchIcon className='searchIcon'/>
        <input placeholder='search...' className="searchInput" />
        </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLinks">Homepage</span>
                <span className="topbarLinks">TimeLine</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="/assets/profiel.jpg" alt="" className="topbarImg" />
        </div>
    </div> 
  )
}
