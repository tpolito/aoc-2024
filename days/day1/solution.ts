const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((n) => {
    const nums = n.split("  ").map(Number);
    const [left, right] = nums;
    return [left, right];
  });

export const part1 = (rawInput: string) => {
  const parsedInput = parseInput(rawInput);
  const leftNums = parsedInput.map(([left, _]) => left).sort((a, b) => a - b);
  const rightNums = parsedInput
    .map(([_, right]) => right)
    .sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < leftNums.length; i++) {
    const diff = Math.abs(leftNums[i] - rightNums[i]);

    sum += diff;
  }

  return sum;
};

const countOccurences = (arr: number[], num: number) => {
  return arr.reduce((acc, curr) => (curr === num ? acc + 1 : acc), 0);
};

export const part2 = (rawInput: string) => {
  const parsedInput = parseInput(rawInput);
  const leftNums = parsedInput.map(([left, _]) => left);
  const rightNums = parsedInput.map(([_, right]) => right);
  let sum = 0;

  for (let i = 0; i < leftNums.length; i++) {
    const leftNum = leftNums[i];
    const numberOfOccurances = countOccurences(rightNums, leftNum);

    sum += leftNum * numberOfOccurances;
  }

  return sum;
};
