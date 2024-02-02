import dayjs from 'dayjs'
import { useCallback, useEffect, useMemo, useState } from 'react'
import RegisterModel from './RegisterModel'
import { useUserStore } from '../../Store'
import chat from '../../Store/chat'
import useContentStore from '../../Store/content'
import useChatStore from '../../Store/chat'

import { cloudChat, createOrUpdateMessages, cloudChatModel } from '../../Api'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatContent from './ChatContent'
import * as uuid from 'uuid'

let controller
let signal
export default () => {
  const {
    id: chatId,
    input,
    model,
    key,
    setInput,
    isTyping,
    messages,
    setMessages,
    setIsTyping,
    setInfo,
    setKey,
  } = useContentStore()
  const { id: userId } = useUserStore()
  const { updateChat, addChat, chats } = useChatStore()
  const isSentFailed = useMemo(
    () => messages.length > 0
      ? messages[messages.length - 1].role === 'user'
      : false,
    [messages],
  )
  useEffect(() => {
    isSentFailed && key && model !== 'gpt-3.5-turbo' && handleRegenerate(
      messages)
  }, [isSentFailed, key, messages])
  const currentRows = useMemo(() => input.split('\n').length, [input])
  const isSetKey = useMemo(() => {
    if (model === 'gpt-3.5-turbo') {
      return true
    } else if (!key) {
      return false
    } else {
      return true
    }
  }, [model, key])
  useEffect(() => {
    if (controller) {
      controller.abort('abort')
      controller = null
      signal = null
      //setMessages(messages.slice(0, messages.length - 1))
    }
  }, [chatId])

  const handleRegenerate = (newMessages) => {
    setMessages(newMessages)
    setIsTyping(true)
    invokeBot(newMessages)
  }
  const handleSubmit = () => {
    if (!input) return
    const currentMessages = [
      ...messages,
      { role: 'user', content: input, time: dayjs().format('hh:mm A') },
    ]
    setMessages(currentMessages)
    setInput('')
    setIsTyping(true)
    invokeBot(currentMessages)
  }

  const invokeBot = async(_messages) => {
    try {
      controller = new AbortController()
      signal = controller.signal
      const data = model === 'gpt-3.5-turbo'
        ? await cloudChat(_messages, signal)
        : await cloudChatModel(model, key, _messages, signal)
      const currentMessages = [
        ..._messages,
        {
          role: 'assistant',
          content: data.choices[0].message.content,
          time: dayjs(data.created * 1000).format('hh:mm A'),
        },
      ]
      setMessages(currentMessages)
      invokeSaveChat(currentMessages)
    } catch (e) {
      console.log(e)
      setKey('')
    } finally {
      setIsTyping(false)
    }
  }
  const invokeSaveChat = async(currentMessages) => {
    const isUpdate = chats.find(i => i.id === chatId)
    if (isUpdate) {
      console.log('update')
      updateChat({
        id: chatId,
        model: model,
        key: key,
        messages: currentMessages,
      })
    } else {
      console.log('add')
      addChat({
        id: chatId,
        model: model,
        key: key,
        messages: currentMessages,
        _ts: new Date().getTime() / 1000,
      })
    }
    const data = await createOrUpdateMessages({
      messages: currentMessages,
      id: chatId,
      model,
      key,
      userId,
    })
    console.log('update')
    if (!isUpdate) {
      updateChat(data)
    }
  }
  const handleAbort = (e) => {
    e?.stopPropagation()
    e?.preventDefault()
    if (controller) {
      controller.abort('abort')
      controller = null
      signal = null
    }

    setIsTyping(false)
    setMessages(messages.slice(0, messages.length - 1))
  }
  return chatId
    ? <main className="main is-visible" data-dropzone-area="">
      <div className="h-100">
        <div className="d-flex flex-column h-100 position-relative">
          <ChatHeader />
          {
            isSetKey ? <>
                <ChatContent
                  currentRows={currentRows}
                  onRegenerate={handleRegenerate}
                />
                <ChatInput
                  currentRows={currentRows}
                  input={input}
                  setInput={setInput}
                  onSubmit={handleSubmit}
                  onAbort={handleAbort}
                />
              </>
              : <RegisterModel onRetry={() => handleRegenerate(messages)} />
          }
        </div>
      </div>
    </main>
    : <main className="main">
      <div className="container h-100">

        <div className="d-flex flex-column h-100 justify-content-center text-center">
          <div className="mb-6">
                            <span className="icon icon-xl text-muted">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-message-square"
                                ><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </span>
          </div>

          <p className="text-muted">Pick a chat from left menu, <br /> and
            start your conversation.</p>
        </div>

      </div>
    </main>
}
