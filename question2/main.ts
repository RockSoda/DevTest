export function findOutlier(integers: number[]): number {
  let even = []
  let odd = []
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      even.push(integers[i])
    } else {
      odd.push(integers[i])
    }
  }

  return (even.length === 1) ? even[0] : odd[0]
}