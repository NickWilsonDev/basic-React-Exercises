import React from 'react';
import './App.css';

let PostDeleteButton = (props) => {
    let handleClick = () => {
        //alert('deleting post: ' + props.id);
        console.log('this.post: ' + props.id);
        props.deletePost(props.id);
    }

    return (
        <button onClick={handleClick}>
            Delete
        </button>
    );
}
export default PostDeleteButton;
