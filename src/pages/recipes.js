import React from 'react';
import Firebase from 'firebase';
import PostList from '../components/post-list';

export default React.createClass({
    displayName: 'All Recipes',
    loadPostsFromServer() {
        let posts = {};
        const self = this;
        const firebase = new Firebase('https://tablecloth.firebaseio.com');
        firebase.on('value', (postSnapshot) => { // this is some reserved event
            console.log(postSnapshot.val());
            posts = postSnapshot.val();
            console.log(posts, 'posts');
            self.setState({data: posts});
        });
    },
    getInitialState() {
        return {data: []};
    },
    componentDidMount() {
        this.loadPostsFromServer();
//        setInterval(this.loadPostsFromServer, this.props.pollInterval);
    },
    render() {
        return (
                <div className='list-of-posts'>
                <PostList data={this.state.data} style='recipe-list'/>
                </div>
        );
    }
});
