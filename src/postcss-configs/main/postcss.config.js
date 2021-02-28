module.exports = cfg => {

	const
		dev  = cfg.env          === 'dev',
		scss = cfg.file.extname === '.scss';

	return {
		map:     dev  ? { inline: false } : false,
		parser:  scss ? 'postcss-scss'    : false,
		plugins: [
			require('postcss-advanced-variables')(),
			require('postcss-map-get')(),
			require('postcss-nested')(),
			require('postcss-sort-media-queries')(),
			require('autoprefixer')(),
			dev ? null : require('cssnano')()
		]
	};
};
