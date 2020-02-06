import { chunkArray, chunkToWords, matches, tens } from "./numberToWords";

describe("numberToWords", () => {
  test.each([
    ["0", ""],
    ["1", "One"],
    ["20", "Twenty"],
    ["30", "Thirty"],
    ["45", "Forty-Five"],
    ["100", "One Hundred"],
    ["102", "One Hundred Two"],
    ["120", "One Hundred Twenty"],
    ["123", "One Hundred Twenty-Three"]
  ])(".chunkToWords('%s') to return '%s'", (chunk, words) => {
    expect(chunkToWords(chunk)).toBe(words);
  });

  test.each([
    ["1", ["1"]],
    ["12", ["12"]],
    ["123", ["123"]],
    ["1234", ["234", "1"]],
    ["12345", ["345", "12"]],
    ["123456", ["456", "123"]]
  ])(".chunkArray('%s') to return '[%s]'", (arr, chunks) => {
    expect(chunkArray(arr)).toStrictEqual(chunks);
  });

  test(".matches has 20 elements", () => {
    expect(matches.length).toBe(20);
  });

  test(".tens has 8 elements", () => {
    expect(tens.length).toBe(8);
  });
});
