## What is `npm`?

- `npm` is the world's largest Software Registry. The registry contains over 800,000 code packages. Open-source developers use `npm` to share software.
  npm is lots of things:

- `npm` is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.

- The `npm` Registry is a public collection of packages of open-source code for` Node.js, front-end web apps, mobile apps, robots, routers`, and countless other needs of the JavaScript community.

- `npm` alternative is `yarn`

## What is bundler

- Module bundlers are the way to organize and combine many files of JavaScript code into one file. A JavaScript bundler can be used when your project becomes too large for a single file or when you're working with libraries that have multiple dependencies.

## What is difference between `dependencies vs devDependencies`?

- `"dependencies"` : Packages required by your application in production. `"devDependencies"` : Packages that are only needed for local development and testing.

## What is Hot Module Replacement?

- `Hot Module Replacement (HMR)` exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload. Save valuable development time by only updating what's changed.

## vite features

- Dev Build - vite provides us develop build
- Local Server - vite also provides us a local server, which can be used to see live changes in our application.
- HMR = Hot Module Replacement - exchanges, adds, or removes modules while an application is running, without a full reload

and some of more cool features of vite are:

- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different Build for dev and prod bundles

## What is `.gitignore`? What should we add and not add into it?

- gitignore file tells Git which files to ignore when committing your project to the GitHub repository. gitignore is located in the root directory of your repo. / will ignore directories with the name.

## What is `node_modules`? Is it a good idea to push that on git?

- The `node_modules` folder contains generated code. This is not code you've written and you should never make any updates to the files inside Node modules because there's a pretty good chance they'll get overwritten next time you install some modules.

It is better to not commit the `node_modules` folder, and instead add it to your `.gitignore` file.

Here are all the reasons why you shouldn't commit it: The node_modules folder has a massive size (up to Gigabytes). It is easy to recreate the node_modules folder via packages.json

## What is the `dist` folder?

- The `/dist` stands for distributable. The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications.

vite's default directory for your output is named dist . The --dist-dir public tag defines the output folder for your production files and is named public to avoid confusion with the dist default directory.

## what is component

- Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return JSX.

Component should always start with capital letter like `card`

Example-

```jsx

const Card = () => {
  return (
    <div className="card-wrapper">
      <img className="card-img" src="https://i.redd.it/0ljdki37hned1.png" />
      <p className="card-text">this is card </p>
    </div>
  );
};

```
