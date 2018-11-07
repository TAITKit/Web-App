// Should from DB
/*
apps = [
  {
    name: 'Jieba Segementation',
    bindName: 'jieba-service',
    author: 'Sun Junyi',
    description: 'This is jieba segmentation for chineses made by Sun Junyi.',
    inputs: [
      {
        name: 'text',
        type: 'text',
        description: 'The chinese text to be segmented'
      },
      {
        name: 'suffix',
        type: 'text',
        description: 'The suffix of output. Just for testing.'
      }
    ],
    configs: [
      {
        name: 'text-config',
        type: 'text',
        default: 'default-text'
      },
      {
        name: 'boolean-config',
        type: 'boolean',
        default: true
      }
    ]
  },
  { name: 'Discourse', bindName: 'discourse', author: 'calin' },
  {
    name: 'Computer Vision',
    bindName: 'computer-vision',
    author: 'nan',
    description: 'Computer vision input test: add caption to image',
    inputs: [
      {
        name: 'image',
        type: 'file',
        description: 'The base'
      },
      {
        name: 'caption',
        type: 'text',
        description: 'The adding caption'
      }
    ],
    configs: []
  }
]
*/
let apps = [
  {
    name: {
      brief: 'Jieba',
      full: 'Jieba Chinese Text Segmentation',
      funtional: 'Chinese Text Segmentation',
      bind: 'jieba-service'
    },
    author: {
      people: ['Sun Junyi'], // or key to user
      units: [] // or key to user
    },
    tags: ['NLP', 'segmentation', 'chinese', 'HMM'],
    description: {
      text: 'Built to be the best Python Chinese word segmentation module',
      links: [
        { url: 'https://github.com/fxsjy/jieba', description: 'Github' }
      ]
    },
    meta: {
      references: [
        { name: '百度中文词法分析（分词+词性+专名）系统', url: 'https://github.com/baidu/lac' },
        { name: '百度FAQ自动问答系统', url: 'https://github.com/baidu/AnyQ' },
        { name: '百度情感识别系统', url: 'https://github.com/baidu/Senta' }
      ],
      envrioment: {
        platforms: [],
        language: ['Python2', 'Python3'],
        packages: []
      }
    },
    format: {
      inputs: [
        {
          name: 'text',
          type: 'text',
          description: 'The chinese text to be segmented'
        },
        {
          name: 'suffix',
          type: 'text',
          description: 'The suffix of output. Just for testing.'
        }
      ],
      configs: [
        {
          name: 'text-config',
          type: 'text',
          default: 'default-text'
        },
        {
          name: 'boolean-config',
          type: 'boolean',
          default: true
        }
      ],
      outputs: [
        {
          name: 'text',
          type: 'text'
        },
        {
          name: 'text',
          type: 'text'
        }
      ]
    }
  },
  {
    name: {
      brief: 'Discourse',
      full: 'A Unified RvNN Framework for End-to-End Chinese Discourse Parsing',
      funtional: 'Chinese discourse parser',
      bind: 'discourse'
    },
    author: {
      people: ['Chuan-An Lin', 'Hen-Hsen Huang', 'Zi-Yuan Chen', 'Hsin-Hsi Chen'], // or key to user
      units: ['台灣大學資訊系'] // or key to user
    },
    tags: ['NLP', 'Discourse', '遞迴類神經網路'],
    description: {
      text: '中文語篇剖析有四項子任務，包含初級語篇單元分割、' +
      '剖析樹建立、主次關係識別、語篇關係辨識等。' +
      '本文展示一個點對點中文語篇剖析器，並提出一套統一架構，' +
      '可以對輸入之中文篇章直接產生完整的中文語篇剖析結果。' +
      '我們的剖析器以遞迴類神經網路為基礎，同時對四項子任務進行學習，' +
      '在中文語篇樹庫(CDTB)資料集上，達到最先進的效能。' +
      '我們釋出了這個剖析器的原始碼與預先訓練完成的模型，' +
      '立即可用。據我們所知，這是第一個開放原始碼的中文剖析工具集，' +
      '而且這套獨立的工具集不須依賴外部資源(如句法剖析器)，' +
      '便於下游應用的整合。',
      links: [
        { url: 'https://github.com/abccaba2000/discourse-parser', description: 'Github' },
        { url: 'http://nlg18.csie.ntu.edu.tw/discourse_parser', description: 'Demo' },
        { url: 'http://aclweb.org/anthology/C18-2016', description: 'Paper' }
      ]
    },
    meta: {
      references: [
        { name: 'WordNet', url: 'https://wordnet.princeton.edu/' },
        { name: '中文語篇樹庫（CDTB）', url: 'www.cs.brandeis.edu/~clp/cdtb/' }
      ],
      envrioment: {
        platforms: ['Windows' + 'Linux'],
        language: ['Python'],
        packages: ['Tensorflow', 'Standford Chinese Parser']
      }
    },
    format: {
      configs: [
        {
          name: 'demo',
          type: 'boolean',
          description: 'Draw html image',
          default: true
        },
        {
          name: 'r',
          type: 'Integer',
          description: 'Depth of the tree'
        }
      ],
      inputs: [
        { name: 'text', type: 'text', description: 'The text parsed by parser' }
      ],
      outputs: [
        { name: 'discourse', type: 'text', description: 'The segmentation of EDUs' },
        { name: 'tree', type: 'image', description: 'The discourse tree' }
      ]
    }
  }
]
for (let i in [1, 2, 3]) apps.push(apps[0])

module.exports = { apps }