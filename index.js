'use strict';
const {exec} = require('child_process');

module.exports = search => {
    // TODO: use `%20` for space instead of `+` ?
    search = search.replace(' ', '+'); // TODO: replace other strings than space

    // Default command for linux
    let command = 'xdg-open';

    if (process.platform === 'win32') {
        command = 'start';
    } else if (process.platform === 'darwin') {
        command = 'open';
    }

    exec(`${command} https://www.google.com/search?q=${search}`, (err, stdout, stderr) => {
        if (err || stderr) {
            throw new Error('Could not open Google');
        }
    });
};