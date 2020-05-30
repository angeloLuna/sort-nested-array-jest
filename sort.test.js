import { main } from './sort'

describe('Sort function', () => {

  test('1 to 5, array from challenge', () => {
    expect(main([1, [2, [3, [4, 5]]]])).toStrictEqual([1, 2, 3, 4, 5]);
  })

  test('1 to 9, multiple nested', () => {
    expect(main([1, [2, [3, [4, 5]]], [9, 6, [7,8]]])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  })

  test('1 to 9, no nested', () => {
    expect(main([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  })

  test('1 to 9, no nested, unsorted', () => {
    expect(main([8, 5, 2, 1, 7, 9, 4, 3, 6])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  })
  test('empty', () => {
    expect(main([])).toStrictEqual([]);
  })

})