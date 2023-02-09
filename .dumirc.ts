import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  hash: true,
  history: {
    type: 'browser',
  },
  metas: [{ name: 'theme-color', content: '#1890ff' }],
  themeConfig: {
    name: 'dbfront-tools',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '工具库', link: '/components/select-file' },
    ],
    footer: 'Copyright © 2023 | Powered by dbfront',
  },
  // logo: 'D:\Compony\Study\dumi\imgs\one.webp',
});
