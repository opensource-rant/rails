import { TabGroup } from './tabGroup'
import { Bookmark } from './bookmark'
export class BookmarkCollection {
  constructor (tabs) {
    this.tabs = tabs
  }
  annotate () {
    let tabGroup = new TabGroup(1).get()
    let tab = this.tabs[0]
    let url = `${tab.url}?tags[]=${tabGroup.title}`
    let annotatedTab = {
      url: url,
      title: tab.title,
      favIconUrl: tab.favIconUrl
    }
    new Bookmark(annotatedTab)
    // for (tab of tabs) {
    //   let id = tab.groupId
    //   if (id != -1)
    //   {
    //     group = chrome.tabGroups.get(id)
    //     console.log(group)
    //   }
  }
}

