export const irandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const stripNumber = (value, decimal) => {
  return Math.round(value * decimal) / decimal
}

export const wait = (interval) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(false)
    }, interval)
  })
}
