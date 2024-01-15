import dayjs from 'dayjs'
import { useCallback, useMemo, useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatContent from './ChatContent'

export default () => {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { 'role': 'user', 'content': `Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple? Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple? Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple? Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?`, time: dayjs().format('hh:mm A') }
  ])
  const currentRows = useMemo(() => input.split('\n').length, [input])
  const handleSubmit = () => {
    console.log(messages, input)
    setMessages([
      ...messages,
      { 'role': 'user', 'content': input, time: dayjs().format('hh:mm A') },
    ])
  }

  return <main className="main is-visible" data-dropzone-area="">
    <div className="container h-100">
      <div className="d-flex flex-column h-100 position-relative">
        <ChatHeader />
        <ChatContent messages={messages} currentRows={currentRows} />
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
