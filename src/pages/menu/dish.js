import React from 'react';
import Recipe from '../recipes/recipe';
import $ from 'jquery';

export default React.createClass({
    displayName: 'Dish',
    componentDidMount() {
        return;
    },
    handleClick() {
        app.navigate('/' + this.props.link, this.props);
        return;
    },
    render() {
        return (<div>
                <div className='dish' onClick={this.handleClick}>
                {this.props.title}
                </div>
                </div>
               );
    }
});
