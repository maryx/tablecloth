import React from 'react';
import Recipe from './recipe';
import Dish from './dish';

export default React.createClass({
    displayName: 'Post List',
    render() {
        const self = this;
        const posts = Object.keys(this.props.data || {}).map((title, index) => {
            const post = self.props.data[title];
            if (self.props.style === 'menu') {
                return (<Dish key={post.link} title={post.title} link={post.link} background={post.background} body={post.body}>
                        </Dish>
                       );
            } else {
                return (<Recipe key={post.link} title={post.title} background={post.background}>
                        {post.body}
                        </Recipe>
                       );
            }
        });
        return (<div className='post-list'>
                {posts}
                </div>
               );
    }
});
