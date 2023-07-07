import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
export default defineConfig({
  title: 'Fuzzy UI',
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
          ]
        },
        {
          text: 'Form 表单组件',
          collapsed: true,
          items: [
            { text: 'Button 按钮', link: '/components/button' },
          ]
        },
        {
          text: 'Custom 定制化组件',
          collapsed: true,
          items: [
            { text: 'Button 按钮', link: '/components/button' },
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
  },
})
