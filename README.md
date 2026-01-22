## How to create and run:

npx create-react-app first --template typescript

cd first

rmdir /s /q node_modules

del package-lock.json

npm install -g yarn

yarn -v

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
        <h1>Welcome to Home Page (from Components) </h1>
        </>
    );
}

export default Home;

```

Update App.tsx

import Home from "./components/Home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;

### Note:

Always commit before deploy. Deploy is not version control.

git add .

git commit -m "Add Home component"

git push

yarn deploy