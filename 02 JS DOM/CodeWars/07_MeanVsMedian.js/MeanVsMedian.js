function meanVsMedian(numbers){
  const mean = numbers.reduce((a, b, n) => a + (b-a)/ ++n);
  const median = numbers.sort((a, c) => a - c)[0 | numbers.length / 2];
  return mean != median ? mean > median ? 'mean' : 'median' : 'same';
}