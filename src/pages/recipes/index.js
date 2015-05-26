import React from 'react';
import PostList from '../post-list';
import posts from '../posts.json';

export default React.createClass({
    displayName: 'RecipeList',
    loadPostsFromServer() {
        this.setState({data: posts});
    },
    getInitialState() {
        return {data: []};
    },
    componentDidMount() {
        this.loadPostsFromServer();
        setInterval(this.loadPostsFromServer, this.props.pollInterval);
    },
    render() {
        return (
                <div className='post-list'>
                <PostList data={this.state.data} style='recipe-list'/>
                </div>
        );
    }
});
