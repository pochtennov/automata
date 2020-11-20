const solution = (text) => {
  const result = [];
  // states: before, inside, after
  let state = 'before';
  let word = [];
  Array.from(text).forEach((symbol) => {
    switch (state) {
      case 'before':
        if (symbol !== ' ' && symbol !== '\n') {
          state = 'inside';
          word.push(symbol);
        }
        break;
      case 'inside':
        if (symbol === ' ' || symbol === '\n') {
          result.push(word.join(''));
          word = []
          state = symbol === ' ' ? 'after' : 'before';
        } else {
          word.push(symbol);
        }
        break;
      case 'after':
        if (symbol === '\n') {
          state = 'before';
        }
        break;
      default:
        throw new Error(`Unexpected state '${state}'`);
    }
  });

  if (word.length > 0) {
    result.push(word.join(''));
  }

  return result;
};

module.exports = solution;