- ## *Watch Mode*
### Instead of compiling once, you instruct it to watch the file for changes and recompile upon change detection.
`tsc file_name.ts -w file_name.ts`
- or 
` tsc --watch file_name.ts`

- ## *Multiple TS Files*
### If you need to compile multiple files in a single directory, running `tsc` alone, will compile any files found with `.ts` extension. 
### Similarly `tsc -w` will watch for changes and recompile when changes are made to files with the .ts file extension in the current directory.

- ## *Choosing Which Files Typescript should compile -- `tsconfig.json`*
```json
"compilerOptions":
    "files": [
        "filename.ts", 
        "otherFile.ts",
    ],
```

- ## *Another Top Level Option for the tsconfig settings is `"include":["_", "_"]` and `"exclude":["_", "_"]`*

- ## *Directing where the compiled JS files should appear `"outDir":`*

- ## *JS version ES5 -> ES6(ES2015) `"target": "es2015"`*

- ## *Enabling additional type checks and strictness in the TS rules for tighter stringency. `"strict": "true"`, it defaults to `"true"`.* 
  - There is also `"strictNullCheck"`, etc, that can customize different options in the strictness of the ts linter.