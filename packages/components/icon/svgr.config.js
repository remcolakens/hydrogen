module.exports = {
	typescript: true,
	icon: true,
	filenameCase: 'kebab',
	replaceAttrValues: {
		'#000': 'currentColor',
		'#FFF': 'transparent',
		'#E5E5E5': 'currentColor',
	},
	template: require('./svgr/templates/defaultTemplate.js'),
	indexTemplate: require('./svgr/templates/defaultIndexTemplate.js'),
};
