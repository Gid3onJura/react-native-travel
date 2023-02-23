const travelDiary = require("./data.json")

export const getPlacesData = async () => {
  try {
    return travelDiary
  } catch (error) {
    return null
  }
}
