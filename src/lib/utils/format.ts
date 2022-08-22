export const numberFormatter = (n: string, decimals?: number) => {
  const num = parseFloat(n)

  const notations = [
    { value: 1e9, symbol: 'B' },
    { value: 1e6, symbol: 'M' },
    { value: 1e3, symbol: 'K' },
    { value: 1, symbol: '' },
  ]
  const item = notations.find((notation) => {
    return num >= notation.value
  })

  return item
    ? `${(num / item.value).toFixed(decimals)}${item.symbol}`
    : isNaN(num)
    ? (0).toFixed(decimals)
    : num.toFixed(decimals)
}
