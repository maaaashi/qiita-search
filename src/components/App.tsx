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
    const url = new URL('https://qiita.com/api/v2/items')
    const query = new URLSearchParams()
    query.append('page', '1')
    query.append('per_page', '10')
    query.append('query', `${mode}:${userInput}`)
    url.search = query.toString()

    const response = await fetch(url.toString())
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
    <>
      <header>
        <h2>Qiita Searcher</h2>
        <div className='search-type'>
          <h3>検索タイプ</h3>
          <div className='search-type__radio-buttons'>
            <div className='search-type__radio-button'>
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
            </div>
            <div className='search-type__radio-button'>
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
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <div
            style={{
              padding: '5px',
              backgroundColor: '#edeeee',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 24 24'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z'></path>
            </svg>
            <input
              type='text'
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={loading}
              required
            />
          </div>
          <button type='submit' disabled={loading}>
            検索
          </button>
        </form>
      </header>
      <hr />
      <main>
        {results.map((result, index) => (
          <div key={index}>
            <a target='_blank' href={result.url}>
              {result.title}
            </a>
          </div>
        ))}
      </main>
    </>
  )
}

export default App
