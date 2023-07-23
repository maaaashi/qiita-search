chrome.contextMenus.create({
  id: 'Qiita Search',
  title: '選択文字をQiitaSearchで検索する',
  contexts: ['all'],
})

chrome.contextMenus.onClicked.addListener(function (info: any, tab: any) {
  if (info.menuItemId === 'Qiita Search') {
    console.log(chrome)
    // chrome.extension.sendMessage(tab.id, {
    //   type: 'search',
    //   text: info.selectionText,
    // })
  }
})
