//  check value is not number return true
//  if value is number return false

function compute(a, b) {
  if (typeof a !== 'number') {
    return 'expect: number, but received: ${a} (string)';
  }
  if (typeof b !== 'number') {
    return 'expect: number, but received: ${b} (string)';
  }
  return a + b;
}

exports.compute = compute;
