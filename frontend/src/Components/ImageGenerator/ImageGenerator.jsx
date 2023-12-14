import React from 'react'
import './ImageGenerator.css'
import HomeImage from '../Assets/home.jpg'

const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
      <div className="header">
      AI <span>World</span>
      <div className="img-loading">
        <div className="image">
        <img src={HomeImage} alt="" />
        </div>
      </div>
      <div className="search-box">
        <input type="text" className='search-input' placeholder='Describe What you want to see...'/>
        <div className="generate-btn">Generate</div>
      </div>
      </div>
    </div>
  )
}

export default ImageGenerator
