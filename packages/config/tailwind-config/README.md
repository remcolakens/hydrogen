# @code-internet-applications/tailwind-config

A sharable config for the tailwind config

## Installation

```
pnpm add @code-internet-applications/tailwind-config
```

## Usage

To use the library, install it and then use the present in `tailwind.config.ts`
file as follows:

```
import type { Config } from 'tailwindcss';
import { tailwindConfig } from '../../packages/config/tailwind-config/tailwind.config';

export default {
	presets: [tailwindConfig],
} satisfies Config;

```

## Contribution

See the
[contributing guidelines](https://github.com/code-internet-applications/cbt-hydrogen/blob/main/CONTRIBUTING.md)
for more details.

## Troubleshooting

To ensure that you can access the packages from the GitHub package registry,
make sure to add the following line to your `.npmrc` file in the root directory
of your project:

```
@code-internet-applications:registry=https://npm.pkg.github.com
```
