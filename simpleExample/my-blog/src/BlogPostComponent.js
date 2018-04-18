import React, { Component } from 'react';
import './App.css';
import PostTitleComponent from './PostTitleComponent';
import PostContentComponent from './PostContentComponent';
import PostEditButton from './PostEditButton';
import PostDeleteButton from './PostDeleteButton';

class BlogPostComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            content: this.props.content
        }
    }

    render() {
        let { title, content} = this.state;
        //console.log(this.state);
        return (
            <div>{this.state.id}
                <PostTitleComponent title={title} />
                <PostContentComponent content={content} />
                <div>
                    <PostEditButton id={this.state.id} />
                    <PostDeleteButton key={this.state.id} id={this.state.id} deletePost={this.props.deletePost}/>
                </div>
            </div>
        );
    }
}

export default BlogPostComponent;
