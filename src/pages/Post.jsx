import React from 'react'
import {Link} from 'react-router-dom';
import Edit from '../images/edit.png';
import Delete from '../images/delete.jpg';

const Post = () => {
  return (
    <div className = 'post'>
      <div className = 'content'>
        <img src = 'https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg' alt = '' />
        <div className = 'user'>
          <img src = 'https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg' alt = '' />
          <div className = 'info'>
            <span><i>UserName</i></span>
            <p>Posted <i>X</i> days ago</p>
          </div>
          <div className = 'edit'>
            <Link to = {`/new?edit = 2`}>
              <img src = {Edit} alt = 'edit' />
            </Link>
            <img src = {Delete} alt = 'delete' />
          </div>
        </div>
      </div>
      <div className = 'menu'>M</div>
    </div>
  )
}

export default Post