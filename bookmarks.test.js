// const bookmarks = require('./app/scripts/bookmarks.js')
// reads open tab groups
// chrome.bookmarks.create = jest.fn()
// reads history
// chrome.history = jest.fn()
// https://developer.chrome.com/docs/extensions/reference/tabGroups/#type-TabGroup
// https://developer.chrome.com/docs/extensions/reference/tabs/#type-Tab
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Object
// collapsed: true
// color: "orange"
// id: 281409528
// title: "reactjs"
// windowId: 2998
// [[Prototype]]: Object
// sends data downstream
// invokes tensor.js

let bookmarks,
    tabs

import { TabGroup } from './tabGroup'

let annotatedTab = {
  url: 'url?tags[]=tabGroupTitle',
  title: 'title',
  favIconUrl: 'favIconUrl'
}
let tab = {
  id: 1,
  url: 'url',
  title: 'title',
  favIconUrl: 'favIconUrl'
}


import { BookmarkCollection } from './bookmarks'
import { Bookmark } from './bookmark'
jest.mock('./tabGroup')
jest.mock('./bookmark')
beforeAll(() => {
  TabGroup.mockImplementation(() => {
    return {
      get: () => {
        return {
          title: 'tabGroupTitle'
        }
      }
    }
  })
})
// chrome.tabs.query({}, function(tabs){ for (tab of tabs) { console.log(chrome.tabGroups.get(tab.groupId).then(function (g) { return g.id }), tab.id) } })
beforeEach(() => {
  tabs = [tab]
  TabGroup.mockClear()
  new BookmarkCollection(tabs).annotate()
})
describe('when the id is a positive integer', () => {
  it('calls getTabGroupInfo with the id of the tab', () => {
    expect(TabGroup).toHaveBeenCalledWith(1)
  })

  it('creates a bookmark with annotated data', () => {
    expect(Bookmark).toHaveBeenCalledWith(annotatedTab)
  })
})
test.todo('when the id is -1')
test.todo('includes details about the tab group in the URL')
test.todo('uses machine learning to group large amounts of info based on the training set (tabGroups)')
