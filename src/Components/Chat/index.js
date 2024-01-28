import dayjs from 'dayjs'
import { useCallback, useMemo, useState } from 'react'
import { useUserStore } from '../../Store'
import useChatStore from '../../Store/chat'
import { cloudChat, createOrUpdateMessages } from '../../Api'
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
    messages,
    setMessages,
    setIsTyping,
    setInfo,
  } = useChatStore()
  const { id: userId } = useUserStore()
  const currentRows = useMemo(() => input.split('\n').length, [input])
  const handleRegenerate = (newMessages) => {
    console.log(newMessages)
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
      const data = await cloudChat(_messages, signal)
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
    } finally {
      setIsTyping(false)
    }
  }
  const invokeSaveChat = async(currentMessages) => {
    const data = await createOrUpdateMessages({
      messages: currentMessages,
      id: chatId || uuid.v4(),
      model,
      key,
      userId,
    })
    setInfo({
      id: data.id,
      model: data.model,
      key: data.key,
    })
  }
  const handleAbort = (e) => {
    e.stopPropagation()
    e.preventDefault()
    controller && controller.abort('abort')
    setIsTyping(false)
    setMessages(messages.slice(0, messages.length - 1))
  }
  return <main className="main is-visible" data-dropzone-area="">
    <div className="h-100">
      <div className="d-flex flex-column h-100 position-relative">
        <ChatHeader />
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
      </div>
    </div>
  </main>
}
