#!/usr/bin/env ts-node

import { loadObject, loadText } from "./utils";
import {
  showVersion,
  showHelp,
  demoArgv,
  demoDump,
  demoEcho,
  demoSleep,
} from "./cmds";

async function main(): Promise<void> {
  switch (process.argv[2]) {
    case "argv":
      demoArgv();
      break;
    case "dump":
      demoDump();
      break;
    case "echo":
      demoEcho(process.argv.slice(3));
      break;
    case "sleep":
      await demoSleep(process.argv[3]);
      break;
    case "version":
    case "-v":
    case "--version":
      await showVersion();
      break;
    case "help":
    case "-h":
    case "--help":
    default:
      showHelp();
  }
}

void main();
