import React from 'react';






const Links = ({post}) => {
    // for some reason this wouldnt allow me to do it inline on the <a> tag
    const commentLink = `https://reddit.com${post.permalink}`;
    return(
        <div className='Post-links'>
            <a href={commentLink}><span className='Post-comments'>{post.num_comments ? (post.num_comments + ' comments') : ('comment') }  </span></a>
            <span>share save hide report pocket</span>
        </div>
    );
};

export default Links;