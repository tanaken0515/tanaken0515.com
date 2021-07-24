import fs from 'fs'
import path from 'path'
import YAML from 'yaml'

const topicsFilePath = path.join(process.cwd(), 'data', 'careers.yaml')

export function getSortedCareers() {
  const file = fs.readFileSync(topicsFilePath, 'utf8')
  const allCareers = YAML.parse(file).list

  return allCareers.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}
