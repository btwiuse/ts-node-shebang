import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

export function resolveRelpath(rel: string): string{
	return path.resolve(__dirname, rel).toString()
}

export function readText(ful: string): string{
	return fs.readFileSync(ful, 'utf8')
}

export function requireJSON(ful: string) {
	return JSON.parse(readText(ful));
}

export function requireYAML(ful: string) {
	return YAML.parse(readText(ful));
}

export function loadObject(rel: string) {
	return requireYAML(resolveRelpath(rel));
}

export function loadText(rel: string) {
	return readText(resolveRelpath(rel));
}

export function sleep(ms: number): Promise<void>{
	return new Promise(resolve=>setTimeout(resolve, ms))
}

