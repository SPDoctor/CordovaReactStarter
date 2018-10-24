# CordovaReactStarter
Starter project for building a Cordova cross-platform mobile application using React and TypeScript

This starter project is using React and TypeScript and Webpack to bundle and minify files.

The source code for your application is in the /src directory. A /www directory will be created by Webpack, and will eventually become the web application that is rendered in your mobile app. I would advise against putting any source files in the /www folder, or including it in source control.

# Getting started

1. Make sure you have NodeJS, etc. installed on your development machine.
1. Install any build tools you may need, e.g. Visual Studio 2017 (free community edition will do).
1. I recommend installing Yarn, although the built-in NPM will do (*npm install -g yarn*).
1. Install Cordova CLI (*yarn global add cordova-cli*, or *npm install -g cordova-cli* if you don't have yarn)  ??????
1. Clone the repo to your local machine (click on the green Clone button, copy the url and then git clone.
1. In your command window, navigate to the repo directory and run *yarn install*.
1. To check the web site builds, run the command *yarn run build* (or *npm run build*).
1. You can verify that Webpack has generated a website in the /www directory.
1. To run the solution as a web application, run the command *yarn start* (or *npm start*).
1. Make a change to a source file, for example /src/components/hello.tsx and notice that the browser page updates.
1. Install the cordova browser platform (*cordova platform add browser*).
1. Verify that Cordova is working by running the command *cordova run browser*.
1. Note that the page in the browser is almost the same as before but there is no live update in this case.
1. Run the commands to add the platforms you want to support (e.g. *cordova platform add android*).
1. If you want to run on a device, make sure it is connected, otherwise you will get an emulator.
1. Build and run the platform (e.g. *cordova run android*).
1. To run specifically on the device, run *cordova run android --device*, etc. See Cordova [documentation](https://cordova.apache.org/docs/) for details.

# Features

The starter app has a few features that you will need in a real mobile app. The scripts and CSS files in the /src folder are bundled together by Webpack and appear in the /www folder. The Webpack build process also writes other assets like image files to the /www folder, but only if Webpack sees them being used.

There is a logo image in the source directory. Notice that the logo is specifically 'required' in index.tsx to ensure that Webpack includes it in it's output files.

Resources like splash sceens are stored in the /res directory and are included in the output platform packages by Cordova - they are outside the scope of the web application.

There is a merges folder, the contents of which are automatically deployed on a platform-by-platform basis by Cordova. In there we have a sample CSS file which changes the colour of the application page heading depending on the platform. Because this CSS file is loaded before the CSS embedded by Webpack, we have to use the !important qualifier to make sure these rules get applied.

The application is entirely written in TypeScript. Index.tsx is the applcation start-up page and it renders a single React component in the div with the id 'app' in the index.html page.

# Developing

I recommend that you run *yarn start* while developing. You will get a view of your application in the browser. You can use browser tools in most browsers to simulate a mobile-size display port and debug the application. The advantage of developing just as a web site is that you will see the page automatically update as you make changes, so it is a very fast development turnaround.

When you are ready to test the application as a Cordova app, you can initially use the *cordova run browser* command, although this doesn't really give you much advantage over just running your app as a web site. I prefer to use *cordova run windows* (first you have to do *cordova platform add windows*), as this runs it as an application on my Windows development machine. Another option is to connect a physical Android device that has USB debugging enabled. The command *cordova run anrdoid* should pick the device by default. If you want to be sure use the command *cordova run anrdoid --device*. If it doesn't find the device it will try to launch in an emulator, which is very slow.

Remember to do a Webpack build as well as a Cordova build when you make changes. You might want to add another command to your package.json file to make this easier, depending on what you are trying to do.

# Distributing

When you want to deploy tha application you will want to do a production build with webpack (*yarn webpack build --production*). You will notice that this produces a much more compact (minified) set of files in the /www directory which will be better for code distribution, as well as giving a slightly higher barrier to anyone who is interested in reverse-engineering your code. Then you will use production settings, for example *cordova build android --release *. See the Cordova [documentation](https://cordova.apache.org/docs/) for more details on arguments to the build command. The resulting package file (e.g. .apk file for Android) can be submitted to the appropriate app store.
