import React from 'react'
import coverImages from '../assets/images/react.jpg'

const LearnLoadingImages = () => {
  return (
    <>
        <h1>Load Images</h1>
        <img src={coverImages} alt="Cover Image" width={500}></img>
    </>
  )
}

export default LearnLoadingImages