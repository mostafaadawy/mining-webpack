<br />
<p align="center">
  <a href="https://github.com/github_username/repo_name">
     <img src="https://user-images.githubusercontent.com/43582900/138351772-40bbbd25-9a97-4c29-b999-ca6db47447ac.png" alt="Logo" >
  </a>

  <h3 align="center">Evaluate a news article with NLP </h3>

  <p align="center">
    Project Description
    
</p>

This project is simply aweb application to evaluate a news article with Natural Language Processing, where it is based api request from https://www.meaningcloud.com/, that make some anylises based deeep learning. itis used in conjuction with webpack bluggins and its configuration files that configure both developer and production mode. to have a light wight app that can be effecintly work on serevers  and  also can be used in developer mode thanks to developer mode configuration file. Next a simple movie that shows the working wep app.



<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
<ol>
<li><a href="#about-this-project">About this project</a></li>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#how-to-install">How to install</a></li>
<li><a href="#dependencie">Dependencies</a></li>
<li><a href="#design-considerations">Design Considerations</a></li>
<li><a href="#design-methodology ">Design Methodology </a>
 <ul>
    <li><a href="#server">Server</a></li>
		<li><a href="#client">Client</a></li>
		<li><a href="#_test_">_Test_</a></li>
    <li><a href="#dest">Dest</a></li>
    <li><a href="#other-files">Other Files</a></li>
 </ul>
</li> 
<li><a href="#styling-cSS">Styling CSS</a></li>
<li><a href="#important-code-snippets">Important Code Snippets</a></li>
<li><a href="#test">Test</a><li>
<li><a href="#udacity-review-and-modifications">Udacity Review and Modifications</a></li>
<li><a href="#udacity-review-Project-acceptance">Udacity Review Project Acceptance</a></li>
<li><a href="#contact">Contact</a></li>
<li><a href="#refrenceces">Refrenceces</a></li>
</ol>
</details>

## About This Project

This project is a requirement for the free FWD-UDACITY Advanced Front-End Web Development Nanodegree Program. Its implementation criteria is restricted and wrapped with the described rules from this program’s project According to the [rubric](https://review.udacity.com/#!/rubrics/2668/view) reference. Another work frame that we are followed was the [starter](https://github.com/udacity/fend/tree/refresh-2019) project which include some incomplite functions and files, so we should set the missed functions and logics suuch as completeing the webpack configuration files and fetching api requestest. According to the course the very correlated base project introduced by the tutor of the course was [Fend Webpack Content](https://github.com/udacity/fend-webpack-contentp) and [Fend webpack sass](https://github.com/udacity/fend-webpack-sass) 

## Prerequisites 
i recommend for that types of project to stick with only the applied  `package.json` file. where webpack and its dependencies have a sharpe changes between versions, so maybe if we install package as follows we will get recent packages which maybe 99% not working tofther, my recomendation to remove `json.lock` and `module folder` and `dest folder`  then run npm install on the given json file.

## How to install
Just begging by cloning our project `mining-webpack` then install and start it, note that we must have your own subscribtion key, you can get it from [meaningcloud](https://www.meaningcloud.com/) and to put it in `.env` file 
```sh
API_KEY=**************************
```
then 
```sh
git clone https://github.com/mostafaadawy/wouldYou.git
npm install 
npm run build-prod
npm run build-dev
npm run start
```

## Dependencies
Dependencies are just default packages that are required in same applications that are based `webpack plugins` and `loaders`. packages are installed using npm or added using yarn and the following steps show you the installation process step by step, in case you don’t want to use our json which is not recommended where json conations the versions that was compatible to each other. 

*	js converter or loader:
```sh
npm i -D @babel/core @babel/preset-env babel-loader
``` 
*	inline css loaders to convert and collect css files
```sh
npm i -D style-loader node-sass css-loader sass-loader
``` 
*	using this pluging make no need to manully delet `destribution folder` or `dest` folder which containes converted optimized minified files 
```sh
npm i -D clean-webpack-plugin
```
*	that plugin createds the html file that will contain the output 
```sh
npm i -D html-webpack-plugin
```
*	this is the pluging that optimizes the css repeated and remove unwanted css to reduce its size producing the minified css
```sh
npm i -D mini-css-extract-plugin
```

*	other optimization webpack plugins

```sh
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```

* to make http equest we can use fetch in normal modern js while express alternative is axios
```sh
yarn add axios
```
*	to parse data from json
```sh
yarn add body-parser
```
*	we have to add the cors function to be used with express server
```sh
yarn add cors
```
*	this package is used to get dta from .env file
```sh
yarn add dotenv
```
*	install express server
```sh
yarn add express
```
*	install webpack
```sh
yarn add webpack 
```
*	install provides a flexible set of commands for developers to increase speed when setting up a custom webpack project. As of webpack v4, webpack is not expecting a configuration file, but often developers want to create a more custom webpack configuration based on their use-cases and needs.[webpack-cli](https://snyk.io/advisor/npm-package/webpack-cli)
```sh
yarn add webpack-cli
```
*	to allow optimizing images where not only this or other packages for loader or plugin has its effect except after adding it in the config file
```sh
yarn add file-loader
```
*	for test _test_ files and discribe it
```sh
yarn add -dev jest
```

## Design Methodology 

to understand well what is going on here we need to define the target, so our target mainly is to create a wepsapp that is used AI to analysis some text or voice or whatever using APIs with external site, as first objective but the main objective is to optimize that site, to have an efficent shaked optimized minified files to be affecintly used in server where size and speed are the main objective, without missing our developemnt poweres from debuging and modularity, and to achive this contradicted objectives, we can use webpack that is can be consider as amanger buildtools that is based using other tools to build and then convert all js different packages and versions through loader tools to row js and compress it to one miminfied filie using webpack plugins , the same for css and link all to html, beside other loaders for other assests, or plugins for optimization  and cleaning and building the server edition. upon that explaination , we have cliengt folder containes original files , and dest i.e. destribution folder for the result folder after webpack even after optimization or for prod mod or even in developer mod, also we have server folder that contaisin our esxpress server that deals with our dest folder just as before emulation servers in other projects but with only one notice that it is used with the produced version, also we have some other files such as json, webpack configuration files and cmd for start command beside .env, last tfolder is the test folder that contains test files to test our js files. werver worker pluging is used to  save a cached version from our app to work on it offline. next subsections explains each folder content.  

### Server
server only contains one file that has some http requests get and post

### Client
contains all the files js that css  or sass and view that is html , beside index.js file that imports all  js styles images  and exports functions that is used in html so that using that file as and entry files that join all files in the webpack configuration in addition to that to complete joining and make the scope of the objects and function of visiable inside html through library variable and librarry target Client object as we see it inside html, briefly index.js inside client folder is an entry point that is used by the webpack configuration file from that file we decide which file or even line code is imprtant or dependent and which is redendancy to remove it in minified files.

### _Test_
conatines files for each function to be tested usually we wet what we expectg and call the function and compare the result
### Dest
no dout any manula changes here is descarded where this folder is produced as an output from the webpack, the very important note herer is that the pathes for the `assests must be configured with respect to the structure of dest folder not the client folder`
### Other Files
`packages.json` as discribed before is very important especially the `scripts` section that discribes  start and debug files. `webpack.dev.js`, `webpack.prod.js`, describes the entry point, the loaders and the pligins and if we used serverworker, we could find its call here, it is normally begins with requireing the external ackage which matches import in recent js, then instainsiating the module and then we use it as discribed in its data sheet. `.env` file containes the private data so we add it to module folder and dest folder to getignore file. `Start Proj.doc` file that enables us to start all build and server server in one click.

## Styling CSS

all css files or sass files are customed maybe inspired from some ideas as in refrences but all is customed


## Important Code Snippets
*  the most imporatnt files or codes will be listed in order, beging with json file that conatains matched versions of dependecies
```sh
{
  "name": "evaluate-news-nlp",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "start": "node src/server/index.js",
    "build-prod": "webpack --config webpack.prod.js",
    "build-dev": "webpack-dev-server  --config webpack.dev.js --open"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "axios": "^0.21.1",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "webpack": "^4.35.3",
    "webpack-cli": "^3.3.5",
    "file-loader": "^6.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.13.10",
    "@babel/preset-env": "^7.13.10",
    "babel-loader": "^8.2.2",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^4.3.0",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^26.6.3",
    "mini-css-extract-plugin": "^1.3.9",
    "node-sass": "^5.0.0",
    "optimize-css-assets-webpack-plugin": "^5.0.4",
    "sass-loader": "^10.0.3",
    "style-loader": "^2.0.0",
    "terser-webpack-plugin": "^1.4.5",
    "webpack-dev-server": "^3.7.2",
    "workbox-webpack-plugin": "^6.1.1"
  }
}

```
*  webpack devlopement build `webpack.dev.js` file 
```sh
const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
              test: /\.scss$/,
              use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: "file-loader?name=./assets/images/[name].[ext]",
            },
          ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}

```
*   webpack production build `webpack.prod.js` file 
```sh
const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: "./src/client/index.js",
  mode: "production",
  output: {
    libraryTarget: "var",
    library: "Client",
  },
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: "file-loader?name=./assets/images/[name].[ext]",
      },
    ],
  },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new WorkboxPlugin.GenerateSW(),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
    ]
}

```
*  example of _test_ folder test files `testApiCall.spec.js`
```sh
import { apiCall } from "../src/client/js/apiCall";
describe("Testing API Call functionality", () => {
  test("Making sure apiCalltoBeDefined", () => {
    expect(apiCall).toBeDefined();
  });
});

  }
```

* `index.js` entry point file that join files for webpack

```sh
import { apiCall } from "./js/apiCall";
import { nameChecker } from "./js/nameChecker";
import { ctrlElement } from "./js/ctrlElement";
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./images/logo.png";
import "./images/bg.gif";
import "./images/bg1.gif";
import "./images/favicon.png";

  
export { apiCall };
export { nameChecker };
export {ctrlElement}

```
*  `Client` where it is defined in webpack config file is used to make scope of visibility to ityts function objects inside html insteade of using cdn for every script or style

```sh
<button id="apiCallBtn" type="submit"  onclick="return Client.apiCall(event)">Get CLoud Analysis</button>
```
*  asynchrounous call to api or http request in normal js
```sh
 const cloudApi = await fetch(`http://localhost:8081/scan/${ApiText}`);
      const CloudResponse = await cloudApi.json();
```
*  asynchrounous call to api or http request with express
```sh
app.get("/scan/*", async (req, res) => {
  try {
    CLOUDURL = "https://api.meaningcloud.com/sentiment-2.1"; 
    myEnvKey = process.env.API_KEY;
    const txt = req.params[0];
    
    const CloudRES = await axios.get(`${CLOUDURL}?key=${myEnvKey}&txt=${txt}&lang=en`);
    const { agreement, subjectivity, confidence, irony } = CloudRES.data;
    res.send({ agreement, subjectivity, confidence, irony });
  } catch (err) {
    res.status(500).send("Error:" + err);
    console.log({" ::: CATCHED ERROR :::":err});
  }
});
app.listen(8081, function () {
  console.log("Server port 8081!");
});
```
* from index in server get page 
```sh
 app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});
```

*  all index server
```sh
const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const app = express();

app.use(express.static("dist"));
const cors = require("cors");
app.use(cors());
const axios = require("axios");

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/scan/*", async (req, res) => {
  try {
    CLOUDURL = "https://api.meaningcloud.com/sentiment-2.1"; 
    myEnvKey = process.env.API_KEY;
    const txt = req.params[0];
    
    const CloudRES = await axios.get(`${CLOUDURL}?key=${myEnvKey}&txt=${txt}&lang=en`);
    const { agreement, subjectivity, confidence, irony } = CloudRES.data;
    res.send({ agreement, subjectivity, confidence, irony });
  } catch (err) {
    res.status(500).send("Error:" + err);
    console.log({" ::: CATCHED ERROR :::":err});
  }
});
app.listen(8081, function () {
  console.log("Server port 8081!");
});

```
*  you can start allover the app just one click on that cmd `Start Proj.cmd` file that contains commands for building and start server
```sh
start "" npm run build-prod
start "" npm start
start "" npm run build-dev
```
## Test
for runing the tests that is based jest just
```sh
npm run test
```
* the result
```sh
$ npm run test

> evaluate-news-nlp@1.0.0 test C:\wamp64\www\flutter react projects\webpack\mining-webpack
> jest

 PASS  _test_/testNameChecker.spec.js
 PASS  _test_/testApiCall.spec.js

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.166 s
Ran all test suites.
```

## Udacity Review and Modifications



## Udacity Review Project Acceptance



## Contact

* https://github.com/mostafaadawy
* https://web.facebook.com/mostafa.adawy.96/
* mailto:mostafa_adawy@ymail.com
* https://www.linkedin.com/in/%E2%80%ABmostafa-adawy%E2%80%AC-%E2%80%AB-11b937125/

## Refrenceces 
* [Rubric](https://review.udacity.com/#!/rubrics/2668/view)
* [Udacity Fend Content](https://github.com/udacity/fend-webpack-content)
* [HeroKu Deploy Sites Hosting](https://www.heroku.com/)
* [NetFly Deploy Sites and Apps](https://www.netlify.com/)
* [Jest for test js start](https://jestjs.io/docs/getting-started)
* [Jest for test matchers](https://jestjs.io/docs/using-matchers)
* [Jest for test asynch](https://jestjs.io/docs/asynchronous)
* [Jest test](https://www.valentinog.com/blog/jest/)
* [meaningcloud](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/console)
* [Jest IO](https://jestjs.io/)
* [WebPack Fend Start Proj](https://github.com/udacity/fend/tree/refresh-2019)
* [Aylen API](https://aylien.com/)
* [WEBPACK CODE SPLITTING](https://webpack.js.org/guides/code-splitting/)
* [Webpack tree shaking](https://webpack.js.org/guides/tree-shaking/)
* [WebPack Advanced](https://github.com/markerikson/react-redux-links/blob/master/webpack-advanced-techniques.md)
* [NetFly Webpack](https://www.netlify.com/blog/2017/01/03/4-key-concepts-of-webpack/)
* [Serveice worker Webpack](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack)
* [Dont Repeat yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* [WebPack Guid](https://webpack.js.org/guides/production/)
* [Public APIs](https://apipheny.io/free-api/#apis-without-key)
* [online Image](https://online-image-resizer.com/)
* [Codepen wave text CSS](https://codepen.io/qrac/pen/MRPJLB)
* [Treat images for web](https://www.cutout.pro/?vsource=google102g&gclid=EAIaIQobChMI787ZmJDu8wIVSYfVCh2VsAZdEAAYASAAEgI6b_D_BwE)
* [Treat images for web1](https://www.cutout.pro/remove_background.html#/)
* [ICON CONVERT](https://icoconvert.com/)