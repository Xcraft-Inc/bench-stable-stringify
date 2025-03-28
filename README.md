# Benchmark

- JSON.stringify (unstable)
- fast-json-stable-stringify
- fast-stable-stringify
- faster-stable-stringify
- fastest-stable-stringify
- json-stable-stringify
- safe-stable-stringify
- fast-safe-stringify

## Run

```
npm i
node --allow-natives-syntax index.js
```

## The winner is

**safe-stable-stringify**

```
Node.js version: v20.19.0
Platform: linux x64
CPU Cores: 12 vCPUs | 31.3GB Mem

JSON.stringify (unstable)                     | ██████████████████████████████ | 66 687 ops/sec | 80 samples
fast-json-stable-stringify                    | █████████--------------------- | 19 306 ops/sec | 88 samples
fast-stable-stringify                         | ███████████------------------- | 23 466 ops/sec | 94 samples
faster-stable-stringify                       | █████████--------------------- | 19 500 ops/sec | 86 samples
fastest-stable-stringify                      | █████████--------------------- | 20 491 ops/sec | 80 samples
json-stable-stringify                         | ███████----------------------- | 14 787 ops/sec | 83 samples
safe-stable-stringify                         | █████████████████████--------- | 47 668 ops/sec | 85 samples
fast-safe-stringify                           | █████████████----------------- | 28 554 ops/sec | 89 samples

Compare outputs:
0c56a53c124fec4455842de836d4a3db915488a160e26cb0f8ed75886b4b504f JSON.stringify (unstable)
b0a4d43b5c872311371bd48ce5786215338d57cb5cc881839babf9da59b6b8ee fast-json-stable-stringify
b0a4d43b5c872311371bd48ce5786215338d57cb5cc881839babf9da59b6b8ee fast-stable-stringify
b0a4d43b5c872311371bd48ce5786215338d57cb5cc881839babf9da59b6b8ee faster-stable-stringify
b0a4d43b5c872311371bd48ce5786215338d57cb5cc881839babf9da59b6b8ee fastest-stable-stringify
b0a4d43b5c872311371bd48ce5786215338d57cb5cc881839babf9da59b6b8ee json-stable-stringify
b0a4d43b5c872311371bd48ce5786215338d57cb5cc881839babf9da59b6b8ee safe-stable-stringify
b0a4d43b5c872311371bd48ce5786215338d57cb5cc881839babf9da59b6b8ee fast-safe-stringify
```
