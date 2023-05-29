# Contribution guidelines

So you have decided to contribute to the Code Base Theme Hydrogen. That's a great choice! 👍

There are different ways you can contribute, all of which are valuable. Here are some guidelines that can help you prepare your contribution.

## Installation

The following steps will help you get the project up and running:

1. Clone the repository locally:

```
git clone https://github.com/code-internet-applications/cbt-hydrogen
cd cbt-hydrogen
```

2. Install all the dependencies and packages by running `pnpm install`.

## Development

To streamline the development process, we have set up some tooling and systems. Code Base Theme uses a monorepo structure, treating each component/utility as an independent package.

### Tooling

- [PNPM](https://pnpm.io/) to manage packages and dependencies
- [Tsup](https://tsup.egoist.dev/) to bundle packages
- [Changeset](https://github.com/atlassian/changesets) for changes
  documentation, changelog generation, and release management.

## Commands

**`pnpm install`**: bootstraps the entire project, symlinks all dependencies for
cross-component development.

**`pnpm build`**: run build for all component packages.

## Bug report

To report a bug, you can use [GitHub's issues](https://github.com/code-internet-applications/cbt-hydrogen/issues). Together with a project manager, we will make sure these issues are picked up and prioritized. Please provide a detailed description of the issue and the steps to reproduce, including a screenshot of the issue.

## Pull request

Before you create a pull request, please check whether your commits comply with the commit conventions used in this repository.

When you create a commit, we kindly ask you to follow the convention `category(scope or module): message` in your commit message while using one of the following categories:

- `feat`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally, you will additionally reference an issue if present)
- `refactor`: any code-related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e., README, docs for usage of a lib or CLI usage)
- `build`: all changes regarding the build of the software, changes to dependencies, or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e., GitHub Actions, CI system)
- `chore`: all changes to the repository that do not fit into any of the above categories

If you are interested in the detailed specification, you can visit [Conventional Commits](https://www.conventionalcommits.org/ ) or check out the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Steps to create a new pull request

1. Clone the Code Base Theme Hydrogen to your local machine
2. Create a new branch out of the `main` branch. We follow the convention
   `[type/scope]`. For example `fix/navigation-bar` or `docs/tailwind-config`. The `type`
   can be either `docs`, `fix`, `feat`, `build`, or any other conventional
   commit type. `scope` is just a short id that describes the scope of work.
3. Make and commit your changes following the [commit convention](https://github.com/chakra-ui/chakra-ui/blob/main/CONTRIBUTING.md#commit-convention).
4. Run `pnpm changeset` to create a detailed description of your changes. This will be used to generate a changelog when we publish an update. [Learn more about Changeset](https://github.com/atlassian/changesets/tree/master/packages/cli).

> If you made minor changes like CI config, prettier, etc, you can run
> `pnpm changeset add --empty` to generate an empty changeset file to document
> your changes.
