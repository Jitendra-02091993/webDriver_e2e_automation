<!-- Instal wdio
`npm init wdio .`

package.json
check `type`: `module`

tsconfig.json
check `"module": "ESNext"`
check `"resolveJsonModule": true`
add `"esModuleInterop":  true,`
change `"strict": false,`

wdio.conf.ts
check `project: "./tsconfig.json`
add `${process.cwd()}/test/features/**/*.feature`
add `./test/feature/step-definition/*.ts`

// extensions
1. vscode-icons
2. prettier - Code formatter
3. Path intellisense
4. npm intellisense
5. JavaScript (ES6) code snippets [clg is used from this extn]
6. Cucumber (Gherkin) full support
7. Code Runner
8. gitignore
9. DotENV
10. Surround with



// ---------- Sometime we get an error like this in order to resolve this hit this command in your terminal
"npm install wdio-chromedriver-service --save-dev" it will add the dev dependecies in package.json file like "wdio-chromedriver-service": "^8.1.1"
Error: Error: Failed to initilialise launcher service unknown: Error: Couldn't find plugin "chromedriver" service, neither as wdio scoped package "@wdio/chromedriver-service" nor as community package "wdio-chromedriver-service". Please make sure you have it installed!
-->
