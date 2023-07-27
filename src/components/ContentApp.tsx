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
          const mainbox = document.createElement('div')
          mainbox.id = 'qiita-search-box'
          mainbox.innerHTML = 'aaaaaaa'
          mainbox.style.top = event.pageX.toString() + 'px'
          mainbox.style.left = event.pageY.toString() + 'px'
          document.body.appendChild(mainbox)
        } else {
          qiitaSearchBox.style.top = event.pageX.toString() + 'px'
          qiitaSearchBox.style.left = event.pageY.toString() + 'px'
        }
      }
    })
  }, [])
  return <div></div>
}

export default ContentApp
