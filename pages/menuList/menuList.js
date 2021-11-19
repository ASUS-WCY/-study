Page({
  data: {
    done: [],
    undone: [],
    listName: ''
  },
  getMenuList() {
    // 获取缓存中的数据 并更新data中的数据
    this.setData({
      listName: getApp().listName
    })
    let res = my.getStorageSync({
      key: 'menuListInfo'
    });
    if (res.success) {
      this.setData({
        done: res.data.filter(item => {
          if (item.done) {
            return item
          }
        })
      })
      this.setData({
        undone: res.data.filter(item => {
          if (!item.done) {
            return item
          }
        })
      })
    }
  },
  deleteItem(e) {
    // 删除事件
    const { listName, done, undone } = this.data
    const { id } = e.target.dataset
    const arr = [...done, ...undone]
    const newArr = arr.filter(item => item.id !== id)
    my.setStorageSync({
      key: listName,
      data: newArr
    })
    this.getMenuList()
  },
  checkedChange(e) {
    // 改变事件完成状态
    const { listName } = this.data
    const { id } = e.currentTarget.dataset
    const { value: checked } = e.detail
    const { data: list } = my.getStorageSync({
      key: listName,
    })
    list.forEach(item => {
      if (item.id === id) {
        item.done = checked
      }
    })
    my.setStorageSync({
      key: listName,
      data: list
    })
    this.getMenuList()
    console.log(this.data.done);
    console.log(this.data.undone);
  },
  addMatters() {
    my.redirectTo({
      url: '/pages/addMatters/addMatters'
    });
  },
  onLoad() {
    this.getMenuList()
  },
});
