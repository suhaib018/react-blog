import React from 'react'
import Blog from './Blog'
import "./styless.css"

export const BlogList = ({blogs}) => {
  return (
    <div className="blogList-wrap">
     {blogs.map(blog => <Blog key={blog.id} {...blog}/>)}    
    </div>
  )
}
