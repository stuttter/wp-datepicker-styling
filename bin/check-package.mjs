import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const expected = [
	'LICENSE',
	'README.md',
	'datepicker.css',
	'datepicker.css.map',
	'datepicker.min.css',
	'package.json'
];

const cache = mkdtempSync(join(tmpdir(), 'wp-datepicker-package-'));
const npmCli = process.env.npm_execpath;
let packages;

assert.ok(npmCli, 'The package audit must run through npm.');

try {
	const output = execFileSync(
		process.execPath,
		[npmCli, 'pack', '--dry-run', '--json', '--ignore-scripts'],
		{
			encoding: 'utf8',
			env: {
				...process.env,
				npm_config_cache: cache
			}
		}
	);

	packages = JSON.parse(output);
} finally {
	rmSync(cache, { force: true, recursive: true });
}

assert.equal(packages.length, 1, 'Expected one package result.');
assert.deepEqual(
	packages[0].files.map(file => file.path).sort(),
	expected,
	'Package contents differ from the reviewed runtime surface.'
);
