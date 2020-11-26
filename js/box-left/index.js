Vue.component('box-left', {
  template: "#box-left-template",
  data() {
    return {
      // message: 'left',
      chartPie: null,
      chartPie1: null,
      charWatertPie: null,
      fontSize: '12px',
      data: [
        { label: '集群规模', value: '15', id: 1, unit: '台' },
        { label: 'CPUs', value: '256', id: 2, unit: 'score' },
        { label: '内存', value: '2000', id: 3, unit: 'G' },
        { label: '存储', value: '200', id: 4, unit: 'T' }
      ],
      dataList: [
        { label: 'CPU' },
        { label: '内存' },
        { label: '存储' },
      ],
      tableData: [
        { id: 1, score: '2233', dataNum: '344', name: '系统层', rank: '1' },
        { id: 2, score: '2233', dataNum: '344', name: '系统层', rank: '2' },
        { id: 3, score: '222233', dataNum: '344', name: '系统层', rank: '3' },
        { id: 4, score: '2233', dataNum: '344', name: '系统层', rank: '4' },
      ],
    };
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
    this.initWaterPie();
  },
  props: {
    width: {
      type: String,
      default: "12rem"
    },
    height: {
      type: String,
      default: "12rem"
    }
  },
  methods: {
    // 水球图
    initWaterPie() {
      this.charWatertPie = echarts.init(this.$refs['chart-pie']);
      this.charWatertPie.setOption({
        // backgroundColor: '#050038',
        title: {
          text: (0.5 * 100).toFixed(0) + '{a|%}',
          textStyle: {
            fontSize: 15,
            fontFamily: 'Microsoft Yahei',
            fontWeight: 'normal',
            color: '#bcb8fb',
            rich: {
              a: {
                fontSize: 10,
              }
            }
          },
          x: 'center',
          y: '35%'
        },
        series: [{
          type: 'liquidFill',
          radius: '90%',
          center: ['50%', '50%'],
          data: [0.5, 0.5, 0.5], // data个数代表波浪数
          backgroundStyle: {
            borderWidth: 1,
            color: 'rgba(255,0,255,0)'
          },
          label: {
            normal: {
              formatter: '',
            }
          },
          outline: {
            show: false,
          },
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 1,
              // color: 'rgba(58, 71, 212, 0)'
              color: 'rgba(0, 64, 255,.3)'
            }, {
              offset: 0,
              color: 'rgba(255, 0, 191, .2)'
            }, {
              offset: 0.8,
              color: 'rgba(127, 0, 255, .8)'
            }, {
              offset: 0,
              color: 'rgba( 255, 128, 0, .6)'
            },

            ],

            globalCoord: false
          },
        }]
      });
      this.listenerWindowSize();
    },
    listenerWindowSize() {
      var self = this;
      this.fun = Utils.debounce(function () {
        self.charWatertPie && self.charWatertPie.resize();
      }, 250);
      window.addEventListener('resize', this.fun);
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.fun);
    this.charWatertPie && this.charWatertPie.dispose();
  }
});