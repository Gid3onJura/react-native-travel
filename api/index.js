const travelDiary = require("./data.json")

export const getAllPlaces = async () => {
  return travelDiary
}

export const getPlacesData = async (searchInput, type) => {
  try {
    const result = searchForQuery(searchInput, type)
    return result
  } catch (error) {
    return null
  }
}

const searchForQuery = (searchInput, type) => {
  const filteredDiary = travelDiary.filter((entry) => {
    if (entry.entryType === type) {
      if (
        entry.location.toLowerCase().includes(searchInput.toLowerCase()) ||
        entry.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        entry.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        entry.prizeLevel === searchInput
      ) {
        return entry
      }
    }
  })
  return filteredDiary
}
