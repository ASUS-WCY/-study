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
    const path = getCurrentPages()[getCurrentPages().length - 1].route
    const arr = [
      "pages/index/index",
      "pages/lifeCircle/lifeCircle",
      "pages/bluetooth/bluetooth",
      "pages/webview/webview"]
    if (arr.indexOf(path) !== -1) {
      my.setTabBarBadge({
        index: 2,
        text: '50'
      })
      my.setTabBarItem({
        index: 0,
        text: 'text',
        iconPath: '/img/1.jpg',
        selectedIconPath: 'img/2.jpg'
      })
      my.setTabBarStyle({
        color: '#333',
        selectedColor: '#108ee9',
        backgroundColor: '#fff',
        borderStyle: '#f00',
      });
    }
  },
});
