import React from 'react';
import PostList from './postlist';
import posts from './posts.json';

export default React.createClass({
    loadPostsFromServer() {
        this.setState({data: posts});
        // $.ajax({
        //     url: this.props.url,
        //     dataType: 'json',
        //     success: function(data) {
        //         this.setState({data: data});
        //     }.bind(this),
        //     error: function(xhr, status, err) {
        //         console.log('oh no');
        //         console.error(this.props.url, status, err.toString());
        //     }.bind(this)
        // });  
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
                <div className="post-list">
                <PostList data={this.state.data} />
                </div>
        );
    }
});
