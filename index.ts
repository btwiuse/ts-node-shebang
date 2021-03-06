#!/usr/bin/env ts-node

import program, { Command } from "commander";
import Package from "./package.json";
import {
  showLatest,
  showHelp,
  demoWhich,
  demoWhere,
  demoMain,
  demoArgv,
  demoArgs,
  demoDump,
  demoEcho,
  demoSleep,
} from "./actions";
import figlet from "figlet-promised";

async function main(): Promise<void> {
  program.name(Package.name);
  program.version(Package.version);
  program.description(`This is a template project that demonstrates how to distribute
executable TypeScript snippets on npmjs.org without compilation to JavaScript.

Please go to https://github.com/btwiuse/ts-node-shebang for instructions`);
  program
    .command("latest")
    .description("show latest version")
    .action(() => {
      showLatest();
    });
  program.addHelpText("before", await figlet("ts-node-shebang"));
  program
    .command("args")
    .description("show program.args")
    .action(() => {
      demoArgs(program.args);
    });
  program
    .command("which")
    .description("show self filepath")
    .action(() => {
      demoWhich();
    });
  program
    .command("main")
    .description("show main filepath")
    .action(() => {
      demoMain();
    });
  program
    .command("where")
    .description("show self dirname")
    .action(() => {
      demoWhere();
    });
  program
    .command("argv")
    .description("show process.argv")
    .action(() => {
      demoArgv();
    });
  program
    .command("dump")
    .description("dump self content")
    .action(() => {
      demoDump();
    });
  program
    .command("echo")
    .description("echo args")
    .option("-n, --no-newline", "exclude trailing new line")
    .arguments("[string...]")
    .action((args, opts, command) => {
      // console.log('args', args);
      // console.log('opts', opts);
      let line = args.join(" ");
      if (opts.newline) {
        console.log(line);
      } else {
        process.stdout.write(line);
      }
    });
  program
    .command("sleep")
    .description("wait a few seconds")
    .arguments("[number]")
    .action((args, opts, command) => {
      let sec = 1;
      if (args) {
        sec = args[0];
      }
      demoSleep(sec);
    });
  program.parse(process.argv);
}

void main();
