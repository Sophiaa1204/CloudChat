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

export const cloudChat = (messages, signal) => new Promise(async(
  resolve,
  reject,
) => {
  try {
    const resp = await fetch(
      `https://prod-28.eastus.logic.azure.com/workflows/9e1735187bb84f509a678bfe79b33b6f/triggers/manual/paths/invoke/v1/chat?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lvouI9a-e3kboKHdR7_Uw_Q4oJp6wut4yEwk6iIcC9w`,
      {
        signal,
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
  } catch (e) {
    console.log(e)
  }

})

export const createOrUpdateMessages = ({
  id,
  userId,
  model = 'gpt-3.5-turbo',
  key,
  messages,
}) => new Promise(async(
  resolve,
  reject,
) => {
  const resp = await fetch(
    `https://prod-58.eastus.logic.azure.com:443/workflows/3a8eb147737a45af9455b9b91fd5a42b/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=6JUiurlOW6HYLZoGGVNZts60jc2bi_SR93lwa5FLODc`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        userId,
        model,
        key,
        messages,
      }),
    },
  )
  const json = await resp.json()
  if (json.error) {
    reject(json.error)
  } else {
    resolve(json)
  }
})

export const getChats = (id) => new Promise(async(resolve, reject) => {
  const resp = await fetch(
    `https://prod-92.eastus.logic.azure.com/workflows/99979e36d57643669efc2b630d8dbef8/triggers/manual/paths/invoke/${id}?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=saeY_NJP45W45LdDg7OegTple5QtTGFucQvbqzmlySU`,
    {
      method: 'GET',
    },
  )
  const json = await resp.json()
  if (json.error) {
    reject(json.error)
  } else {
    resolve(json)
  }
})

export const deleteChat = (id) => new Promise(async(resolve, reject) => {
  const resp = await fetch(
    `https://prod-49.eastus.logic.azure.com/workflows/c43a1a337f4748a7be7fb6ef429ca42f/triggers/manual/paths/invoke/${id}?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=oXHp-FGKYbvBebiJ1gOFmhnXfLRsUVBbGLxjhz0mryM`,
    {
      method: 'DELETE',
    },
  )
  resolve()
})
