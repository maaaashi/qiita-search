export {}

// chrome.contextMenus.create({
//   id: 'Qiita Search',
//   title: '選択文字をQiitaSearchで検索する',
//   contexts: ['all'],
// })

// chrome.contextMenus.onClicked.addListener(function (info: any, tab: any) {
//   if (!info.selectionText) return

//   if (info.menuItemId === 'Qiita Search') {
//     // chrome.runtime.sendMessage({
//     //   message: info.selectionText,
//     // })
//     const mainbox = document.createElement('div')
//     mainbox.innerHTML = 'aaaaaaaaaaaaa'
//     document.getElementsByTagName('body').item(0)?.append(mainbox)
//     // chrome.action.openPopup()
//   }
// })
