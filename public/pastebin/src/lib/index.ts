import themeSettings from './themeSettings';
import { newPaste } from './pastes';

export { themeSettings, newPaste };

export function generateRandomString(length: number) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

export let languages: string[] = [
	'python',
	'javascript',
	'typescript',
	'java',
	'c',
	'cpp',
	'rust',
	'svelte',
	'abap',
	'actionscript-3',
	'ada',
	'angular-expression',
	'angular-html',
	'angular-inline-style',
	'angular-inline-template',
	'angular-template',
	'angular-template-blocks',
	'angular-ts',
	'apache',
	'apex',
	'apl',
	'applescript',
	'ara',
	'asciidoc',
	'asm',
	'astro',
	'awk',
	'ballerina',
	'bat',
	'beancount',
	'berry',
	'bibtex',
	'bicep',
	'blade',
	'cadence',
	'clarity',
	'clojure',
	'cmake',
	'cobol',
	'codeowners',
	'codeql',
	'coffee',
	'common-lisp',
	'cpp-macro',
	'crystal',
	'csharp',
	'css',
	'csv',
	'cue',
	'cypher',
	'd',
	'dart',
	'dax',
	'desktop',
	'diff',
	'docker',
	'dream-maker',
	'elixir',
	'elm',
	'emacs-lisp',
	'erb',
	'erlang',
	'fennel',
	'fish',
	'fluent',
	'fortran-fixed-form',
	'fortran-free-form',
	'fsharp',
	'gdresource',
	'gdscript',
	'gdshader',
	'genie',
	'gherkin',
	'git-commit',
	'git-rebase',
	'gleam',
	'glimmer-js',
	'glimmer-ts',
	'glsl',
	'gnuplot',
	'go',
	'graphql',
	'groovy',
	'hack',
	'haml',
	'handlebars',
	'haskell',
	'haxe',
	'hcl',
	'hjson',
	'hlsl',
	'html',
	'html-derivative',
	'http',
	'hxml',
	'hy',
	'imba',
	'ini',
	'jinja',
	'jinja-html',
	'jison',
	'json',
	'json5',
	'jsonc',
	'jsonl',
	'jsonnet',
	'jssm',
	'jsx',
	'julia',
	'kotlin',
	'kusto',
	'latex',
	'less',
	'liquid',
	'log',
	'logo',
	'lua',
	'make',
	'markdown',
	'markdown-vue',
	'marko',
	'matlab',
	'mdc',
	'mdx',
	'mermaid',
	'mojo',
	'move',
	'narrat',
	'nextflow',
	'nginx',
	'nim',
	'nix',
	'nushell',
	'objective-c',
	'objective-cpp',
	'ocaml',
	'pascal',
	'perl',
	'php',
	'plsql',
	'po',
	'postcss',
	'powerquery',
	'powershell',
	'prisma',
	'prolog',
	'proto',
	'pug',
	'puppet',
	'purescript',
	'qml',
	'qmldir',
	'qss',
	'r',
	'racket',
	'raku',
	'razor',
	'reg',
	'regexp',
	'rel',
	'riscv',
	'rst',
	'ruby',
	'sas',
	'sass',
	'scala',
	'scheme',
	'scss',
	'shaderlab',
	'shellscript',
	'shellsession',
	'smalltalk',
	'solidity',
	'soy',
	'sparql',
	'splunk',
	'sql',
	'ssh-config',
	'stata',
	'stylus',
	'swift',
	'system-verilog',
	'systemd',
	'tasl',
	'tcl',
	'terraform',
	'tex',
	'toml',
	'tsv',
	'tsx',
	'turtle',
	'twig',
	'typespec',
	'typst',
	'v',
	'vala',
	'vb',
	'verilog',
	'vhdl',
	'viml',
	'vue',
	'vue-directives',
	'vue-html',
	'vue-interpolations',
	'vyper',
	'wasm',
	'wenyan',
	'wgsl',
	'wikitext',
	'wolfram',
	'xml',
	'xsl',
	'yaml',
	'zenscript',
	'zig'
];