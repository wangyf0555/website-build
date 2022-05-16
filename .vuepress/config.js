
function convertSidebar(list, path) {
  if (list.length > 0) {
      list.forEach((element, i) => {
        if (element.children) {
            convertSidebar(element.children, path + element.directoryPath)
            delete element.directoryPath
        } else {
            list[i] = [`${path}${element}`, element]
        }
      });
  }
  return list
}

module.exports = {
  "dest": "dist", // 打包文件夹名称
  "locales": {
    '/': {
      'lang': 'en-US',// html lang属性
      'title': 'Apache Doris',
      'description': 'Apache Doris'
    },
    '/zh/': {
      'lang': 'zh-CN',
      'title': 'Apache Doris',
      'description': 'Apache Doris'
    }
  },
  // shouldPrefetch: () => false,
  // 头部文件设置
  "head": [
    // CSS样式上传
    ["link", { "rel": "icon", "href": "/blog-images/logo.png" }],
    ["link", { "rel": "stylesheet", "href": "//at.alicdn.com/t/font_3319292_bdqvc63l075.css" }],
    ["link", { "rel": "stylesheet", "href": "/css/animate.min.css" }],
    // meta 描述
    ["meta", { "name": "viewport", "content": "width=device-width,initial-scale=1,user-scalable=no" }],
    // js 上传
    ["script", { "type": "text/javascript", "src": "/js/jquery-2.1.4.min.js" }],
    ["script", { "type": "text/javascript", "src": "/js/xRoll.js" }],
    ["script", { "type": "text/javascript", "src": "/js/js.js" }],
  ],

  "theme": "haobom",
  "themeConfig": {
    "mode": 'light',
    "modePicker": false,
    "locales": {
      "/": {
        // 导航栏
        "nav": [
          {
            "text": "Blog",
            "icon": "doris doris-xiala",
            "items": [
              { text: 'Practical cases', link: '/categories/PracticalCases/' },
              { text: 'Technical analysis', link: '/categories/TechnicalAnalysis/' },
              { text: 'Version notice', link: '/categories/VersionNotice/' }
            ]
          },
          {
            "text": "Document",
            "link": "/docs/"
          },
          // {
          //   "text": "Event",
          //   "link": "/timeline/",
          // },
          {
            "text": "ASF",
            "icon": "doris doris-xiala",
            "items": [
              { text: 'Foundation', link: 'https://www.apache.org/' },
              { text: 'Security', link: 'https://www.apache.org/security/' },
              { text: 'License', link: 'https://www.apache.org/licenses/' },
              { text: 'Events', link: 'https://www.apache.org/events/current-event' },
              { text: 'Sponsorship', link: 'https://www.apache.org/foundation/sponsorship.html' },
              { text: 'Thanks', link: 'https://www.apache.org/foundation/thanks.html' },
            ]
          },
          {
            "text": "Downloads",
            "link": "/docs/downloads/downloads"
          }
        ],

        // 指定页面侧边栏
        "sidebar": {
          "/docs/": convertSidebar(require('./sidebar/en.js'), '/docs/'),
          // "/ASF/": [
          //   {
          //     'title': 'ASF',    // 标题信息
          //     'collapsable': false,   // 是否可折叠
          //     'children': [           // 该块内容对应的所有链接
          //       ["", "Foundation"],         // README.md
          //       ['License', 'License'],
          //       ["Events", "Events"],
          //       ["Sponsorship", "Sponsorship"],
          //       ["Thanks", "Thanks"]
          //     ]
          //   }
          // ],
          // "/Downloads/": [
          //   {
          //     'title': 'Downloads',    // 标题信息
          //     'collapsable': false,   // 是否可折叠
          //     'children': [           // 该块内容对应的所有链接
          //       ["", "Doris"],         // README.md   ['地址','标题']
          //       ['DorisCore', 'Doris Core']
          //     ]
          //   }
          // ]
        }
      },
      "/zh/": {
        // 导航栏
        "nav": [
          {
            "text": "博客",
            "icon": "doris doris-xiala",
            "items": [
              { text: '公司新闻', link: '/zh/categories/公司新闻/' },
              { text: '行业新闻', link: '/zh/categories/行业新闻/' },
              { text: '其他', link: '/zh/categories/其他/' }
            ]
          },
          {
            "text": "文档",
            "link": "/zh/docs/"
          },
          // {
          //   "text": "时间线",
          //   "link": "/zh/timeline/",
          // },
          {
            "text": "ASF",
            "link": "/zh/",
            "icon": "doris doris-xiala",
            "items": [
              { text: '基础', link: 'https://www.apache.org/' },
              { text: '安全', link: 'https://www.apache.org/security/' },
              { text: '版权', link: 'https://www.apache.org/licenses/' },
              { text: '活动', link: 'https://www.apache.org/events/current-event' },
              { text: '捐赠', link: 'https://www.apache.org/foundation/sponsorship.html' },
              { text: '鸣谢', link: 'https://www.apache.org/foundation/thanks.html' },
            ]
          },
          {
            "text": "下载",
            "link": "/zh/docs/downloads/downloads"
          }
        ],

        // 指定页面侧边栏
        "sidebar": {
          "/zh/docs/": convertSidebar(require('./sidebar/zh-CN.js'), '/zh/docs/'),
          // "/zh/ASF/": [
          //   {
          //     'title': 'ASF',    // 标题信息
          //     'collapsable': false,   // 是否可折叠
          //     'children': [           // 该块内容对应的所有链接
          //       ["", "基础"],         // README.md
          //       ['License', '执照'],
          //       ["Events", "活动"],
          //       ["Sponsorship", "赞助"],
          //       ["Thanks", "谢谢"]
          //     ]
          //   }
          // ],
          // "/zh/Downloads/": [
          //   {
          //     'title': '下载',    // 标题信息
          //     'collapsable': false,   // 是否可折叠
          //     'children': [           // 该块内容对应的所有链接
          //       ["", "Doris"],         // README.md   ['地址','标题']
          //       ['DorisCore', 'Doris Core']
          //     ]
          //   }
          // ]
        },
      }
    },

    "logo": "/blog-images/logo.png", // 博客的Logo图片
    "search": true, // 是否开启搜索框
    "searchMaxSuggestions": 10, // 搜索的关键词深度
    "lastUpdated": "Last Updated", // 最后更新时间 这个无所谓
    "author": "美团", // 作者名称
    "authorAvatar": "/blog-images/avatar.png", // 作者头像
    "record": "xxxx", // 这里是网站备案！
    "startYear": "2022", // 网站的起始时间 效果：2022 - 2022
    "subSidebar": "auto",//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    "displayAllHeaders": true,
    'sidebarDepth': 2
  },
  "markdown": {
    "lineNumbers": true
  },
  // "plugins": [
  //   ['@vuepress/plugin-blog', {
  //     permalink: '/:regular',
  //     frontmatters: [
  //       // {
  //       //   id: 'categories',
  //       //   keys: ['categories'],
  //       //   path: '/zh/ccc/',
  //       //   layout: 'ccc',
  //       //   scopeLayout: 'ccc'
  //       // },
  //       // {
  //       //   id: 'zh-timeline',
  //       //   keys: ['timeline'],
  //       //   path: '/zh/ttt/',
  //       //   layout: 'ttt',
  //       //   scopeLayout: 'ttt'
  //       // }
  //     ]
  //   }]
  // ]
}