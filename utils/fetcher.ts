const fetcher = (a: any, ...args: any[]) =>
  fetch(a, ...args).then(res => res.json())

export default fetcher
