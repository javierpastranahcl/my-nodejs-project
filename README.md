# Try running the index.js file directly:
```
> node index.js
```

What happens?

Let's fix it!

# Begin by installing the core babel tools:
npm install --save-dev babel-cli babel-core babel-preset-es2015

# Alternatively, it could be installed globally.

# Add a package.json script to execute babel:
```
"scripts": {
  "babel": "babel --presets es2015 index.js -o build/index.js",
},
```

# Finally, execute babel:
```
> npm run babel
> open build/index.js
```
