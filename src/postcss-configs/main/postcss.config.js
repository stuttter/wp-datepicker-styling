const postcssNested = require('postcss-nested').default;

module.exports = cfg => {

	const dev = cfg.env === 'dev';

	return {
		map: dev ? { inline: false } : false,
		plugins: [
			require('postcss-import')(),
			postcssNested(),
			require('postcss-sort-media-queries')(),
			require('autoprefixer')(),
			dev ? null : require('cssnano')({
				preset: ['default', {
					colormin: false,
					cssDeclarationSorter: false,
					mergeRules: false,
					minifySelectors: {
						convertToIs: false
					}
				}]
			})
		]
	};
};
