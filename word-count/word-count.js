export function countWords(sent){
  let counts = {}
  sent.match(/\b[\w']+\b/g).forEach(word => {
    word = word.toLowerCase()
    counts[word] = counts[word] ? counts[word] + 1 : 1
  })
  return counts
}
