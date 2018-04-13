const root = document.querySelector('.react-root');
const h = React.createElement;

let blogBeingEdited = null;
//let updatedBlog = null;

let Author = ({author}) =>
    h('h1', {}, `${author}`);

let Content = ({content}) =>
    h('p', {}, `${content}`);

let Image = ({path}) =>
    h('img',{src:path, height:'100px', width:'100px'});

let removeBlog = (blogToDelete) => {
   let {id} = blogToDelete;
    blogList = blogList.filter((blog) => id !== blog.id)
    //update();
}

let editBlog = (blogToEdit) => {
    // Object.assign quick way to make copy of blogToEdit, distinct object with same key/value pairs
    blogBeingEdited = Object.assign({}, blogToEdit);
    console.log(blogBeingEdited);
    //update();
}

let updateImage = (blogToEdit, newPath) => {
    //let blog = blogList.find(blog => blog.id === blogToEdit.id);
    blogBeingEdited.path = newPath;
    //console.log(newPath);
    //update();
}

let updateBody = (blogToEdit, newValue) => {
    //let blog = blogList.find(blog => blog.id === blogToEdit.id);
    blogBeingEdited.content = newValue;
    //update();
}

let saveBlog = (blogBeingEdited) => {
    let blog = blogList.find(blog => blog.id === blogBeingEdited.id);
    blog.content = blogBeingEdited.content;
    blog.path = blogBeingEdited.path;
    blogBeingEdited = null;
    console.log('bloglist before update\n' + blogList[0].content);
   //debugger 
    //update();

    console.log('bloglist after update\n' + blogList[0].content);
}

let EditForm = (blogToEdit) => {
    return h('form', null, [
        h('input', { value: blogToEdit.path, onChange: (event) => {console.log(blogBeingEdited); updateImage(blogBeingEdited, event.target.value)}}),
        h('input', { value: blogToEdit.content, onChange: (event) => updateBody(blogBeingEdited, event.target.value)}),
        h('button', { onClick: () => saveBlog(blogToEdit) }, 'Save')
    ]);
}



let BlogPost = (blog) => //{author, content, path}) =>
    h('div', {}, [
        h(Author, {author: blog.author}),
        h(Image, {path: blog.path}),
        h(Content, {content: blog.content}),
        h(DeleteBlogButton, blog ),
        h(EditBlogButton, blog),
        blogBeingEdited && blog.id === blogBeingEdited.id && h(EditForm, blogBeingEdited)
    ]);

let DeleteBlogButton = (whichBlog) =>
    h('button', {onClick: () => { removeBlog(whichBlog)}}, 'Remove Blog');

let EditBlogButton = (whichBlog) =>
    h('button', {onClick: () => { editBlog(whichBlog)}}, 'Edit Blog');

let blogList = [
    {id: '1', beingEdited: false, author:'nick', content:'blabla', path:'./Nic1.jpg'},
    {id: '2', beingEdited: false, author:'nick', content:'blablai2'},
    {id: '3', beingEdited: false, author:'Nick', content:'post1'},
    {id: '4', beingEdited: false, author:'Ashley', content:'post2'},
];

//console.log(list);
// state is something this component owns and can change
// in general like 90% of codebase should be functional components
// but if state needs to be saved then we will have to use class based ones
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { blogs: props.blogList };
        setTimeout(() => {
            let blogs = this.state.blogs.slice();
            blogs.pop();
            this.setState({ blogs: blogs });
            console.log('about to delete something');
        }, 2000);
    }

    render() {
        let { blogs } = this.state;

        return h('div', null, [
            h(Title),
            h(Author, { person: 'Nick'}),
            h(BlogList, {blogs}),
        ]);
    }
}

ReactDOM.render(h(Page), root);

let update = () => {
    let newBlogList = [];
    for (let blog of blogList) {
        newBlogList.push(BlogPost(blog));
    }
    ReactDOM.render(newBlogList, root);
}

update();
