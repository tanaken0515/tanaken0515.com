import fs from 'fs'
import path from 'path'
import YAML from 'yaml'

const topicsFilePath = path.join(process.cwd(), 'data', 'topics.yaml')

export function getSortedTopics() {
  const file = fs.readFileSync(topicsFilePath, 'utf8')
  const allTopics = YAML.parse(file).list

  return allTopics.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}
