Component({
  mixins: [],
  data: {
    popShow: false
  },
  props: {
    data: [],
    title: '',
    onDelete: () => { },
    onCheckedChange: () => { }
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    clickHandler(e) {
      this.props.onDelete(e)
    },
    isChecked(e) {
      this.props.onCheckedChange(e)
    },
    showMatter(e) {
      my.redirectTo({
        url: `/pages/addMatters/addMatters?id=${e.currentTarget.id}`
      });
    }
  },
});
