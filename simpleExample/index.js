const root = document.querySelector('.react-root');
const h = React.createElement;

//let h1 = h('h1', {className: 'header' }, 'hello Bob');
//let p = h('p', {}, 'Here is some text');
//let footer = h('footer', null, 'Copyright 2020');


let Author = ({author}) =>
    h('h1', {}, `${author}`);

let Content = ({content}) =>
    h('p', {}, `${content}`);

let Image = ({path}) =>
    h('img',{src:path, height:'100px', width:'100px'});


let BlogPost = ({author, content, path}) =>
    //h('div', {}, [Author(author), Content(content)]);
    h('div', {}, [
        h(Author, {author}),
        h(Image, {path}),
        h(Content, {content})
    ]);

let list = h('div', null, [
    h(Author, {author:'Bob'}),
    h(BlogPost, {author:'nick', content:'blabla', path:'./Nic1.jpg'}),
    h(BlogPost, {author:'nick', content:'blablai2'}),
    h(BlogPost, {author:'Nick', content:'post1'}),
    h(BlogPost, {author:'Ashley', content:'post2'}),
    //BlogPost('Nick','post3'),
    //BlogPost('Ashley','post4')
]);

//console.log(list);

ReactDOM.render(list, root);
