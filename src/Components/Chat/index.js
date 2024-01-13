import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'
import ChatContent from './ChatContent'

export default () => {

  return <main className="main is-visible" data-dropzone-area="">
    <div className="container h-100">
      <div className="d-flex flex-column h-100 position-relative">
        <ChatHeader />
        <ChatContent />
        <ChatInput />
      </div>
    </div>
  </main>
}
