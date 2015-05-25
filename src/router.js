import Router from 'ampersand-router';
import React from 'react';
import PostBox from './pages/posts/index';
import About from './pages/about';

export default Router.extend({
    routes: {
        '': 'posts',
        'about': 'about'
    },
    posts() {
        React.render(<PostBox url='./posts.json' pollInterval={5000000000000000}/>, document.body);
    },
    about() {
        React.render(<About/>, document.body);
    }
});
