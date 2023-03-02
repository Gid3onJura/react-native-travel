const travelDiary = require("./data.json")

export const getPlacesData = async (searchInput, type) => {
  console.log(searchInput)
  try {
    const result = searchForQuery(searchInput, type)
    return result
  } catch (error) {
    return null
  }
}

const searchForQuery = (searchInput, type) => {
  console.log("input:", searchInput)
  console.log("type:", type)
  const filteredDiary = travelDiary.filter((entry) => {
    if (entry.entryType === type) {
      if (
        entry.location.toLowerCase().includes(searchInput.toLowerCase()) ||
        entry.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        entry.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        entry.prizeLevel.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return entry
      }
    }
  })
  console.log("filteredDiary:", filteredDiary)
  return filteredDiary
}
