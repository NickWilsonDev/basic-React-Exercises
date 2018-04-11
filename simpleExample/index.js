const root = document.querySelector('.react-root');
const h = React.createElement;

//let h1 = h('h1', {className: 'header' }, 'hello Bob');
//let p = h('p', {}, 'Here is some text');
//let footer = h('footer', null, 'Copyright 2020');


let Author = (authorName) =>
    h('h1', {className: 'header' }, `${authorName}`);

let Content = (content) =>
    h('p', {}, `${content}`);


let BlogPost = (author, content) =>
    h('div', {}, [Author(author), Content(content)]);

let list = h('div', null, [
    BlogPost('Nick', 'post1'),
    BlogPost('Ashley', 'post2'),
    BlogPost('Nick','post3'),
    BlogPost('Ashley','post4')

]);

ReactDOM.render(list, root);
