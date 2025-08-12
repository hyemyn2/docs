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

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Vue Pivottable',
      description: "A Guide of vue-pivottable",
      themeConfig: {
        logo: { src: '/logo.svg', width: 24, height: 24 },
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
          { icon: 'github', link: 'https://github.com/vue-pivottable/vue3-pivottable' }
        ]
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      title: 'Vue Pivottable',
      description: "vue-pivottable 공식 가이드",
      themeConfig: {
        logo: { src: '/logo.svg', width: 24, height: 24 },
        nav: [
          { text: '홈', link: '/ko/' },
          { text: '가이드', link: '/ko/getting-started' },
          {
            text: `v${pkg.version} (Vue 3)`,
            items: [
              {
                text: '변경 로그',
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
            text: '후원하기 💚',
            link: 'https://github.com/sponsors/Seungwoo321',
            target: '_self',
            rel: 'sponsored'
          }
        ],
        sidebar: [
          {
            text: '가이드',
            items: [
              { text: '소개', link: '/ko/introduction' },
              { text: '시작하기', link: '/ko/getting-started' },
            ]
          },
          {
            text: '고급',
            items: [
              { text: '로케일', link: '/ko/locale' },
              { text: '슬롯', link: '/ko/slot' },
              { text: '스코프드 슬롯', link: '/ko/scoped-slot' },
              { text: '유틸리티', link: '/ko/utilities' },
              { text: '렌더러', link: '/ko/renderer' },
            ]
          },
          {
            text: '속성', link: '/ko/props' 
          },
          {
            text: '스타일링', link: '/ko/styling' 
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vue-pivottable/vue3-pivottable' }
        ]
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      title: 'Vue Pivottable',
      description: "vue-pivottable 公式ガイド",
      themeConfig: {
        logo: { src: '/logo.svg', width: 24, height: 24 },
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'ガイド', link: '/ja/getting-started' },
          {
            text: `v${pkg.version} (Vue 3)`,
            items: [
              {
                text: '変更ログ',
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
            text: '支援する 💚',
            link: 'https://github.com/sponsors/Seungwoo321',
            target: '_self',
            rel: 'sponsored'
          }
        ],
        sidebar: [
          {
            text: 'ガイド',
            items: [
              { text: 'はじめに', link: '/ja/introduction' },
              { text: 'スタートガイド', link: '/ja/getting-started' },
            ]
          },
          {
            text: '高度な使用法',
            items: [
              { text: 'ロケール', link: '/ja/locale' },
              { text: 'スロット', link: '/ja/slot' },
              { text: 'スコープドスロット', link: '/ja/scoped-slot' },
              { text: 'ユーティリティ', link: '/ja/utilities' },
              { text: 'レンダラー', link: '/ja/renderer' },
            ]
          },
          {
            text: 'プロパティ', link: '/ja/props' 
          },
          {
            text: 'スタイリング', link: '/ja/styling' 
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vue-pivottable/vue3-pivottable' }
        ]
      }
    },
    zh: {
      label: '中文',
      lang: 'zh',
      title: 'Vue Pivottable',
      description: "vue-pivottable 官方指南",
      themeConfig: {
        logo: { src: '/logo.svg', width: 24, height: 24 },
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/getting-started' },
          {
            text: `v${pkg.version} (Vue 3)`,
            items: [
              {
                text: '更新日志',
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
            text: '赞助 💚',
            link: 'https://github.com/sponsors/Seungwoo321',
            target: '_self',
            rel: 'sponsored'
          }
        ],
        sidebar: [
          {
            text: '指南',
            items: [
              { text: '介绍', link: '/zh/introduction' },
              { text: '快速开始', link: '/zh/getting-started' },
            ]
          },
          {
            text: '高级',
            items: [
              { text: '本地化', link: '/zh/locale' },
              { text: '插槽', link: '/zh/slot' },
              { text: '作用域插槽', link: '/zh/scoped-slot' },
              { text: '工具', link: '/zh/utilities' },
              { text: '渲染器', link: '/zh/renderer' },
            ]
          },
          {
            text: '属性', link: '/zh/props' 
          },
          {
            text: '样式', link: '/zh/styling' 
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vue-pivottable/vue3-pivottable' }
        ]
      }
    }
  }
})
