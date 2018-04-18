import React from 'react';
import './App.css';

let PostEditButton = (props) => {
    let handleClick = () => {
        alert('this.post: ' + props.id);
        console.log('this.post: ' + props.id);
    }

    return (
        <button onClick={handleClick}>
            Edit
        </button>
    );
}
export default PostEditButton;
