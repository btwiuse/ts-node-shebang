#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';

const SUBCMD = [
	"argv",
	"dump",
	"echo",
	"sleep",
	"help",
	"version",
];

function showVersion(){
	let pkgjson = path.resolve(__dirname, 'package.json').toString();
	let pkginfo = JSON.parse(fs.readFileSync(pkgjson, 'utf8'));
	console.log(pkginfo.version);
}

function showHelp(){
	console.log('list of demo sub commands:');
	for (let [i, arg] of SUBCMD.entries()) {
		console.log('-', arg);
	}
	console.log('Please go to https://github.com/btwiuse/ts-node-shebang for instructions');
}

function demoDump(){
	let filename = process.argv[1];
	let content = fs.readFileSync(filename, 'utf8')
	console.log(`script (${filename}) content:`);
	console.log(content);
}

function demoEcho(args: string[]){
	let filename = process.argv[1];
	console.log(args.join(' '));
}

function demoArgv(){
	console.log('process.argv:');
	for (let [i, arg] of process.argv.entries()) {
		console.log(i, arg);
	}
}

function delay(ms: number): Promise<void>{
	return new Promise(resolve=>setTimeout(resolve, ms))
}

async function demoSleep(sec?: number = 1){
	console.log(`${new Date()} sleep for ${sec} sec`);
	await delay(sec * 1000);
	console.log(`${new Date()} recovered from sleep`);
}

async function main(): Promise<void>{
	switch (process.argv[2]) {
	case 'argv':
		demoArgv();
		break;
	case 'dump':
		await demoDump();
		break;
	case 'echo':
		await demoEcho(process.argv.slice(3));
		break;
	case 'sleep':
		await demoSleep(process.argv[3]);
		break;
	case 'version':
	case '-v':
	case '--version':
		showVersion();
		break;
	case 'help':
	case '-h':
	case '--help':
	default:
		showHelp();
	}
}

void main();
