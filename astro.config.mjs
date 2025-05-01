// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import starlightImageZoom from 'starlight-image-zoom';
import starlightAutoSidebar from 'starlight-auto-sidebar';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: {
          en: 'Cesbo Help',
          ru: 'Справочный центр Cesbo',
          es: 'Cesbo Ayuda',
      },
      logo: {
         src: './src/assets/logo.svg',
         alt: 'Cesbo logo',
         replacesTitle: true,
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
      routeMiddleware: './src/components/sidebar-middleware.ts',
      components: {
          Sidebar: './src/components/Sidebar.astro',
          SiteTitle: './src/components/SiteTitle.astro',
      },
      sidebar: [
          {
              label: 'Astra',
              translations: { es: 'Astra', ru: 'Астра' },
              autogenerate: { directory: 'astra' },
              collapsed: true,
          },
          {
              label: 'Alta',
              translations: { es: 'Alta', ru: 'Альта' },
              autogenerate: { directory: 'alta' },
              collapsed: true,
          },
          {
              label: 'Senta',
              translations: { es: 'Senta', ru: 'Сента' },
              autogenerate: { directory: 'senta' },
              collapsed: true,
          },
          {
              label: 'Miscelaneous',
              translations: { es: 'Misceláneo', ru: 'Разное' },
              autogenerate: { directory: 'misc' },
              collapsed: true,
          },
      ],
      customCss: [
        './src/tailwind.css',
      ],
      favicon: "/favicon.ico",
      plugins: [
        starlightImageZoom(),
        starlightAutoSidebar(),
      ],
      }),
      mdx(),
      tailwind({
        applyBaseStyles: false,
      }),
    ],
    site: "https://help.cesbo.com",
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