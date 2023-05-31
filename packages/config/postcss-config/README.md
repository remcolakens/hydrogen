# @code-internet-applications/postcss-config

A sharable config for PostCSS

## Installation

```
pnpm add @code-internet-applications/postcss-config
```

## Usage

To use the library, install it and then use the import it in `postcss.config.js` file as follows:

```
module.exports =
	require('@code-internet-applications/postcss-config').defaultConfig;
```

## Contribution

See the [contributing guidelines](https://github.com/code-internet-applications/cbt-hydrogen/blob/main/CONTRIBUTING.md) for more details.

## Troubleshooting

To ensure that you can access the packages from the GitHub package registry, make sure to add the following line to your `.npmrc` file in the root directory of your project:

```
@code-internet-applications:registry=https://npm.pkg.github.com
```
