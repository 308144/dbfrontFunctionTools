/**
 *
 * 延时
 *
 * @param  duration
 * @returns Promise
 * @example
 * ```
 * sleep(3000)
 * ```
*/

export default function sleep (duration:number):Promise<void>{
  return new Promise((reslove)=>{
    setTimeout(reslove,duration)
  })
}
