import { useRef, useState } from 'react'
import * as uuid from 'uuid'
import { useUserStore } from '../../Store'
import useBotStore from '../../Store/bot'
import { createBot, uploadFile } from '../../Api'

const UploadAvatar = () => {
  const uploadRef = useRef()
  const { setAvatar, info } = useBotStore()
  const { id: userId } = useUserStore()
  const { avatar } = info
  const handleClick = (e) => {
    e.preventDefault()
    uploadRef.current.click()
  }
  const handleUpload = async(e) => {
    const file = e.target.files[0]
    const url = await uploadFile(file)
    setAvatar(url)
  }

  return <div className={'text-center'}>
    <div
      className={'border-1 border-secondary overflow-hidden mx-auto'}
      style={{
        width: 100,
        height: 100,
        borderStyle: 'solid',
        borderRadius: '50%',
      }}
    >
      <img src={avatar} width={100} height={100} />
    </div>
    <input
      onChange={handleUpload} ref={uploadRef} className={'d-none'} type={'file'}
      accept={'image/*'}
      multiple={false}
    />
    {
      (userId === info.ownerId || !info.BotId) &&
      <button onClick={handleClick} className={'btn btn-dark btn-sm mt-2'}>Edit
        Picture
      </button>
    }
  </div>
}
export default () => {
  const {
    setAvatar,
    setTitle,
    setDescription,
    setPrompt,
    setPublic,
    info,
    addBot,
    updateBot,
    resetInfo,
  } = useBotStore()
  const { id: userId } = useUserStore()
  const {
    avatar,
    description,
    title, prompt,
    isPublic,
    disabled
  } = info
  const handleSubmit = async(e) => {
    e.preventDefault()
    const botId = info.BotId ? info.BotId : uuid.v4()
    const data = await createBot({
      ...info,
      id: botId,
      BotId: botId,
      userId,
      ownerId: userId,
      isPublic: Boolean(isPublic),
    })
    info.BotId
      ? updateBot(data)
      : addBot(data)
    resetInfo()
  }

  return <main className="main is-visible" data-dropzone-area="">
    <div className="col-lg-6 order-1 mx-auto">
      <div className="p-4 p-sm-7">
        <h1 className="mb-2 h1 border-bottom border-secondary">{
          info.id ? 'Bot info' : 'Create a bot'
        }</h1>
        <form className="mt-4 text-start" onSubmit={handleSubmit}>
          <div className="mb-3">
            <UploadAvatar></UploadAvatar>
          </div>
          <div className="mb-3">
            <label className="form-label">Bot name</label>
            <input
              required
              className="form-control"
              placeholder="Bot Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3 position-relative">
            <label className="form-label">Description</label>
            <div className={'small text-muted mb-2'}>
              Describe what your bot does and what people can expect from it.
            </div>
            <textarea
              placeholder="Description"
              className="form-control"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-3 position-relative">
            <label className="form-label">Prompt</label>
            <div className="small text-muted mb-2">Tell your bot how to behave
              and how to respond to user messages. Try to be as specific as
              possible.
            </div>
            <textarea
              placeholder="Prompt"
              required
              className="form-control"
              rows={3}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <div className="mb-3 position-relative">
            <label className="form-label">Access</label>
            <div className="small text-muted mb-2">Tell your bot how to behave
              and how to respond to user messages. Try to be as specific as
              possible.
            </div>
            <div className="form-check form-switch px-0">
              <input
                className="form-check-input"
                type="checkbox"
                checked={isPublic}
                onChange={(e) => setPublic(e.target.checked)}
              />
            </div>
          </div>

          {!disabled && <div>
            <button
              type="submit"
              className="btn btn-primary w-100 mb-0"
            >{
              info.id ? 'Save' : 'Create'
            } bot
            </button>
          </div>}
        </form>
      </div>
    </div>
  </main>
}
