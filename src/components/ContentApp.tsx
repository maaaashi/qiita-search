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
            searchBox.draggable = true

            const header = document.createElement('header')
            header.id = 'qiita-search-box-header'

            const closeButton = document.createElement('button')
            closeButton.id = 'qiita-search-box-close-button'
            closeButton.innerText = 'x'
            closeButton.onclick = () => {
              document.getElementById('qiita-search-box')!.remove()
            }

            header.appendChild(closeButton)
            searchBox.appendChild(header)

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

            if (data.length === 0) {
              const noResult = document.createElement('p')
              noResult.innerText = 'No result...'
              searchBox.appendChild(noResult)
            } else {
              data.map((d) => {
                const link = document.createElement('a')
                link.href = d.url
                link.innerText = d.title
                link.target = '_blank'
                searchBox.appendChild(link)
              })
            }

            document.body.appendChild(searchBox)

            const dragStart = (event: MouseEvent) => {
              console.log('dragStart')
            }

            const drag = (event: MouseEvent) => {
              if (event.clientX === 0 && event.clientY === 0) return
              searchBox.style.top = event.clientY + 'px'
              searchBox.style.left = event.clientX + 'px'
            }

            const dragend = (event: MouseEvent) => {
              searchBox.style.top = event.clientY + 'px'
              searchBox.style.left = event.clientX + 'px'
            }

            searchBox.addEventListener('dragstart', dragStart, false)
            searchBox.addEventListener('drag', drag, false)
            searchBox.addEventListener('dragend', dragend, false)
          }
          document.body.appendChild(mainbox)
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
