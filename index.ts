import { mkdir } from "fs/promises";

const args = Bun.argv.toSpliced(0, 2);

if (args.length < 1) {
  console.log("Too few arguments");
  process.exit(1);
}

if (args[0] !== "--day" || typeof Number(args[1]) !== "number") {
  console.log("Invalid argument");
  process.exit(1);
}

const day = Number(args[1]);
const year = new Date().getFullYear();
console.log(`Fetching problem for day: ${day} year: ${year}`);

console.log("Fetching input...");
const rawInput = await fetch(
  `https://adventofcode.com/${year}/day/${day}/input`,
  {
    headers: {
      cookie: `session=${Bun.env.AOC_SESSION}`, // session cookie value from aoc website
    },
  },
);

const realInput = rawInput.status === 200 ? await rawInput.text() : null;
if (realInput === null) {
  console.log("Failed to fetch input with a status of", rawInput.status);
  process.exit(1);
}
console.log("Input fetched successfully");

console.log("Creating directories & copying input...");
await mkdir(`days/day${day}`, { recursive: true });
await Bun.write(`days/day${day}/input.txt`, realInput);

console.log("Creating template files...");
await Bun.write(
  `days/day${day}/index.ts`,
  `
import { part1, part2 } from './solution';

(async () => {
  try {
    const input = await Bun.file(import.meta.dir + '/input.txt').text();
    console.log('--- Day ${day} - Part 1 ---');
    console.log(part1(input));

    console.log('--- Day ${day} - Part 2 ---');
    console.log(part2(input));
  } catch (e) {
    console.error(e);
  }
})();
`,
);

await Bun.write(
  `days/day${day}/solution.ts`,
  `
const parseInput = (rawInput: string) => rawInput;

export const part1 = (rawInput: string) => {
  const parsedInput = parseInput(rawInput);
  return parsedInput;
};

export const part2 = (rawInput: string) => {
  const parsedInput = parseInput(rawInput);
  return parsedInput;
};
`,
);

console.log("Done!");
