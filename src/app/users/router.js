
export const getAll = async (req, res) => {
  try {
    const result = await getAllUser()
    res.send(result)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}