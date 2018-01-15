'use strict';

require('./build/check-versions')();

const shelljs = require('shelljs');

const gulp = require('gulp');
const shell = require('gulp-shell');
const clean = require('gulp-clean');

process.env.NODE_ENV = 'production';

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require(process.cwd() + '/config');

const minimist = require('minimist');
const gutil = require('gulp-util');
const src = process.cwd() + '/src';
const assets = process.cwd() + '/dist';

const runSequence = require('run-sequence');

const options = require('./options.json');

//命令行参数配置
const argsOptions = {
    string: ['e', 'p', 't'],
    default: {
        e: 'production', //环境，可选值有【test】【production】
        p: 'android', //平台，只在t为mobile时有效，可选值有【android】
        t: 'webapp' //目标，可选参数有【mobile】【webapp】
    }
};

const args = minimist(process.argv.slice(2), argsOptions);

console.info(args);

const target = options.targets[args.t];
if(!target || !args.t){
    throw('目标' + args.t + '不存在');
}

const env = options.targets[args.t].env[args.e];
if(!env || !args.e){
    throw('环境' + args.e + '不存在');
}

let platform = 'android';
if(args.t == 'mobile'){
    platform = options.targets[args.t].platforms[args.p];
    if(!platform){
        throw('平台' + args.p + '不存在');
    }
}
process.env.target = args.t;

const webpackConfig = require(process.cwd() + '/build/webpack.prod.conf');

const tasks = {
    //默认任务
    'default': ['dev'],
    //开发模式
    'dev': shell.task([
        'webpack-dev-server --inline --progress --config build/webpack.dev.conf.js'
    ]),
    //清空dist文件夹
    'clean.dist': () => {
        gulp
            .src(assets)
            .pipe(clean());
    },
    //复制cordova文件夹到dist文件夹
    'copy.cordova': () => {
        gulp
            .src('cordova/**/*')
            .pipe(gulp.dest('dist'));
    },
    'cordova.build.android': () => {
        shelljs.cd('./dist');
        shelljs.exec('cordova build android --buildConfig=../build.json');
        shelljs.cd(__dirname);
    },
    'cordova.run.android': () => {
        shelljs.cd('./dist');
        shelljs.exec('cordova run android');
        shelljs.cd(__dirname);
    },
    'webpack.build': (done) => {
        let spinner = ora('正在打包，请稍后...');
        spinner.start();
        webpack(webpackConfig, (err, stats) => {
            spinner.stop();
            if (err) throw err;
            process.stdout.write(stats.toString({
                    colors: true,
                    modules: false,
                    children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
                    chunks: false,
                    chunkModules: false
                }) + '\n\n');
        
            if (stats.hasErrors()) {
                console.log(chalk.red('  Build failed with errors.\n'));
                process.exit(1);
            }
        
            console.log(chalk.cyan('  Build complete.\n'));
            console.log(chalk.yellow(
                '  Tip: built files are meant to be served over an HTTP server.\n' +
                '  Opening index.html over file:// won\'t work.\n'
            ));
            done();
        });
    },
    'run.android': () => {
        runSequence(
            'clean.dist',
            'copy.cordova',
            'webpack.build',
            'cordova.run.android'
        );
    },
    'build.android': () => {
        runSequence(
            'clean.dist',
            'copy.cordova',
            'webpack.build',
            'cordova.build.android'
        );
    },
    'build.webapp': () => {
        runSequence(
            'clean.dist',
            'webpack.build'
        );
    }
};

//将任务添加到gulp中
for(let name in tasks){
    gulp.task(name, tasks[name]);
}
