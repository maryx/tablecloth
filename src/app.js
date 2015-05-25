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
    }
});

app.init();
