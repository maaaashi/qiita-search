import { FormEvent, useState } from 'react'

function App() {
  const [userInput, setUserInput] = useState('')
  const [results, setResults] = useState<{ title: string; url: string }[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [mode, setMode] = useState<'title' | 'body'>('title')

  chrome.runtime.onMessage.addListener((data: { message: string }) => {})

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault()
    if (!userInput) return

    setLoading(true)
    const url = `https://qiita.com/api/v2/items?page=1&per_page=10&query=qiita+title:${userInput}`

    const response = await fetch(url)
    const data = (await response.json()) as { title: string; url: string }[]
    setResults(
      data.map(({ title, url }) => {
        return { title, url }
      })
    )
    setUserInput('')
    setLoading(false)
  }

  return (
    <div className='p-3'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={loading}
        />
        <button type='submit' disabled={loading}>
          検索
        </button>
      </form>
      <hr />
      <div>
        <p>検索タイプ</p>
        <input
          type='radio'
          id='title'
          value={mode}
          name='mode'
          onChange={() => {
            setMode('title')
          }}
          checked={mode === 'title'}
        />
        <label htmlFor='title'>タイトル</label>
        <input
          type='radio'
          id='body'
          value={mode}
          name='mode'
          onChange={() => {
            setMode('body')
          }}
          checked={mode === 'body'}
        />
        <label htmlFor='body'>本文</label>
      </div>
      {results.map((result, index) => (
        <div key={index}>
          <a target='_blank' href={result.url}>
            {result.title}
          </a>
        </div>
      ))}
    </div>
  )
}

export default App
