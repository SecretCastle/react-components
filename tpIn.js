const readline = require('readline')
const fs = require('fs')
const { execSync } = require('child_process');


console.log('===============welcome to template============');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>> what you want to build ? Vue(V) or React(R) or 还原默认配置(B) \n'
})

let addDependencies = ``;

rl.prompt();

rl.on('line', (line) => {
    let jsontxt;
    switch (line.trim().toLowerCase()) {
        case 'vue':
            addDependencies = `,"vue": "^2.4.2",
                "vue-loader": "^13.0.2",
                "vue-router": "^2.7.0",
                "vue-template-compiler": "^2.4.2",
                "vuex": "^2.3.1"
            `
            jsontxt = getJSONText(addDependencies)
            createFile(jsontxt)
            break;
        case 'v':
            addDependencies = `,"vue": "^2.4.2",
                "vue-loader": "^13.0.2",
                "vue-router": "^2.7.0",
                "vue-template-compiler": "^2.4.2",
                "vuex": "^2.3.1"
            `

            jsontxt = getJSONText(addDependencies)
            createFile(jsontxt)
            break;
        case 'react':
            addDependencies = `,"react": "^15.6.1",
                "react-dom": "^15.6.1",
                "babel-plugin-transform-class-properties": "^6.24.1"
            `
            jsontxt = getJSONText(addDependencies)
            createFile(jsontxt)
            break;
        case 'r':
            addDependencies = `,"react": "^15.6.1",
                "react-dom": "^15.6.1",
                "babel-plugin-transform-class-properties": "^6.24.1"
            `
            jsontxt = getJSONText(addDependencies)
            createFile(jsontxt)
            break;
        case 'b':
            addDependencies = ``;
            createFile(getJSONText(addDependencies), 'back')
            console.log('已还原成默认文件');
            rl.close()
            break;
        default:
            console.log('请输入正确的参数,么么哒~~')
            rl.prompt()
            break;
    }

})


function getJSONText(linetype) {
    let publicJson = `
        {
            "name": "template",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "dev": "webpack-dev-server --env=dev --progress --profile --colors --hot --inline",
                "build": "webpack --env=prod --progress --profile --colors",
                "start": "node tpIn.js"
            },
            "author": "",
            "license": "ISC",
            "devDependencies": {
                "babel-core": "^6.23.1",
                "babel-eslint": "^7.1.1",
                "babel-loader": "^6.3.2",
                "babel-preset-es2015": "^6.22.0",
                "babel-preset-react": "^6.23.0",
                "babel-preset-stage-3": "^6.22.0",
                "css-loader": "^0.26.2",
                "eslint": "^3.17.0",
                "eslint-loader": "^1.6.3",
                "install": "^0.8.7",
                "style-loader": "^0.13.2",
                "webpack": "^2.2.1",
                "webpack-dev-server": "^2.4.1",
                "webpack-merge": "^4.1.0"
                ${addDependencies}
            }
        }
    `

    return publicJson
}


function createFile(txt, type) {
    if (type === 'back') {
        fs.writeFile('package.json', txt, (err) => {
            if (err) {
                throw err
            }
            rl.close()
        })
    } else {
        console.log('创建文件');
        fs.writeFile('package.json', txt, (err) => {
            if (err) {
                throw err
            }
            console.log('创建完成，请使用 npm install 安装依赖');
            rl.close()
        })
    }

}