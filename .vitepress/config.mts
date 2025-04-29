import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Vue Pivottable",
  description: "A Guide of vue-pivottable",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting-started' }
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
  }
})
