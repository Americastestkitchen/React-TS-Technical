 import { Trending } from "../types"
 
export const getTrending = async (): Promise<Trending[] | undefined> => {
  try {
    const response = await fetch('localhost:3000')
    if(!response.ok){
      const errorMessage = `${response.status}: ${response.statusText}`
      const error = new Error(errorMessage)
      throw(error)
    }
    const trending = await response.json()
    return trending
  } catch (error) {
    console.log(`Error in fetch: ${error}`)
    return undefined
  }
}