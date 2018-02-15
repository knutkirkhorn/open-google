'use strict';
const exec = require('child_process').exec;

module.exports = (search) => {
    exec(`start https://www.google.com/search?q=${search}`, (err, stdout, stderr) => {
        if (err || stderr) {
            throw new Error('Could not open Google');
        }
    });
}