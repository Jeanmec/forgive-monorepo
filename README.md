<p align="center">
  <a href="https://forgv.com" target="_blank">
    <img src="https://forgv.com/praying.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<h1 align="center">
  <a href="https://forgv.com/">
    <span style="color:#4A4A4A;">Forg</span><span style="color:#BDBDBD;">i</span><span style="color:#4A4A4A;">v</span><span style="color:#BDBDBD;">e</span><span style="color:#4A4A4A;">.com</span>
  </a>
</h1>

---

## What is that ?

This app, inspired by a mini-game featured in
<a href="https://store.steampowered.com/app/485380/Welcome_to_the_Game/" target="_blank">
Welcome to the Game
</a>, allows you to confess your sins and be judged, as well as decide whether the sins of others deserve forgiveness or not.

All sins and votes are anonymous.

---

### Getting Started

To run the application, you need to configure the necessary environment variables for both the backend and frontend.

- **Configuration**: Copy the `.env.example` files to `.env` in both the `backend` and `frontend` folders and fill in the appropriate values, particularly the database and API URLs.
- **Installation**: Run `yarn install` in each folder to install dependencies.

## Run tasks

To run the frontend use:

```sh
npx nx serve forgive-front
```

To run the backend use:

```sh
npx nx serve forgive-back
```

To create a production bundle:

```sh
npx nx build forgive-front
```

To see all available targets to run for a project, run:

```sh
npx nx show project forgive-front
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

To install a new plugin you can use the `nx add` command. Here's an example of adding the React plugin:

```sh
npx nx add @nx/react
```

Use the plugin's generator to create new projects. For example, to create a new React app or library:

```sh
# Generate an app
npx nx g @nx/react:app demo

# Generate a library
npx nx g @nx/react:lib some-lib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/nuxt?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
