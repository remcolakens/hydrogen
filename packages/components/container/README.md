# @code-internet-applications/container

Containers are used to constrain a contents width to the current breakpoint

## Installation

```
pnpm add @code-internet-applications/container
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
