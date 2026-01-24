### React:

React is a JavaScript library for building user interfaces using a component-based architecture, allowing developers to create reusable UI components

#### UI (User Interface) is the part of an application or system that users see and interact with.

## To create a folder via Terminal
mkdir foldername

## To create a file via Terminal 

touch filename.filetype

## To delete a file via Terminal

del filename.filetype

## How to create and run:

npx create-react-app first --template typescript

cd first

code . -> To open the project in new Visual Studio

npm start gives ajv error. Hence, I go with yarn

rmdir /s /q node_modules  // remove_directory all_subfolders&files quiet_mode folder_name

del package-lock.json

npm install -g yarn // node package manager. Yarn - Alternative package

yarn -v        // To check the version

yarn install

yarn start

## Push it to GitHub

git init 

git add .

git commit -m "Initial Hello React app (CRA + TS)"

git branch -M main

git remote add origin https://github.com/Sathish-Ramasundaram/first.git

git push -u origin main

## Host on GitHub page

yarn add -D gh-pages

Add this line package.json
"homepage": "https://Sathish-Ramasundaram.github.io/first",

Add this lines in script (package.json)
  "predeploy": "yarn build",
  "deploy": "gh-pages -d build"


yarn deploy

## Update App.tsx

function App() {
  return (
    <div>
      <h1>Hello </h1>
      <p>From GitHub</p>
    </div>
  );
}

export default App;

yarn start

### Redeploy
(wait for 30 seconds or a minute and refresh)
yarn deploy

## create components

src -> create folder "components"
create page name "Home.tsx"

```
function Home() {
    return (
        <>
        <p>Welcome to Home Page (From Components) </p>
        </>
    );
}

export default Home;

```

Update App.tsx

```

import Home from "./components/Home";

function App() {
  return (
    <div>
      <h1>Hello! from App</h1>
      <Home />
    </div>
  );
}

export default App;

```

New component: Footer.tsx

function Footer() {
    return (
        <footer style={{background: "yellow"}}>
        <p>&copy; All rights reserved</p>
        </footer> 
    );
}

export default Footer;

updated App.tsx

import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <h1>Hello! from App</h1>
      <Home />
      <Footer />
    </div>
  );
}

export default App;

---

Add css to put footer in down:

.app {
  display: flex;           /* enables one-dimensional flex layout */
  flex-direction: column;  /* stacks children vertically (top → bottom) */
  min-height: 100vh;       /* ensures container is at least viewport height */
}

footer {
  margin-top: auto;
}

updated App.tsx

import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Hello! from App</h1>
      <Home />
      <Footer />
    </div>
  );
}

export default App;

## Props:
Props are immutable data passed from a parent component to a child component.

App.tsx

```
<Home name="SR Stores"/>

```

Home.tsx

```
type StoreName = {
    name: string;
};

function Home({name}: StoreName) {
    return (
        <div>
        <p>Welcome to {name} (from component & props) </p>
        </div>
    );
}

export default Home;
```

## useState
useState is a React Hook that lets a component remember data and re-render when that data changes.

### Note:

Always commit before deploy. Deploy is not version control.

git add .

git commit -m "Add Home component"

git push

yarn deploy