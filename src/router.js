import app from 'ampersand-app';
import Firebase from 'firebase';
import Router from 'ampersand-router';
import React from 'react';
import Recipes from './pages/recipes';
import Menu from './pages/menu';
import Recipe from './components/recipe';

const longTime = 50000000000000000000000000000000; // TODO never poll ever ever?
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
        console.log(options);
        if (options && options.body) {
            console.log('in option one');
            // React.render(<Recipe key={options.link} pollInterval={longTime} title={options.title}
            //              background={options.background}>
            //              {options.body}
            //              </Recipe>, document.body);
            
        } else {
            console.log('in option 2');
            let correctPost = {};
            const firebase = new Firebase('https://tablecloth.firebaseio.com/' + options);
            firebase.on('value', (snapshot) => {
                var post = snapshot.val();
                correctPost.link = options;
                correctPost.title = post.title;
                correctPost.background = post.background;
                correctPost.body = post.body;
                options = correctPost;
                React.render(<Recipe key={options.link} pollInterval={longTime} title={options.title}
                                     background={options.background}>
                             {options.body}
                             </Recipe>, document.body);
            });
        }
    }
});
