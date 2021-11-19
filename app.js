App({
  dark: false,
  listName: 'menuListInfo',
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    my.setStorage({
      key: this.listName,
      data: [{ id: 1, title: '代办1', content: '事件1', done: true }, { id: 2, title: '代办2', content: '事件2', done: true }, { id: 3, title: '代办3', content: '事件3', done: true }, { id: 4, title: '代办4', content: '事件4', done: true }, { id: 5, title: '代办5', content: '事件5', done: false }],
    })
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
