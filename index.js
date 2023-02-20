import querystring from 'querystring';
import {exec} from 'child_process';

export default function openGoogle(search) {
    // eslint-disable-next-line no-param-reassign
    search = querystring.escape(search);

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
}
