const possiblyPerfect = (key, answers) => {
  let result = null

  for (let i = 0; i < key.length; i++) {
    if (key[i] !== '_') {
      const match = key[i] === answers[i]

      if (result === null) {
        result = match
        continue
      }

      if (result !== match) return false
    }
  }

  return true
}
