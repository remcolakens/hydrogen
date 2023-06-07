# @code-internet-applications/react

This package bundles all the components together, eliminating the need to
manually install each individual package in your application.

## Installation

```
pnpm add @code-internet-applications/react
```

## Usage

```
import { Button } from "@code-internet-applications/react"

<Button variant="primary">Click me!</Button>
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
public-hoist-pattern[]=@code-internet-applications/*

auto-install-peers=true
strict-peer-dependencies=false
enable-pre-post-scripts=true
node-linker=hoisted
```
