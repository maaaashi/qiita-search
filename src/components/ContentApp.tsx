import { useEffect } from 'react'

const ContentApp = () => {
  useEffect(() => {
    document.addEventListener('mouseup', function (event) {
      if (!window) return

      const selectedText = window.getSelection()?.toString()

      if (selectedText) {
        const qiitaSearchBox = document.getElementById('qiita-search-button')
        if (!qiitaSearchBox) {
          const mainbox = document.createElement('button')
          mainbox.id = 'qiita-search-button'
          mainbox.onclick = async () => {
            const searchBox = document.createElement('div')
            searchBox.id = 'qiita-search-box'

            const url = new URL('https://qiita.com/api/v2/items')
            const query = new URLSearchParams()
            query.append('page', '1')
            query.append('per_page', '10')
            query.append('query', `title:${selectedText}`)
            url.search = query.toString()
            const response = await fetch(url.toString())
            const data = (await response.json()) as {
              title: string
              url: string
            }[]

            data.map((d) => {
              const link = document.createElement('a')
              link.href = d.url
              link.innerText = d.title
              searchBox.appendChild(link)
            })

            document.body.appendChild(searchBox)
          }
          // mainbox.style.top = event.clientY.toString() + 'px'
          // mainbox.style.left = event.clientX.toString() + 'px'
          document.body.appendChild(mainbox)
        } else {
          // qiitaSearchBox.style.top = event.clientY.toString() + 'px'
          // qiitaSearchBox.style.left = event.clientX.toString() + 'px'
        }
      } else {
        const qiitaSearchBox = document.getElementById('qiita-search-button')
        if (qiitaSearchBox) {
          qiitaSearchBox.remove()
        }
      }
    })
  }, [])
  return <div></div>
}

export default ContentApp
