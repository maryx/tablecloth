import React from 'react';
import $ from 'jquery';

export default React.createClass({
    displayName: 'Recipe',
    componentDidMount() {
        this.hideRecipe = true;
    },
    handleClick() {
        if (this.hideRecipe) {
            $('.post-background').hide();
            this.hideRecipe = false;
        } else {
            $('.post-background').show();
            this.hideRecipe = true;
        }
        return;
    },
    render() {
        const body = this.props.children || {};
        const intro = (body.intro || '').toString();
        const recipe = (body.recipe || '').toString();
        const ingredients = (body.ingredients ||[]).map(function(i, index) {
            return (<li>{i}</li>);
        });
        const method = (body.method || []).map(function(m, index) {
            return (<li>{m}</li>);
        });
        const notes = (body.notes || '').toString();
        const background = {'background': 'url(' + this.props.background + ') fixed no-repeat'};

        return (
                <div className='background' style={background}>
                <button className='minimize' onClick={this.handleClick}>Minimize Recipe</button>
                <div className='post-background'>
                <div className='post'>
                <h1> {this.props.title} </h1>
                <div className='intro'> {intro} </div>
                <a className='original-recipe' href={recipe} target='_blank'>Original Recipe</a>
                <div className='ingredients'>
                <h2>Ingredients</h2>
                <ul>{ingredients}</ul></div>
                <div className='method'>
                <h2>Method</h2>
                <ol>{method}</ol></div>
                <div className='notes'>
                <h2>Notes</h2>
                {notes}</div>
                </div>
                </div>
                </div>
        );
    }
});
