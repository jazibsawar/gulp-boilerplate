# Gulp-Boilerplate Docs

## Project setup and installation

This utilises open source components running on the Terminal/command-line for it's workflow, you'll need to install Node and Git. Once Node and Git are installed all future operations are instant.

1. Install [Node.js](http://nodejs.org/download) and [Git](https://git-scm.com/downloads) on your machine.
2. Fork/Clone/Download the [repository](https://github.com/jazibsawar/gulp-boilerplate) into your machine, you should hopefully see all the files and folders.
3. Open Terminal in the same folder and run `npm install`. It will install all the dependencies needed into `node_modules`.
4. Then use `npm start` (again in your project directory) to run the command `gulp`. It will automatically build all the resources from `./src` folder and run the server on `localhost:3000`.
5. You can use `npm run build` to build the resources :).

## How to use Gulp-Boilerplate

Using this boilerplace is very easy, it's based on an easy philosphy of keeping things simple so that anybody can use it, even with zero experience on the command-line. It uses Gulp to manage all the essential tasks for building with the web.

### Extending Gulp tasks

If you're including more Gulp tasks in your project, you can add new tasks and include then in default and build `gulp` task at the `gulpfile.babel.js`.

## src Directory

It comes with a `./src/` directory includes js, sass and images folder. Each will help you organize and optimize your web development flow:

### Javascript

There is `./src/js/` folder in ./src/ folder which include two javascript files *a.js* & *b.js*. Gulp will concatinate all the js files in this folder, minify them, generate *.map* file and publish them to `./dist/js/app.js` file. Including single JavaScript file in your HTML aligns with best practices in modern web development, minifying your code and limiting HTTP requests is a huge performance enhancer.

For specific **ORDER** of js files concatination you need to provide the order in *gulpfile.babel.js* configuration jsOrder variable. It will then concatinate in that order.

### SASS

Sass is similary handled like Javascript. It will convert .scss files to `./dist/css/` directory. It minify the files, preproccess the sass and generate map files.

I included `_normalize.scss` for consistent styles across browsers.

### HTML & Images

HTML files in `./src/` directory will be exactly coppied to `./dist` keeping their directory structure and it also minify the HTML for better performance. 

Images will optimized and copied from `./src/images` to `./dist/images`. It will help you load websites faster.

## Issues

if you have any issues. Please put the [issues](https://github.com/jazibsawar/gulp-boilerplate/issues) here on github. I will try to resolve that as early as possible.

## Goals

I will be adding PWA & Service Worker support in near future. So all of you can take advantage of modern browser features.

## Thank you!