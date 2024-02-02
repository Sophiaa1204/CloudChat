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
  title,
  avatar
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
        title,
        avatar
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

export const cloudChatModel = (model, key, messages, signal) => new Promise(
  async(
    resolve,
    reject,
  ) => {
    try {
      const resp = await fetch(
        `https://prod-90.eastus.logic.azure.com/workflows/3c530080aa574c2dbe9f77cc58537edf/triggers/manual/paths/invoke/v1/chat/${model}/${key}?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wv4CV5f0iMTLjlkIyVe_ws8_nckMuhNxNqYhWSDYwTQ`,
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

export const uploadFile = (file) => new Promise(async(resolve, reject) => {
  const formData = new FormData()
  formData.append('file', file)
  const resp = await fetch(
    `https://prod-62.eastus.logic.azure.com:443/workflows/c48668fa41454f1799d53e8439e74047/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=0HgJ3zAfqc422PylwIm5fZVCN8zBrx9Y3eCwxwyTBiQ`,
    {
      method: 'POST',
      body: formData,
    },
  )
  const json = await resp.json()
  if (json.error) {
    reject(json.error)
  } else {
    resolve(json.data.url)
  }
})

export const createBot = (data) => new Promise(async(resolve, reject) => {
  const resp = await fetch(
    `https://prod-26.eastus.logic.azure.com:443/workflows/0328177f463845c7911899560bcf698c/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=zo74KP2gLMDOgOlOsPYRFFklNU__B2nyjdZNM9952rA`,
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

export const getUserBots = (userId) => new Promise(async(resolve, reject) => {
  const resp = await fetch(
    `https://prod-83.eastus.logic.azure.com/workflows/767f1a13e9de4dfb98fd7e488e048e99/triggers/manual/paths/invoke/${userId}?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=tiwqczgcTnSlkArdM3Wq4iz8eOO2OYvyl9_eAZal4U0`,
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

export const deleteBot = (botId) => new Promise(async(resolve, reject) => {
  const resp = await fetch(
    `https://prod-43.eastus.logic.azure.com/workflows/13c8c8c2db2a44dbb741d0a9d6dfe562/triggers/manual/paths/invoke/{BotId}?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=B-9YaQWUm00tSAiY9vRbIByt0wdam_hftlG33j8CfFQ`,
    {
      method: 'DELETE',
    },
  )
  resolve()
})

export const getPublicBots = () => new Promise(async(res, rej) => {
  const resp = await fetch(`https://prod-22.eastus.logic.azure.com:443/workflows/4ead746dbfd444379c83882c2c89f34e/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9PqR1Jm24YVWnhvsLLBApkBXXqEBKkptK4pVhvrT_6E`)
  const json = await resp.json()
  if (json.error) {
    rej(json.error)
  } else {
    res(json)
  }
})

export const copyBot = ({
  BotId,
  userId,
  copyBotId,
}) => new Promise(async(res, rej) => {
  const resp = await fetch(
    `https://prod-14.eastus.logic.azure.com:443/workflows/50c55e820b7b4f089663f2b49d2dcca6/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wnM8c4E8vRaRMcXK6yjvvsbrWA285tq7aFDY_Xm16og`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        BotId,
        userId,
        copyBotId,
      }),
    },
  )
  const json = await resp.json()
  if (json.error) {
    rej(json.error)
  } else {
    res(json)
  }
})
