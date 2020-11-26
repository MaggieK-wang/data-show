Vue.component('box-right', {
  template: "#box-right-template",
  data() {
    return {
      chart: null,
      message: 'right',
      dataList: [
        { id: 1, fieldNum: '223333', modelNum: '344', name: '专题层', topicsNum: '22', completeTaskNum: '3', totalTaskNum: '8' },
        { id: 2, fieldNum: '224233', modelNum: '356844', name: '主题层', topicsNum: '22', completeTaskNum: '3', totalTaskNum: '8' },
        { id: 3, fieldNum: '2233', modelNum: '344', name: '贴源层', topicsNum: '22', completeTaskNum: '3', totalTaskNum: '8' },
      ]
    };
  },
  props: {
    Id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: "32rem"
    },
    height: {
      type: String,
      default: "1.9rem"
    }
  },
  filters: {
    changeNum(Num) {
      if (isNaN(Num)) { //验证输入的字符是否为数字
        return;
      }
      let num = Num > 9999 ? (Num / 10000).toFixed(1) + '万' : Num
      return num;
    }
  },
  mounted() {
  },
  methods: {

  }
});