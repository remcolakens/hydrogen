/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

// create PascalCase from kebab-case
function pascalCase(name) {
	const words = name.split('-');
	const capitalizedWords = words.map((word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	});
	return capitalizedWords.join('');
}

// build index.ts file
function defaultIndexTemplate(filePaths) {
	const exportEntries = filePaths.map(({ path: filePath }) => {
		const basename = path.basename(filePath, path.extname(filePath));

		return `export { default as ${pascalCase(basename)} } from './${basename}'`;
	});
	return exportEntries.join('\n');
}

module.exports = defaultIndexTemplate;
