export function objectKeys<TObj>(obj: TObj) {
  return Object.keys(obj) as (keyof TObj)[]
}
