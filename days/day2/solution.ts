const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((line) => line.split(" ").map(Number));

export const part1 = (rawInput: string) => {
  const parsedInput = parseInput(rawInput);
  const safeReports = parsedInput
    .map((report) => {
      const isIncreasing = report[0] > report[1];

      for (let i = 0; i < report.length - 1; i++) {
        const diff = report[i] - report[i + 1];
        if (isIncreasing) {
          if (diff < 1 || diff > 3) return false;
        } else {
          if (diff < -3 || diff > -1) return false;
        }
      }
      return true;
    })
    .filter(Boolean).length;

  return safeReports;
};

export const part2 = (rawInput: string) => {
  const parsedInput = parseInput(rawInput);
  return parsedInput;
};
