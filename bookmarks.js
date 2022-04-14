import { TabGroup } from './tabGroup'
export class BookmarkCollection {
  constructor (tabs) {
    this.tabs = tabs
  }
  annotate () {
    new TabGroup(1)
    // for (tab of tabs) {
    //   let id = tab.groupId
    //   if (id != -1)
    //   {
    //     group = chrome.tabGroups.get(id)
    //     console.log(group)
    //   }
  }
}

