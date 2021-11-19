Page({
  data: {
    id: '',
    listName: '',
    menuList: '',
    defaultTitle: '',
    defaultContent: '',
    title: '',
    content: ''
  },
  submit() {
    // 表单提交事件
    let { menuList, title, content, listName, id } = this.data

    if (title !== '' && content !== '') {
      if (id) {
        menuList.forEach(item => {
          if (item.id + '' === id) {
            item.title = title
            item.content = content
          }
        })
        my.setStorageSync({
          key: listName,
          data: menuList
        })
      } else {
        let matter = {
          id: this.randomId(),
          title,
          content,
          done: false
        }
        my.setStorageSync({
          key: listName,
          data: [...menuList, matter]
        });
      }
      my.redirectTo({
        url: '/pages/menuList/menuList'
      });
    } else {
      my.showToast({
        content: "title or content is empty!",
        duration: 2000
      });
    }
  },
  reset() {
    // 表单重置事件
  },
  resetHandle() {
    const { defaultTitle, defaultContent } = this.data
    this.setData({
      title: defaultTitle,
      content: defaultContent
    })
    console.log(this.data);

  },
  randomId() {
    // 随机生成id
    return Math.random().toString().substr(-7)
  },
  inputHandler(e) {
    const { currentTarget: { tagName }, detail: { value } } = e

    if (tagName === 'input') {
      this.setData({
        title: value
      })
    } else {
      this.setData({
        content: value
      })
    }
    return false;
  },
  onLoad({ id = '' }) {
    // onLoad的对象就是路径中携带的参数
    // 获取缓存的列表的key值
    this.setData({
      listName: getApp().listName
    })
    const { data } = my.getStorageSync({
      key: this.data.listName
    });
    this.setData({
      menuList: data
    })

    // 对id值进行判断
    if (id) {
      const arr = data.filter(item => item.id + '' === id)
      this.setData({
        id,
        title: arr[0].title,
        content: arr[0].content,
        defaultTitle: arr[0].title,
        defaultContent: arr[0].content,
      })
    }
  },
});
