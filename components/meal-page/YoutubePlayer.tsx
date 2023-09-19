'use client'
import React from 'react'
import YouTube from 'react-youtube'

const YoutubePlayer = ({ videoId }: { videoId: string }) => {
  return (
    <div>
      <YouTube videoId={videoId} />
    </div>
  )
}

export default YoutubePlayer
