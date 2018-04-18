import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogPostComponent from './BlogPostComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [],
        };
    }

    render() {
        let deletePost = (postid) => {
            console.log('post to delete ' + postid);
             this.setState((state) => {
                return {postList:  state.postList.filter(post => post.id !== postid)};
            });
        }
        
        let listPosts = () => {
            return this.state.postList.map((data) => {
                return (
                    <BlogPostComponent key={data.id} id={data.id} title={data.title} content={data.content} deletePost={deletePost}/>
                )
            })
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {listPosts()}
            </div>
        );
    }
  
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({postList: data});
                //console.log(this.state.postList);
            });
    }
}
export default App;
