export default () => ({
    autoDetect: true,
    files: [
        {pattern: 'node_modules/chai/chai.js', instrument: true},
        {pattern: 'src/**/*.js'},
        { pattern: 'src/**/*.spec.js', ignore: true }
    ],

    tests: [
        {pattern: 'src/**/*.spec.js'}
    ],
});