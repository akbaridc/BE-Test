/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ["flower", "flow", "flight"];

function result(words) {
  if (!words || words.length === 0) return "Data in array null";

  const sorts = words.sort((a, b) => a.length - b.length);

  const index = sorts[0];

  while (!words.every((string) => string.startsWith(index))) {
    if (index.length === 0) return;
    return index.slice(0, -2);
  }
}

console.log(result(words));
