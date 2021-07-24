export function getSortedTopics() {
  const allTopics = [
    { date: '2021-07-01', content: 'sample01' },
    { date: '2021-07-02', content: 'sample02' },
    { date: '2021-07-03', content: 'sample03' },
    { date: '2021-07-04', content: 'sample04' },
    { date: '2021-07-05', content: 'sample05' },
  ]

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
