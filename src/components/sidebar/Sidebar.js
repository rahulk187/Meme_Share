import { Bookmark, Chat, Event, Group, Pause, PlayCircle, PlayDisabled, QuestionAnswer, QuestionMarkRounded, RssFeed, School, VideoSettings, WorkOutline } from '@mui/icons-material'
import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className='sideBarIcon'/>
                    <span className="sidebarListItemText">
                    Feed
                    </span>
                </li>
                <li className="sidebarListItem">
                    <Chat className='sideBarIcon'/>
                    <span className="sidebarListItemText">
                    chat
                    </span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircle className='sideBarIcon'/>
                    <span className="sidebarListItemText">
                    video
                    </span>
                </li>
                <li className="sidebarListItem">
                    <Group className='sideBarIcon'/>
                    <span className="sidebarListItemText">
                    Group
                    </span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className='sideBarIcon'/>
                    <span className="sidebarListItemText">
                    Bookmarks
                    </span>
                </li>
                <li className="sidebarListItem">
                    <Event className='sideBarIcon'/>
                    <span className="sidebarListItemText">
                    Events
                    </span>
                </li>
                <li className="sidebarListItem">
                    <QuestionMarkRounded className='sideBarIcon'/>
                    <span className="sidebarListItemText">
                    Questions
                    </span>
                </li>
                <li className="sidebarListItem">
                    <WorkOutline className='sideBarIcon'/>
                    <span className="sidebarListItemText">
                    jobs
                    </span>
                </li>
                <li className="sidebarListItem">
                    <School className='sideBarIcon'/>
                    <span className="sidebarListItemText">
                    Courses
                    </span>
                </li>
            </ul>
            <button className='sidebarButton'>Show more</button>
            <hr className='sidebarHr'/>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src="/assets/profile2.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Shiwam bhargava</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/profile2.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Shiwam bhargava</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/profile2.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Shiwam bhargava</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/profile2.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Shiwam bhargava</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/profile2.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Shiwam bhargava</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
