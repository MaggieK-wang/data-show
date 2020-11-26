Vue.component('box-center', {
  template: "#box-center-template",
  data() {
    return {
      message: 'center'
    };
  },
  created() {
    this.countRatio();
  },
  mounted() {
    this.initGraph();
  },
  methods: {
    // 初始化graph
    initGraph() {
      var graphBox = this.$refs['graph-box'];
      this.graph = new G6.Graph({
        width: graphBox.clientWidth,
        height: graphBox.clientHeight,
        container: this.$refs['graph-canvas'],
        groupByTypes: false,
        defaultEdge: {
          type: 'dashed-line',
          style: {
            stroke: 'l(0) 0:#ff0000 1:#1890ff',
            lineWidth: 2,
            lineAppendWidth: 10,
          },
          curveOffset: -40,
          curvePosition: 0.7
        },
        modes: {
          default: [
            // 'drag-node',
            {
              type: 'edge-tooltip', // 边提示框
              formatText(model) {
                // 边提示框文本内容
                // return `
                // <div class='g6-tooltip__box'>x:${model.x}--y:${model.y}</div>
                // `;
                return `
                  <div class='g6-tooltip__box'>
                    <span>今日:</span>
                    <span>1234条</span>
                  </div>
                `

              },
            }
          ],
        },
        linkCenter: true, // 指向中心
      });
      window.graph = this.graph;
      var self = this;
      this.$nextTick(function () {
        self.initDate();
      });
      this.listenerWindowSize();
    },
    // 初始化平成
    initDate() {
      var self = this;
      graph.node(function (node) {
        if (!node.originData) {
          node.originData = {
            _size: [node.size[0], node.size[1]],
            _x: node.x,
            _y: node.y
          };
        }
        var _size = node.originData._size;
        node.size = [Math.floor(_size[0] * self.ratio), Math.floor(_size[1] * self.ratio)];
        node.x = Math.floor(node.originData._x * self.ratio);
        node.y = Math.floor(node.originData._y * self.ratio);
        return node;
      });
      this.graph.data(graphData);
      this.renderData();
    },
    renderData() {
      this.graph.render();
      var nodes = graph.getEdges();
      // 遍历节点实例，将所有节点提前。
      nodes.forEach(function (node) {
        node.toFront();
      });
      // 更改层级后需要重新绘制图
      graph.paint();
    },
    // 计算比例系数
    countRatio() {
      this.ratio = window.innerWidth / 1920;
      // this.ratio = 1;
    },
    // 监听窗口大小变换, 更新视图
    listenerWindowSize() {
      var fun = Utils.debounce(this.updateGraph, 250);
      window.addEventListener('resize', fun);
    },
    // 更新视图
    updateGraph() {
      var graphBox = this.$refs['graph-box'];
      this.graph.changeSize(graphBox.clientWidth, graphBox.clientHeight);
      this.countRatio();
      this.renderData();
    }
  }
});