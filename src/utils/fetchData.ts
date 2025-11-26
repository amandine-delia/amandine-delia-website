import fs from 'fs'
import path from 'path'

export const getPageData = (dataPath: string) => {
  const filePath = path.join(process.cwd(), 'public', dataPath)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  return fileContent
}

type ParsedDataResult<TData> =
  | {
      data: TData
      isError: false
    }
  | {
      data: null
      isError: true
    }

export const parseJsonData = <TData>(jsonString: string): ParsedDataResult<TData> => {
  let data: TData | null = null
  let isError = false

  try {
    data = JSON.parse(jsonString)
    isError = false
  } catch (error) {
    console.error('Error parsing JSON data:', error)
    data = null
    isError = true
  }

  return { data, isError } as ParsedDataResult<TData>
}
