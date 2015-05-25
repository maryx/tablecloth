import React from 'react';
import Post from './post';

export default React.createClass({
    render() {
        const posts = this.props.data.map(function(post, index) {
            return (
                // `key` is a React-specific concept and is not mandatory for the
                // purpose of this tutorial. if you're curious, see more here:
                // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
                    <Post title={post.title} background={post.background} key={index}>
                    {post.body}
                    </Post>
            );
        });
        return (
                <div className="post-list">
                {posts}
            </div>
        );
    }
});
