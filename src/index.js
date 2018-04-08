const findImports = (input) => {
  const regex = (/@import\s+['"](.+)['"]/g)
  const allMatches = []
  let match
  while (match = regex.exec(input)) {
    allMatches.push(match[1])
  }
  return allMatches
}

module.exports = (input) => {
  const allMatches = [
    ...findImports(input),
  ]
  return allMatches.sort()
}
