import { execFileSync } from 'node:child_process';
import { lstatSync } from 'node:fs';

const assets = [
	'datepicker.css',
	'datepicker.css.map',
	'datepicker.min.css'
];

for (const asset of assets) {
	const stat = lstatSync(asset);

	if (!stat.isFile() || stat.isSymbolicLink()) {
		throw new Error(`${asset} must be a regular file.`);
	}

	execFileSync('git', ['ls-files', '--error-unmatch', '--', asset], {
		stdio: 'ignore'
	});
}

execFileSync('git', ['diff', '--exit-code', '--', ...assets], {
	stdio: 'inherit'
});
