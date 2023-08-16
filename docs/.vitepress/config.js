import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'

export default defineConfig({
  title: 'Fuzzy UI',
  base: '/fuzzy-ui/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/components/button' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yonghero/fuzzy-ui' }
    ],
    sidebar: {
      
      '/guide/': [
        {
          text: '',
          collapsed: true,
          items: [
            { text: '安装', link: '/guide/install' }, // /guide/install.md
            { text: '快速开始', link: '/guide/starter' }, // /guide/starter.md
            { text: '主题', link: '/guide/advance' }, 
          ]
        }
      ],
      '/components/': [
        {
          text: 'Basic 基础组件',
          collapsed: true,
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Cascader 级联选择器', link: '/components/cascader' }, 
            { text: 'DatePicker 日期选择器', link: '/components/date-picker' }, 
            { text: 'Empty 空状态', link: '/components/empty' }, 
            { text: 'Progress 进度条', link: '/components/progress' },
            { text: 'Input 输入框', link: '/components/input' }, // /guide/install.md
            { text: 'Select 选择框', link: '/components/select' }, // /guide/install.md
            { text: 'Switch 状态切换栏', link: '/components/switch' }, // /guide/install.md
            { text: 'Loading 效果', link: '/components/loading' }, // /guide/install.md
            { text: 'Skeleton 骨架屏', link: '/components/skeleton' }, // /guide/install.md
          ]
        },
        {
          text: 'Assembly 组合组件',
          collapsed: true,
          items: [
            { text: 'FilterPanel 查询面板', link: '/components/filter-panel' },
            { text: 'FilterInline 内联表单查询', link: '/components/filter-inline' },
            { text: 'FilterDisplay 下拉标签式查询', link: '/components/filter-display' },
            { text: 'ActionPanel 动作面板', link: '/components/action-panel' },
            { text: 'Dialog 对话框', link: '/components/dialog' },
            { text: 'Form 表单', link: '/components/form' },
            { text: 'Tree 树级组件', link: '/components/tree' },
            { text: 'Upload 组件', link: '/components/upload' },
            { text: 'Table 表格', link: '/components/table' },
            { text: 'Pagination 分页', link: '/components/pagination' },
            { text: 'Menu & Tab', link: '/components/menu' },
            { text: 'TopNavigation 顶部导航栏', link: '/components/top-navigation' },
            { text: 'Navigation 侧边导航栏', link: '/components/navigation' },
            { text: 'MemberSelect 成员选择', link: '/components/member-select' },
            { text: 'ImagePreview 图片预览', link: '/components/image-preview' },
          ]
        },
        {
          text: 'Custom 定制化组件',
          collapsed: true,
          items: [
            { text: 'MapCoordSelection 地图坐标选择', link: '/components/map-coordselection' },
            { text: 'VideoPlayer 视频播放器', link: '/components/video-player' },
            { text: 'FilePreview 文件预览', link: '/components/file-preview' },
          ]
        }
      ]
    }
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => mdPlugin(md),
  }
})
