# Building A Project With Typescript

### In Terminal:
```
tsc --init // creates tsconfig.json file
```
Then:
```
mkdir src dist // ts in source  
```
Then in `src`:
```
touch src/index.ts
```
Then we can change the `outDir` in tsconfig file to be `dist`, if that's the setup we would like for the project.
`"include": "src/"` as well, as we previously said in section 10.

Then we would make an index.html file that we would feed the `dist/index.js` file for the JS version of our TS.
ie;
```html
<script src="dist/index.js"></script>
```

Generally in the workflow, in order to have the changes be rendered in the browser as well, since the TS is being recompiled automatically in watch mode, but the browser will still need a refresh before seeing the neww additions and changes...
We can use a live server...
Installing Lite Server:
```
npm init -y

npm install lite-server
```
Now in `package.json` we set up tye script to run the live server on a command `npm start`, this will auto-refresh on changes after the recompiled typescript:
```JSON
"scripts": {
    "start": "lite-server"  
},
```
