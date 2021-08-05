#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';
import { loadText } from './utils';
import fetch from 'node-fetch';
import Package from './package.json';

if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}

export const CMDS = [
	"argv",
	"dump",
	"echo",
	"sleep",
	"help",
	"version",
];

export async function showVersion(){
	console.log('current version:', Package.version);
	await showLatest();
}

export async function showLatest(){
	const resp = await fetch('https://registry.npmjs.org/-/package/@btwiuse/ts-node-shebang/dist-tags');
	const body = await resp.json();
	console.log('latest version:', body.latest);
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
