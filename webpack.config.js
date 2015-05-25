import webpackConfig from 'hjs-webpack';

export default webpackConfig({
    in: 'src/app.js',
    out: 'public',
    isDev: process.env.NODE_ENV !== 'production'
});
