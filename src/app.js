import app from 'ampersand-app';
import React from 'react';
import Router from './router';
import styles from './styles/index.styl';

// expose app to browser context
window.app = app;

app.extend({
    init() {
        this.router = new Router();
        this.router.history.start();
    },
    // This is a weird workaround that loads the page AND passes the data over to the new page
    // If you don't want to pass the data over, just use an <a> tag?
    navigate(link, options) {
        this.router.navigate(link);
        this.router.displayDish(options);
    }
});

app.init();
