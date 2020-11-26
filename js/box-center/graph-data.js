/**
 * 第一层数据
 */
var oneFloorData = [
  // 层
  { id: 'floor-one', type: 'floor-node', img: '/img/floor-xitong.png', size: [989, 370], x: 547 - 31, y: 150 * 5, text: '系统层' },
  // 数据节点
  { id: 'node-1-1', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 206 - 31, y: 730, text: 'FFFF' },
  { id: 'node-1-2', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 318 - 31, y: 765, text: 'FFFF' },
  { id: 'node-1-3', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 429 - 31, y: 805, text: 'FFFF' },
  { id: 'node-1-4', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 547 - 31, y: 842, text: 'FFFF' },
  { id: 'node-1-5', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 664 - 31, y: 805, text: 'FFFF' },
  { id: 'node-1-6', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 778 - 31, y: 765, text: 'FFFF' },
  { id: 'node-1-7', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 892 - 31, y: 730, text: 'FFFF' },
  // 装饰效果
  { id: 'node-1-test-1', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 430 - 31, y: 652, opacity: 0.25 },
  { id: 'node-1-test-2', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 532 - 31, y: 629, opacity: 0.25 },
  { id: 'node-1-test-3', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 519 - 31, y: 689, opacity: 0.25 },
  { id: 'node-1-test-4', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 641 - 31, y: 729, opacity: 0.25 },
  { id: 'node-1-test-5', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 424 - 31, y: 735, opacity: 0.25 },
  { id: 'node-1-test-6', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 314 - 31, y: 684, opacity: 0.25 },
  { id: 'node-1-test-7', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 633 - 31, y: 654, opacity: 0.25 },
  { id: 'node-1-test-8', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 746 - 31, y: 703, opacity: 0.25 },
  { id: 'node-1-test-9', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 549 - 31, y: 765, opacity: 0.25 },
];

/**
 * 第二层数据
 */
var twoFloorData = [
  // 层
  { id: 'floor-two', type: 'floor-node', img: '/img/floor-tieyuan.png', size: [820, 308], x: 547 - 31, y: 150 * 4, text: '贴源层' },
  // 节点
  { id: 'node-2-1', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 290 - 31, y: 580, text: 'DDDD' },
  { id: 'node-2-2', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 420 - 31, y: 624, text: 'DDDD' },
  { id: 'node-2-3', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 547 - 31, y: 670, text: 'DDDD' },
  { id: 'node-2-4', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 675 - 31, y: 624, text: 'DDDD' },
  { id: 'node-2-5', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 807 - 31, y: 580, text: 'DDDD' },
];

/**
 * 第三层数据
 */
var threeFloorData = [
  // 层
  { id: 'floor-three', type: 'floor-node', img: '/img/floor-zhuti.png', size: [697, 291], x: 547 - 31, y: 150 * 3, text: '主题层' },
  // 节点
  { id: 'node-3-1', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 330 - 31, y: 430, text: 'CCC' },
  { id: 'node-3-2', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 435 - 31, y: 468, text: 'CCC' },
  { id: 'node-3-3', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 547 - 31, y: 512, text: 'CCC' },
  { id: 'node-3-4', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 672 - 31, y: 468, text: 'CCC' },
  { id: 'node-3-5', type: 'data-node', img: '/img/sys-icon.png', size: [143, 80], x: 778 - 31, y: 430, text: 'CCC' },
  // 装饰节点
  { id: 'node-3-test-1', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 686 - 31, y: 388, opacity: 0.4 },
  { id: 'node-3-test-2', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 605 - 31, y: 430, opacity: 0.4 },
  { id: 'node-3-test-3', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 495 - 31, y: 434, opacity: 0.4 },
  { id: 'node-3-test-4', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 413 - 31, y: 395, opacity: 0.4 },
];

/**
 * 第四层数据
 */
var fourFloorData = [
  // 层
  { id: 'floor-four', type: 'floor-node', img: '/img/floor-zhuanti.png', size: [564, 261], x: 547 - 31, y: 150 * 2, text: '专题层' },
  // 节点
  { id: 'node-4-1', type: 'data-node', img: '/img/sys-icon.png', size: [100, 46], x: 370 - 31, y: 290, text: 'BBB' },
  { id: 'node-4-2', type: 'data-node', img: '/img/sys-icon.png', size: [114, 64], x: 460 - 31, y: 320, text: 'BBB' },
  { id: 'node-4-3', type: 'data-node', img: '/img/sys-icon.png', size: [128, 72], x: 547 - 31, y: 350, text: 'BBB' },
  { id: 'node-4-4', type: 'data-node', img: '/img/sys-icon.png', size: [114, 64], x: 646 - 31, y: 320, text: 'BBB' },
  { id: 'node-4-5', type: 'data-node', img: '/img/sys-icon.png', size: [100, 46], x: 730 - 31, y: 290, text: 'BBB' },
];

/**
 * 第五层数据
 */
var fiveFloorData = [
  // 层
  { id: 'floor-five', type: 'floor-node', img: '/img/floor-yingyong.png', size: [514, 211], x: 547 - 31, y: 150 * 1, text: '应用层' },
  // 节点
  { id: 'node-5-1', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 398 - 31, y: 135, text: 'XXX' },
  { id: 'node-5-2', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 470 - 31, y: 163, text: 'XXX' },
  { id: 'node-5-3', type: 'data-node', img: '/img/sys-icon.png', size: [114, 64], x: 547 - 31, y: 186, text: 'XXX' },
  { id: 'node-5-4', type: 'data-node', img: '/img/sys-icon.png', size: [114, 64], x: 634 - 31, y: 163, text: 'XXX' },
  { id: 'node-5-5', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 710 - 31, y: 135, text: 'XXX' },

  { id: 'node-5-6', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 474 - 31, y: 104, opacity: 0.5 },
  { id: 'node-5-7', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 547 - 31, y: 130, opacity: 0.5 },
  { id: 'node-5-8', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 630 - 31, y: 109, opacity: 0.5 },
  { id: 'node-5-9', type: 'data-node', img: '/img/sys-icon.png', size: [100, 56], x: 547 - 31, y: 76, opacity: 0.5 },
];

/**
 * 顶层圆顶
 */
var topFloor = [
  { id: 'top-circle', type: 'image', img: '/img/top-circle.png', size: [350, 120], x: 547 - 31, y: 62 },
];

/**
 * 连线
 */
var edges = [
  // 1~2 层
  { id: 'line-1-1', source: 'node-1-2', target: 'node-2-1', },
  { id: 'line-1-2', source: 'node-1-3', target: 'node-2-2', },
  { id: 'line-1-3', source: 'node-1-4', target: 'node-2-3', },
  { id: 'line-1-4', source: 'node-1-5', target: 'node-2-4', curveOffset: 40 },
  { id: 'line-1-5', source: 'node-1-7', target: 'node-2-5', curveOffset: 40 },
  // 2~3 层
  { id: 'line-2-1', source: 'node-2-1', target: 'node-3-1' },
  { id: 'line-2-2', source: 'node-2-2', target: 'node-3-1' },
  { id: 'line-2-3', source: 'node-2-4', target: 'node-3-3', curveOffset: 40  },
  { id: 'line-2-4', source: 'node-2-4', target: 'node-3-4', curveOffset: 40  },
  { id: 'line-2-5', source: 'node-2-5', target: 'node-3-4', curveOffset: 40  },
  // 3~4 层
  { id: 'line-3-1', source: 'node-3-2', target: 'node-4-1' },
  { id: 'line-3-2', source: 'node-3-3', target: 'node-4-1' },
  { id: 'line-3-3', source: 'node-3-5', target: 'node-4-5', curveOffset: 40 },
  // 4~5 层
  { id: 'line-4-1', source: 'node-4-1', target: 'node-5-1' },
  { id: 'line-4-2', source: 'node-4-2', target: 'node-5-1' },
  { id: 'line-4-3', source: 'node-4-2', target: 'node-5-2' },
  { id: 'line-4-4', source: 'node-4-3', target: 'node-5-2' },
  { id: 'line-4-5', source: 'node-4-3', target: 'node-5-4', curveOffset: 40 },
  { id: 'line-4-6', source: 'node-4-4', target: 'node-5-4', curveOffset: 40 },
  { id: 'line-4-7', source: 'node-4-4', target: 'node-5-5', curveOffset: 40 },
  { id: 'line-4-8', source: 'node-4-5', target: 'node-5-4', curveOffset: 40 },
];

/**
 * 顶部节点
 */
var graphData = {
  nodes: oneFloorData.concat(twoFloorData, threeFloorData, fourFloorData, fiveFloorData, topFloor),
  edges: edges
};