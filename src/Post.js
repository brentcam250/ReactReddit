import React, { useState } from 'react';
import Links from './Links';
import Votes from './Votes';
import moment from 'moment';

function Post ({ post }) {
    const [vote, setVote] = useState(0);
    //convert the UTC timestamp into a date that moment can handle
    var timestamp = new Date(0);
    timestamp.setUTCSeconds(post.created_utc);

    //only allows 1 of either upvote of downvote
    const handleUpvote = () => {
        if(vote <=0){
            setVote(vote=> vote+1);
        }
    };

    const handleDownvote = () => {
        if(vote >=0){
            setVote(vote=> vote-1);
        }
    };

//<img src={post.thumbnail} alt={post.post_hint}></img>
    //const defaultThumb = '';

    return (
        <div className='Post'> 
            <div className='Post-left'>
                <Votes post={post} handleUpvote={handleUpvote} handleDownvote={handleDownvote} upvotes={vote}/>
            </div>
            <div className='Post-thumb'>
                <img src={post.thumbnail} alt={post.post_hint}></img>
            </div>
            <a href={post.url}><h1 className='Post-title'>{post.title}</h1></a>
    <span className='Post-user'>submitted by {post.author} {moment(timestamp).fromNow()}</span>
            <Links post={post} />
        </div>
    );
}

export default Post;