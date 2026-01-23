### React:

React is a JavaScript library for building user interfaces using a component-based architecture

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

rmdir /s /q node_modules

del package-lock.json

npm install -g yarn

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

### Note:

Always commit before deploy. Deploy is not version control.

git add .

git commit -m "Add Home component"

git push

yarn deploy