#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';
import { loadObject, loadText } from './utils';

export const CMDS = [
	"argv",
	"dump",
	"echo",
	"sleep",
	"help",
	"version",
];

export function showVersion(){
	let pkginfo = loadObject('package.json');
	console.log(pkginfo.version);
}

export function showHelp(){
	console.log('list of demo sub commands:');
	for (let [i, arg] of CMDS.entries()) {
		console.log('-', arg);
	}
	console.log('Please go to https://github.com/btwiuse/ts-node-shebang for instructions');
}

export function demoDump(){
	console.log(loadText(__filename));
}

export function demoEcho(args: string[]){
	let filename = process.argv[1];
	console.log(args.join(' '));
}

export function demoArgv(){
	console.log('process.argv:');
	for (let [i, arg] of process.argv.entries()) {
		console.log(i, arg);
	}
}

export async function demoSleep(sec?: number = 1){
	console.log(`${new Date()} sleep for ${sec} sec`);
	await sleep(sec * 1000);
	console.log(`${new Date()} recovered from sleep`);
}
