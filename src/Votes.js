import React from 'react';
//import { icon } from 'react-materialize';

function Votes ({ post, handleUpvote, handleDownvote, upvotes }){
    //<div className='Upvotes'>{post.score + upvotes}</div>

    return(
        <>
            <span className='Votes'>
                <button className='Vote-button' onClick={handleUpvote}>
                    <i className='material-icons'>arrow_upward</i>
                </button>
                <div className='Upvotes'>{post.score + upvotes}</div>
                <button className='Vote-button' onClick={handleDownvote}>
                    <i className='material-icons'>arrow_downward</i>
                </button>
            </span>
        </> 
    );
}

export default Votes;