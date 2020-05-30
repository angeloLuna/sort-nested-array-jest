export const main = (nestedArray) => {
  const numbers = []
  const getNumbers = (arr) => {
    for (let i in arr) {
      if (typeof arr[i] === 'object') {
        getNumbers(arr[i])
      } else {
      numbers.push(arr[i])
      }
    }
  }
  getNumbers(nestedArray)
  return numbers.sort((a,b)=>a-b)
}