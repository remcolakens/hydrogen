# @code-internet-applications/tsconfig

A sharable config for tsconfig

## Installation

```
pnpm add @code-internet-applications/tsconfig
```

## Usage

To use the library, install it and then extend the `tsconfig.json` file as
follows:

```
{
  "extends": "@code-internet-applications/tsconfig",
}
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
