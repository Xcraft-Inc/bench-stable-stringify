const fs = require("node:fs");
const path = require("node:path");
const { createHash } = require("node:crypto");
const { Suite, chartReport } = require("bench-node");

const fastJsonStableStringify = require("fast-json-stable-stringify");
const fastStableStringify = require("fast-stable-stringify");
const fasterStableStringify = require("faster-stable-stringify");
const fastestStableStringify = require("fastest-stable-stringify");
const jsonStableStringify = require("json-stable-stringify");
const safeStableStringify = require("safe-stable-stringify");
const fastSafeStringify = require("fast-safe-stringify").stableStringify;

const suite = new Suite({
  reporter: chartReport,
});

const options = {
  repeatSuite: 1,
  minSamples: 100,
};

const usersJson = fs.readFileSync(path.join(__dirname, "users.json"));
const productsJson = fs.readFileSync(path.join(__dirname, "products.json"));
const transactionsJson = fs.readFileSync(
  path.join(__dirname, "transactions.json")
);

const users = JSON.parse(usersJson);
const products = JSON.parse(productsJson);
const transactions = JSON.parse(transactionsJson);

const stringifiers = [
  ["JSON.stringify (unstable)", JSON.stringify],
  ["fast-json-stable-stringify", fastJsonStableStringify],
  ["fast-stable-stringify", fastStableStringify],
  ["faster-stable-stringify", fasterStableStringify],
  ["fastest-stable-stringify", fastestStableStringify],
  ["json-stable-stringify", jsonStableStringify],
  ["safe-stable-stringify", safeStableStringify],
  ["fast-safe-stringify", fastSafeStringify],
];

stringifiers.forEach(([key, stringify]) => {
  suite.add(key, options, () => {
    stringify(users);
    stringify(products);
    stringify(transactions);
  });
});

async function main() {
  await suite.run();

  console.log();
  console.log("Compare outputs:");

  const outputs = {};

  [users, products, transactions].forEach((data) =>
    stringifiers.forEach(([key, stringify]) => {
      outputs[key] = createHash("sha256")
        .update(outputs[key] || "")
        .update(stringify(data))
        .digest("hex");
    })
  );

  for (const [key, hash] of Object.entries(outputs)) {
    console.log(hash, key);
  }
}

main();
