#!/usr/bin/env ts-node

import fs from "fs";
import path from "path";
import { loadText, sleep } from "./utils";
import fetch from "node-fetch";
import Package from "./package.json";

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

export async function showLatest() {
  const resp = await fetch(
    "https://registry.npmjs.org/-/package/@btwiuse/ts-node-shebang/dist-tags"
  );
  const body = await resp.json();
  console.log("latest version:", body.latest);
}

export function showHelp() {
  console.log("list of demo sub commands:");
  for (let [i, arg] of ACTIONS.entries()) {
    console.log("-", arg);
  }
  console.log(
    "Please go to https://github.com/btwiuse/ts-node-shebang for instructions"
  );
}

export function demoMain() {
  console.log(process.argv[1]);
}

export function demoWhere() {
  console.log(__dirname);
}

export function demoWhich() {
  console.log(__filename);
}

export function demoDump() {
  console.log(loadText(__filename));
}

export function demoEcho(args: string[]) {
  let filename = process.argv[1];
  console.log(args.join(" "));
}

export function demoArgs(args: string[]) {
  console.log("program.args:");
  for (let [i, arg] of args.entries()) {
    console.log(i, arg);
  }
}

export function demoArgv() {
  console.log("process.argv:");
  for (let [i, arg] of process.argv.entries()) {
    console.log(i, arg);
  }
}

export async function demoSleep(sec?: number = 1) {
  console.log(`${new Date()} sleep for ${sec} sec`);
  await sleep(sec * 1000);
  console.log(`${new Date()} recovered from sleep`);
}
