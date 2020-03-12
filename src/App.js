import React, { useState, useEffect } from 'react';
//import Post from './Post';
import PostList from './PostList';
import './App.css';



function App() {
  const [inputValue, setValue] = useState('reactjs');
  const [subreddit, setSubreddit] = useState(inputValue);

  const handleSubmit = e => {
    e.preventDefault();
    setSubreddit(inputValue);
  };

  return (
    <>
        <form onSubmit={handleSubmit}>
          <h1>Enter a subreddit:</h1>
          <div />
          <input 
          value ={inputValue}
          onChange ={e=> setValue(e.target.value)}
          />
        </form>
        <Reddit subreddit={subreddit} />
    </>
  );
}

function Reddit({ subreddit }){
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(()=>{
    fetch(
      `https://www.reddit.com/r/${subreddit}.json`
    )
      .then(res=> res.json())
      .then(json =>
          setPosts(json.data.children.map(c=> c.data))
          ,(error)=>{
            setError(true);
            setPosts(null);
          })
  },[subreddit, setPosts])

  return(
      <>
        {error ? ('error bad subreddit') : ('')}
        <PostList posts={posts} />
      </>
  );
}

/*
const foo = [
  {
    
    id: 1,
    title: 'test post',
    userName: 'test_user',
    comments: 10,
    upvotes: 22,
    
  },
  {
    
    id: 2,
    title: 'test post2',
    userName: 'test_user2',
    comments: 10,
    upvotes: 12,
    
  },
  {
    id: 3,
    title: 'coronavirus kills 10% of world population',
    userName: 'panicMan',
    comments: 0,
    upvotes: 10,
  }

];

*/

export default App;
