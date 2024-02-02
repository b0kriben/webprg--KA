function L(n, L0, L1, add) {
    const output = [L0, L1]
  
    for (let i = 2; i < n; i++) {
      output.push(output[i - 2] + output[i - 1] + add)
    }
    return output
  }