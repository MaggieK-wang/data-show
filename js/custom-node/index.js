/**
 * 自定义节点
 */

// 模型层
var floorNode = {
  draw(cfg, group) {
    var width = cfg.size[0];
    var height = cfg.size[1];
    // 关键图形
    // var keyShape = group.addShape('rect', {
    //   attrs: {
    //     id: cfg.id,
    //     width: width,
    //     height: height,
    //     x: - width / 2,
    //     y: - height / 2,
    //     fill: '#ffffff',
    //     stroke: 'black',
    //     fillOpacity: 0.3,
    //   },
    //   name: 'floor-node',
    //   draggable: true,
    // });
    // 图片
    var keyShape = group.addShape('image', {
      attrs: {
        id: cfg.id + 'image',
        x: - width / 2,
        y: - height / 2,
        width: width,
        height: height,
        img: cfg.img,
      },
      name: 'floor-image',
      draggable: true,
    });
    // 文本
    if (cfg.text) {
      group.addShape('text', {
        attrs: {
          id: 'text' + cfg.id,
          text: cfg.text,
          fontSize: 12,
          x: -8,
          y: height / 2 - 6,
          textAlign: 'right',
          fill: '#ffffff',
          textBaseline: 'middle',
          matrix: [1, 0.38, 0, 0, 1, 0, 0, 0, 1],
        },
        name: 'floor-text'
      });
    }
    return keyShape;
  }
};

/**
 * 数据节点
 */
var dataNode = {
  draw(cfg, group) {
    var width = cfg.size[0];
    var height = cfg.size[1];
    var keyShape = group.addShape('image', {
      attrs: {
        id: cfg.id,
        width: width,
        height: height,
        x: -width / 2,
        y: -height / 2,
        img: cfg.img,
        opacity: cfg.opacity || 1
      },
      draggable: true,
      name: 'data-node'
    });
    if (cfg.text) {
      group.addShape('text', {
        attrs: {
          id: cfg.id + 'text',
          text: cfg.text,
          x: 0,
          y: -height / 2,
          fill: '#ffffff',
          textAlign: 'center',
          textBaseline: 'top',
        },
        draggable: true,
        name: 'data-node-text'
      });
    }
    return keyShape;
  }
}

G6.registerNode('floor-node', floorNode, 'single-node');
G6.registerNode('data-node', dataNode, 'single-node');
