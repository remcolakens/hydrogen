module.exports = {
	// Type check TypeScript files
	'*.{ts,tsx}': [() => 'tsc --noEmit'],

	// Lint then format TypeScript and JavaScript files
	'*.{ts,tsx,js,jsx}': ['eslint --cache'],
	'*.{ts,tsx,js,jsx}': ['prettier --write'],

	// Format Markdown and JSON
	'*.{md,mdx,yml,json,babelrc,eslintrc,prettierrc}': ['prettier --write'],
};
