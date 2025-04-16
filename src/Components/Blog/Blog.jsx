import React from 'react';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog,handleBookMark,handleMarkAsRead}) => {
    
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='author flex justify-between items-center'>
        <h3 className='text-xl font-bold'>{blog.author}</h3>
        <img className='w-16 h-16 rounded-full border-4 border-white' src={blog.author_img} alt="" />
        <button onClick={()=>handleBookMark(blog)}><FaBookmark size={35}/></button>
    </div>
    
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className='flex'>
    {
        blog.hashtags.map(has=><p>{has}</p>)
    }
    </div>
    <div className="card-actions justify-end">
      <button onClick={()=>handleMarkAsRead(blog.reading_time, blog.id)} className="btn btn-primary">Mars as Read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;