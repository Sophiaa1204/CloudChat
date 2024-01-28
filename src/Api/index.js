export const createOrUpdateUser = ({ info, email, id }) => new Promise(
  async(resolve, reject) => {
    const data = { email, id, info }
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

export const cloudChat = (messages) => new Promise(async(resolve, reject) => {
  const resp = await fetch(
    `https://prod-28.eastus.logic.azure.com/workflows/9e1735187bb84f509a678bfe79b33b6f/triggers/manual/paths/invoke/v1/chat?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lvouI9a-e3kboKHdR7_Uw_Q4oJp6wut4yEwk6iIcC9w`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messages.map(i => ({
        role: i.role,
        content: i.content,
      }))),
    },
  )
  const json = await resp.json()
  if (json.error) {
    reject(json.error)
  } else {
    resolve(json)
  }
})
