import dayjs from 'dayjs'
import { useCallback, useMemo, useState } from 'react'
import useChatStore from '../../Store/chat'
import { cloudChat } from '../../Api'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatContent from './ChatContent'

export default () => {
  const { input, setInput, messages, setMessages, setTyping } = useChatStore()
  const currentRows = useMemo(() => input.split('\n').length, [input])
  const handleRegenerate = (newMessages) => {
    //TODO
    console.log(newMessages)
  }
  const handleSubmit = () => {
    const currentMessages = [
      ...messages,
      { role: 'user', content: input, time: dayjs().format('hh:mm A') },
    ]
    setMessages(currentMessages)
    setInput('')
    setTyping(true)
    invokeBot(currentMessages)
  }

  const invokeBot = async(_messages) => {
    try {
      const data = await cloudChat(_messages)
      setMessages([
        ..._messages,
        {
          role: 'assistant',
          content: data.choices[0].message.content,
          time: dayjs(data.created * 1000).format('hh:mm A'),
        },
      ])
    } finally {
      setTyping(false)
    }
  }

  return <main className="main is-visible" data-dropzone-area="">
    <div className="h-100">
      <div className="d-flex flex-column h-100 position-relative">
        <ChatHeader />
        <ChatContent
          messages={messages}
          currentRows={currentRows}
          onRegenerate={handleRegenerate}
        />
        <ChatInput
          currentRows={currentRows}
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  </main>
}
