# vscode-typescript-liteserver-boilerplate
**Starter project for serving-up a vanilla TypeScript app via lite-server, with debugging and automatic compilation/browser reload enabled**

## Prerequisites ##
- VSCode - https://code.visualstudio.com/docs/?dv=win
- VSCode Debugger For Chrome Extension - https://github.com/Microsoft/vscode-chrome-debug
- Node.js - https://nodejs.org/en/download/
- TypeScript - "npm install -g typescript@next"

## Running The Server ##
1. Press [CTRL]+[SHIFT]+[B]
2. Press [`]+[T] and type "npm start" in the terminal 
3. Press [F5] to open Chrome for debugging 

## Notes ##
- The .gitignore file is configured to ignore *.js and *.js.map files.
- Only tested on Windows 10, where Visual Studio 2015 had previously been installed.  
- TypeScript must be installed with npm even if its already been installed by a full version of Visual Studio.  Otherwise the tsc.exe watch [-w] argument will fail

## Related Documentation ##
- tasks.json documentation: https://go.microsoft.com/fwlink/?LinkId=733558
- package.json documentation:  https://docs.npmjs.com/files/package.json
- tsconfig.json documentation: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

## Roadmap / Wishlist ##
- Execute **npm start** as part of the build tasks
- Add config file for lite-server to select alternate port
- Add some meaningful tests
