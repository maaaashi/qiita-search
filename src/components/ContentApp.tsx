import { useEffect } from 'react'

const ContentApp = () => {
  useEffect(() => {
    document.addEventListener('mouseup', function (event) {
      if (!window) return

      const selectedText = window.getSelection()?.toString()

      if (selectedText) {
        console.log(selectedText)
        const qiitaSearchBox = document.getElementById('qiita-search-box')
        if (!qiitaSearchBox) {
          const mainbox = document.createElement('button')
          mainbox.id = 'qiita-search-box'
          // mainbox.style.top = event.clientY.toString() + 'px'
          // mainbox.style.left = event.clientX.toString() + 'px'
          document.body.appendChild(mainbox)
        } else {
          // qiitaSearchBox.style.top = event.clientY.toString() + 'px'
          // qiitaSearchBox.style.left = event.clientX.toString() + 'px'
        }
      } else {
        const qiitaSearchBox = document.getElementById('qiita-search-box')
        if (qiitaSearchBox) {
          qiitaSearchBox.remove()
        }
      }
    })
  }, [])
  return <div></div>
}

export default ContentApp
