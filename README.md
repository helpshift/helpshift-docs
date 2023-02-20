# Helpshift Dev Docs

Welcome to the repository for the Helpshift Developer Documentation!

## Found a problem?

Browse the existing Github issues or feel free to create a new Github issue if you can't find your problem.

## Contributing

You can contribute to this repository by opening a pull request against the `main` branch. Check the [Local development](#local-development) section for more information.

## Local development

If you are making changes to docs, it is possible to use the Github code editor directly for small changes. For larger changes, consider going local:

### Installing dependencies

1. Clone this repository locally
2. Ensure that you are on Node 16.14 or above
3. Run `npm i` to install dependencies

### Making changes

This is a [Docusaurus](https://docusaurus.io) project, so Docusaurus-related commands apply.

1. Run the local server with `npm run start` (starts on port 3000)
2. Use `npm run lint` to check for or `npm run lint:fix` to take care of linter issues
3. Make your changes
4. Open a PR against the `main` branch

The search plugin only works with the final output of Docusaurus. If you want to test changes against the search plugin, do the following:

1. Make your changes
2. Build the project with `npm run build`
3. Test the search bar

### Adding unit tests

This is a doc-heavy website, so unit tests for the base components haven't been added yet. We are considering adding E2E and/or Component tests with Cypress.
