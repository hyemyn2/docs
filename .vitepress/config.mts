import { defineConfig } from 'vitepress'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const pkg = require('vue-pivottable/package.json')

export default defineConfig({
  base: '/',
  title: "Vue Pivottable",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  description: "A Guide of vue-pivottable",
  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },

    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting-started' },
      {
        text: `v${pkg.version} (Vue 3)`,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/vue-pivottable/vue3-pivottable/blob/main/CHANGELOG.md'
          },
          {
            text: '0.x (Vue 2)',
            target: '_self',
            link: 'https://seungwoo321.github.io/vue-pivottable/'
          }
        ]
      },
      {
        text: 'Contribute 💚',
        link: 'https://github.com/sponsors/Seungwoo321',
        target: '_self',
        rel: 'sponsored'
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Locale', link: '/locale' },
          { text: 'Slot', link: '/slot' },
          { text: 'Scoped Slot', link: '/scoped-slot' },
          { text: 'Utilities', link: '/utilities' },
          { text: 'Renderer', link: '/renderer' },
        ]
      },
      {
        text: 'Props', link: '/props' 
      },
      {
        text: 'Styling', link: '/styling' 
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  locales: {
    root: { label: 'English' },
    ko: { label: '한국어' }
  }
})
