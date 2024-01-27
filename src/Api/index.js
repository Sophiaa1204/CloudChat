export const createOrUpdateUser = ({ chat, info, email, id }) => new Promise(
  async(resolve, reject) => {
    const data = { email, id, info, chat }
    const resp = await fetch(
      `https://prod-13.eastus.logic.azure.com:443/workflows/dd07461a7f0243f3b7699334c29c46de/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=uuNP66JLzewkLISxC-6K4jAzg7zxfZespnvFoo5-igc`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )
    const json = await resp.json()
    if (json.error) {
      reject(json.error)
    } else {
      resolve(json)
    }
  })
