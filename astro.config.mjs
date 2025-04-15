// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: {
          en: 'Senta Help',
          ru: 'Справочный центр Senta',
          es: 'Senta Ayuda',
      },
      social: [
          { icon: 'email', label: 'Email', href: 'mailto:support@cesbo.com' },
          { icon: 'telegram', label: 'Telegram', href: 'https://t.me/cesbo' },
          { icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/cesbo' },
      ],
      defaultLocale: 'en',
      locales: {
          en: {
              label: 'English',
          },
          ru: {
              label: 'Русский',
          },
          es: {
              label: 'Español',
          },
      },
      sidebar: [
          {
              label: 'Astra',
              translations: { es: 'Astra', ru: 'Астра' },
              autogenerate: { directory: 'astra' }
          },
          {
              label: 'Alta',
              translations: { es: 'Alta', ru: 'Альта' },
              items: [
                 { label: 'Getting Started', autogenerate: { directory: 'alta/getting-started' } },
                 { label: 'Admin Guide', autogenerate: { directory: 'alta/admin-guide' } },
                 { label: 'OTT Settings', autogenerate: { directory: 'alta/ott-settings' } },
              ],
          },
          {
              label: 'Miscelaneous',
              translations: { es: 'Misceláneo', ru: 'Разное' },
              autogenerate: { directory: 'misc' }
          },
      ],
      customCss: [
        './src/tailwind.css',
      ],
      plugins: [
        starlightImageZoom(),
      ],
      }),
      mdx(),
      tailwind({
        applyBaseStyles: false,
      }),
    ],
    prefetch: {
        prefetchAll: true,
        defaultStrategy: "tap",
    },
    redirects: {
        "/": "/en",
        "/profile": "https://cesbo.com/accounts/profile/",
        "/assets/img/logo.svg": "https://cdn.cesbo.com/logo.svg",
    },
});