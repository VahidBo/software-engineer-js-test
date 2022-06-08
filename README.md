# Photo Editor Application

A React application that enables users to upload a photo, position or scale it and download a print of it and import the print again.

## Tech Documentation

### Packages:

Major packages used in this project:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Because as you mentioned it the test doc I try to see this app as an application that should work for long time and must be maintainable and extendable.

I used [`material-ui`](https://mui.com/) as UI kit to implement better UI components in a short time. In addition, by using `material-ui` you have a complete, customizable design system in your project that helps you develop you app faster. I believe that If you use Material design system, `material-ui` could be a good choice.

[`jest`](https://jestjs.io/) and [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/) for unit test and integration tests. I believe, the most important thing in testing an app is to make sure that it works properly for user. `react-testing-library` helps you to test your application from the point of view of a user automatically.

`ESLint` and `Prettier` for analyzing and code style and `husky` for git hooks. (Keeping code style in an acceptable level)

### Architecture:

To manage the photo state, I used a context named `printable-context` it is responsible for keeping the state of photo and the function to change it. In this way I separate the logic of storing photo state from the UI. Some UI components and hooks like `useEditorCanvas` and `DownloadJSONButton` are using this context to read the photo states or modify it.

#### Folder Structure:

`components` folder contains the UI component of the application.

Contexts are in `contexts` folder. Each context file contains its provider component and a hook to use the context.

Hooks are in `hooks` folder, and general utils are in `utils` folder as well.

Here is the folder structure of this project.

    src/
    	components/
    	...
    	contexts/
    	...
    	hooks/
    	...
    	utils/
    	...
    App.tsx
    constants.ts
    Index.tsx

## Run Locally

Clone the project and then in project directory

```bash

yarn install && yarn start

```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## TODOs

- Write more tests to improve the quality assurance.
- Improve the UI/UX
- Make this app responsive
- I also added some TODOs in the code

## Authors

- [Vahid Boreiri](https://www.github.com/vahidBo)
