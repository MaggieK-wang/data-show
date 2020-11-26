/**
 * 自定义连线
 */
// 动画虚线
var dashedLine = {
  afterDraw(cfg, group) {
    // 获得该边的第一个图形，这里是边的 path
    var shape = group.get('children')[0];
    var index = 0;
    // 边 path 图形的动画
    shape.animate(function() {
        index++;
        if (index > 9) {
          index = 0;
        }
        var res = {
          lineDash: [6, 4],
          lineDashOffset: -index,
        };
        // 返回需要修改的参数集，这里修改了 lineDash,lineDashOffset
        return res;
      },
      {
        repeat: true, // 动画重复
        duration: 3000, // 一次动画的时长为 3000
      },
    );
  },
};

G6.registerEdge('dashed-line', dashedLine, 'quadratic');
