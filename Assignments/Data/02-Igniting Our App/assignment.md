## What is `NPM`?

### - NPM is package manager, which manages packages that are installed in the project.

## What is `Parcel/Webpack`? Why do we need it?

### - Parcel/WebPack is bundler, which performs various functions and make app powerful.

Its functions are:

- Bundling
- Minification
- Image Optimization
- Compression
- Tree Shaking etc

## What is `.parcel-cache`?

### - .parcel-cache is directory that is created by parcel to store cached files.

# - What is `npx` ?

### - npx is a package that is installed with npm and used to execute packages that are downloaded through npm command.

# - What is difference between `dependencies` vs `devDependencies`?

### - dependencies : packages required by app in production.

### devDependencies : packages that are only needed for local development and testing.

# - What is Tree Shaking?

### It is a function that is provided by bundler to remove unwanted code.

# - What is Hot Module Replacement?

### It is a function that is provided by bundler that provides live reloading of page whenever there are changes in files.

# - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

- Bundling
- Minification
- Image Optimization
- Tree Shaking
- Hot Module Replacement
- Compression
- Zero Config
- Cleaning our code
- Caching while development
  - It is done with the help of .parcel-cache directory to speed up build.

# - What is `.gitignore`? What should we add and not add into it?

- .gitignore is a text file, which tells git about the files and folder to be ignored in project.
  ## What should we add?
- Something which is reproducible at server. ex. Node modules, parcel-cache, dist folder etc.

  ## What should not be added?

- Something which is not reproducible at server. ex. package.json, package-lock.json etc.

# - What is the difference between `package.json` and `package-lock.json`

- package.json contains meta data of the project and function dependencies required by the project.
- package-lock,json is created for locking dependecy with installed version. It will install the latest version of package and save it to the package.json.

# - What is `node_modules` ? Is it a good idea to push that on git?

- It is a directory which contains every dependencies installed in the project.
- No, node modules folder should not push to the git. Because it is very big in size and can be reproducible at the server.

# - What is the `dist` folder?

- Dist folder contains minimized version of source code. That code is used in production web applications.

# - What is `browserlists`

- Browserlists is a tool which specifies which all version of browsers would be suppported by our app.
