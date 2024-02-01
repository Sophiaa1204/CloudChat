import { useEffect, useMemo, useState } from 'react'
import { flushSync } from 'react-dom'
import useContentStore from '../../Store/content'

export default ({ onRetry }) => {
  const [value, setValue] = useState('')
  const { key, setKey, messages } = useContentStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    setKey(value)
  }
  return <div className="col-lg-6 order-1">
    <div className="p-4 p-sm-7">
      <div
        className="acss-1vwqsas"
        style={{
          height: 88,
          width: 88,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.10)',
          padding: 12,
          marginBottom: 12,
        }}
      ><img
        alt="🔑"
        loading="lazy"
        width="64"
        height="64"
        decoding="async"
        data-nimg="1"
        src="https://chat-preview.lobehub.com/_next/image?url=https%3A%2F%2Fregistry.npmmirror.com%2F%40lobehub%2Fassets-emoji%2F1.3.0%2Ffiles%2Fassets%2Fkey.webp&amp;w=128&amp;q=75"
      /></div>
      <h1 className="mb-2 h3">Use Custom API Key</h1>
      <form className="mt-4 text-start" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Enter your OpenAI API Key to start the
            conversation. The application will not record your API Key.</label>
          <input
            required
            placeholder={'sk-*****************************************'}
            className="form-control"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary w-100 mb-0"
          >Confirm and Retry
          </button>
        </div>
      </form>
    </div>
  </div>
}
