import querystring from 'node:querystring';
import {exec} from 'node:child_process';

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

	exec(`${command} https://www.google.com/search?q=${search}`, (error, stdout, stderr) => {
		if (error || stderr) {
			throw new Error('Could not open Google');
		}
	});
}
