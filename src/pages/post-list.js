import React from 'react';
import Recipe from './recipes/recipe';
import Dish from './menu/dish';

export default React.createClass({
    displayName: 'Post List',
    render() {
        var self = this;
        const posts = this.props.data.map(function(post, index) {
            if (self.props.style === 'menu') {
                return (<Dish title={post.title} link={post.link} background={post.background} body={post.body} key={index}>
                        </Dish>
                       );
            } else {
                return (<Recipe title={post.title} background={post.background} key={index}>
                        {post.body}
                        </Recipe>
                       );
            }
        });
        return (<div className="post-list">
                {posts}
                </div>
               );
    }
});
