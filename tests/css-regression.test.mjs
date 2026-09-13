import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { isAbsolute } from 'node:path';
import test from 'node:test';
import postcss from 'postcss';

const readable = postcss.parse(readFileSync('datepicker.css', 'utf8'));
const minified = postcss.parse(readFileSync('datepicker.min.css', 'utf8'));

function normalizeSelector(selector) {
	return selector
		.replace(/\s+/g, ' ')
		.replace(/\s*([>+~])\s*/g, '$1')
		.trim();
}

function selectors(root) {
	const result = [];

	root.walkRules(rule => {
		for (const selector of rule.selectors) {
			result.push(normalizeSelector(selector));
		}
	});

	return result.sort();
}

function declarationsFor(root, expectedSelector) {
	const declarations = new Map();

	root.walkRules(rule => {
		if (rule.selectors.map(normalizeSelector).includes(expectedSelector)) {
			rule.walkDecls(declaration => {
				declarations.set(declaration.prop, declaration.value);
			});
		}
	});

	return Object.fromEntries(declarations);
}

test('readable and minified stylesheets expose the same selectors', () => {
	assert.deepEqual(selectors(minified), selectors(readable));
});

test('production stylesheet is whitespace-minified', () => {
	const readableCss = readFileSync('datepicker.css', 'utf8');
	const minifiedCss = readFileSync('datepicker.min.css', 'utf8');

	assert.equal(minifiedCss.includes('\n'), false);
	assert.ok(minifiedCss.length < readableCss.length);
});

test('date states retain independent selectors and declarations', () => {
	const states = new Map([
		['.ui-datepicker tr:first-of-type td', { 'border-top': '1px solid #f0f0f1' }],
		['.ui-datepicker td.ui-datepicker-week-end', { 'background-color': '#f6f7f7' }],
		['.ui-datepicker td.ui-datepicker-today', { 'background-color': '#f5e6ab' }],
		['.ui-datepicker td.ui-datepicker-current-day', { background: '#b8e6bf' }],
		['.ui-datepicker td.ui-state-disabled', { cursor: 'default', opacity: '.2' }],
		['.ui-datepicker td.ui-state-disabled .ui-state-default', { background: '#dcdcde', cursor: 'default' }],
		['.ui-datepicker td .ui-state-default', { background: 'transparent', display: 'block' }],
		['.ui-datepicker td .ui-state-default.ui-priority-secondary', { opacity: '.3' }],
		['.ui-datepicker td .ui-state-default.ui-priority-secondary.ui-state-hover', { opacity: '1' }]
	]);

	for (const [selector, expected] of states) {
		const actual = declarationsFor(minified, selector);

		for (const [property, value] of Object.entries(expected)) {
			assert.equal(
				actual[property],
				value,
				`${selector} lost or changed its ${property} declaration.`
			);
		}
	}
});

test('source map contains only portable relative source paths', () => {
	const map = JSON.parse(readFileSync('datepicker.css.map', 'utf8'));

	assert.equal(map.version, 3);
	assert.equal(map.file, 'datepicker.css');
	assert.equal(map.sources.length, map.sourcesContent.length);
	assert.ok(map.sources.length > 0);

	for (const source of map.sources) {
		assert.equal(isAbsolute(source), false, `${source} must be relative.`);
		assert.equal(source.includes('\\'), false, `${source} must use portable separators.`);
		assert.match(source, /^src\//);
	}
});
