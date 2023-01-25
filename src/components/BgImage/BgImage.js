import React from 'react'
import "./BgImage.scss"

function BgImage({img,title}) {
  return (
    <div className='wrapper'>
          <img src={img}/>
          <label className='title'><span>{title}</span></label>
    </div>
  )
}

export default BgImage