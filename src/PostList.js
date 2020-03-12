import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList ({ posts }) {

    if(!posts) return ' no posts';


    //pass in key ={post.id}
    function compareValues( order = 'desc'){
        return function innerSort(a,b){
            let comparison =0;
            if(a.score > b.score ){
                comparison =1;
            }else if (a.score < b.score){
                comparison =-1;
            }
            return (
                (order ==='desc') ? (comparison *-1) : comparison
            );
        };
    }
    


    const sortedPosts = posts.sort(compareValues());

    return(
        <div>
            <ul className='PostList'>
                {sortedPosts.map(post=>
                    <li key={post.id} className='PostList-post'>
                        <Post post={post}  >

                        </Post>
                    </li>)}
            </ul>
        </div>
    )

}

PostList.propTypes ={
    posts: PropTypes.array.isRequired,
}

export default PostList;