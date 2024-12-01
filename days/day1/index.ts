import { part1, part2 } from "./solution";

(async () => {
  try {
    const input = await Bun.file(import.meta.dir + "/input.txt").text();
    console.log("--- Day 1 - Part 1 ---");
    console.log(part1(input));

    console.log("--- Day 1 - Part 2 ---");
    console.log(part2(input));
  } catch (e) {
    console.error(e);
  }
})();
