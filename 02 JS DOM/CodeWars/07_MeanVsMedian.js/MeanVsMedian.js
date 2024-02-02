function meanVsMedian(numbers) {
    const mean = numbers.reduce((a, x, n) => a + (x - a) / ++n);
    const median = numbers.sort((a, b) => a - b)[0 | numbers.length / 2];
    return mean != median ? mean > median ? 'mean' : 'median' : 'same';
  }  