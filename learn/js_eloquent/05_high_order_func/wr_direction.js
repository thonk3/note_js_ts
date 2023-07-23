const SCRIPTS = require("./scripts");

/* 
    SCRIPTS = [
    {
    name: string,
    ranges: [[number, number]],
    direction: string,
    year: number,
    living: boolean,
    link: string
    },
    ]
*/

// something to help
function charScript(code) {
  for (let sc of SCRIPTS) {
    if (
      sc.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return sc;
    }
  }

  return null; // code not in anything
}

// something to help
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);

    if (known == -1) counts.push({ name, count: 1 });
    else counts[known].count++;
  }

  return counts;
}

function domDir(text) {
  let scripts = countBy(text, (char) => {
    let scr = charScript(char.codePointAt(0));

    return scr ? scr.name : "none";
  }).filter(({ name }) => name != "none");

  // if text count is 0 leave it
  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total === 0) return "None found";

  let dom = scripts.reduce((a, b) => (a.count > b.count ? a : b));
  let dir = SCRIPTS.filter((sc) => sc.name === dom.name)[0].direction;

  return `${dir} - ${text}`;
}

console.log(domDir("Hello!"));
// → ltr
console.log(domDir("Hey, مساء الخير"));
// → rtl
