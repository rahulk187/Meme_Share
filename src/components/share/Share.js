import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import React from 'react'
import './share.css'
import { useState } from 'react'
import axios from 'axios'


export default function Share() {
    const[share,setShare]=useState('')
    async function handleShareButton(){
        const res = await axios.post('http://localhost:3000/createPostWithoutImage',val)
        console.log(res)
    }

    const val={quote:share}
    function handleInputChange(e){
        setShare(e.target.value)
    }
  return (
   <div className="share">
       <div className="shareWrapper">
           <div className="shareBottom">
               <img src="/assets/profiel.jpg" alt="" className="shareProfileImg" />
               <input placeholder="what's in your mind ?" onChange={e=>handleInputChange(e)} className="shareInput" />
           </div>
           <hr className="shareHr" />
           <div className="shareBottom">
               <div className="shareOptions">
                   <div className="shareOption">
                       <PermMedia htmlColor='tomato' className='shareIcon'/>
                       <span className='shareOptionText'>Photo or Video</span>
                   </div>
                   <div className="shareOption">
                       <Label htmlColor='tomato' className='shareIcon'/>
                       <span className='shareOptionText'>Tag</span>
                   </div>
                   <div className="shareOption">
                       <Room htmlColor='tomato' className='shareIcon'/>
                       <span className='shareOptionText'>Location</span>
                   </div>
                   <div className="shareOption">
                       <EmojiEmotions htmlColor='tomato' className='shareIcon'/>
                       <span className='shareOptionText'>Feelings</span>
                   </div>
               </div>
               <button className="shareButton" onClick={handleShareButton}>Share</button>
           </div>
       </div>
   </div>
  )
}
