import React from 'react';
import Firebase from 'firebase';
import PostList from '../components/post-list';

export default React.createClass({
    displayName: 'Menu List',
    loadPostsFromServer() {
        const self = this;
        let posts = {};
        const firebase = new Firebase('https://tablecloth.firebaseio.com');
        firebase.on('value', (postSnapshot) => {
            posts = postSnapshot.val();
            console.log(posts, 'posts');
            self.setState({data: posts});
        });
        console.log(posts, 'posts outside');
    },
    getInitialState() {
        return {data: []};
    },
    componentDidMount() {
        this.loadPostsFromServer();
//        setInterval(this.loadPostsFromServer, this.props.pollInterval);
    },
    render() {
        return (<div className="menu-list">
                <PostList data={this.state.data} style='menu'/>
                </div>
               );
    }
});
