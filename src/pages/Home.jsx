import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

  const posts = [
    {
      id: 1,
      title: 'Post 1',
      desc: 'This is Post 1',
      img: 'https://www.freebiefindingmom.com/wp-content/uploads/2020/12/Free-Printable-Number-Bubble-Letters-Bubble-Number-1.jpg'
    },

    {
      id: 2,
      title: 'Post 2',
      desc: 'This is Post 2',
      img: 'https://www.freebiefindingmom.com/wp-content/uploads/2020/12/Free-Printable-Number-Bubble-Letters-Bubble-Number-2.jpg'
    },

    {
      id: 3,
      title: 'Post 3',
      desc: 'This is Post 3',
      img: 'https://www.freebiefindingmom.com/wp-content/uploads/2020/12/Free-Printable-Number-Bubble-Letters-Bubble-Number-3.jpg'
    },

    {
      id: 4,
      title: 'Post 4',
      desc: 'This is Post 4',
      img: 'https://www.freebiefindingmom.com/wp-content/uploads/2020/12/Free-Printable-Number-Bubble-Letters-Bubble-Number-4.jpg'
    },

    {
      id: 5,
      title: 'Post 5',
      desc: 'This is Post 5',
      img: 'https://www.freebiefindingmom.com/wp-content/uploads/2020/12/Free-Printable-Number-Bubble-Letters-Bubble-Number-5.jpg'
    },

    {
      id: 6,
      title: 'Post 6',
      desc: 'This is Post 6',
      img: 'https://www.freebiefindingmom.com/wp-content/uploads/2020/12/Free-Printable-Number-Bubble-Letters-Bubble-Number-6.jpg'
    }
  ]

  return (
    <div className = 'home'>
      <div className = 'posts'>
        {posts.map((post) => (
          <div className = 'post' key = {post.id}>
            <div className = 'img'>
              <img src = {post.img} alt = '' />
            </div>
            <div className = 'content'>
              <Link className = 'link' to = {`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home