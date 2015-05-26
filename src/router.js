import app from 'ampersand-app';
import Router from 'ampersand-router';
import React from 'react';
import Recipes from './pages/recipes';
import Recipe from './pages/recipes/recipe';
import Menu from './pages/menu';
import posts from './pages/posts.json';

const longTime = 5000000000000000; // TODO never poll ever ever?
export default Router.extend({
    routes: {
        '': 'menu',
        'all': 'recipes',
        ':dish': 'displayDish'
    },
    menu() {
        React.render(<Menu pollInterval={longTime}/>, document.body);
    },
    recipes() {
        React.render(<Recipes pollInterval={longTime}/>, document.body);
    },
    // If you just go to the page without options (i.e. didn't click menu) you needa fetch the data
    // TODO: fix this so I load data consistently
    displayDish(options) {
        if (typeof(options) === 'string') {
            let correctPost = {};
            posts.forEach(function(post) {
                if (post.link === options) {
                    correctPost = post;
                }
            });
            options = correctPost;
        }
        React.render(<Recipe pollInterval={longTime} title={options.title} background={options.background}>
                     {options.body}
                     </Recipe>, document.body);
    }
});
