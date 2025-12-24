---
seo:
  title: Nuxt Content Helper CLI
  description: A small CLI to help manage Markdown content and associated images for Nuxt Content sites.
---
:vercel-analytics
:vercel-speed

::u-page-hero
---
orientation: horizontal
---

:::img
---
src: /landing/banner.png
alt: NUCH Logo
---
#title
NUCH - Nuxt Content Helper CLI

#description
A simple and efficient CLI to manage Markdown content and images for Nuxt Content sites.

Written in Rust, NUCH makes sure your content is easily managed with just a few commands.

#headline
  :::u-button{.rounded-full }
  ---
  size: md
  color: neutral
  to: https://github.com/rivethorn/nuch/releases/latest
  variant: subtle
  ---
  🎉 **Release v1.1**
  :::

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /installation
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  color: neutral
  icon: simple-icons-github
  size: xl
  to: https://github.com/nuxt-content/docus
  variant: outline
  ---
  Star on GitHub
  :::
::

::u-page-section{.-mt-20}
  :::u-page-grid
    ::::u-page-card
    ---
    spotlight: true
    class: group col-span-2 lg:col-span-1
    target: _blank
    to: https://rust-lang.org/
    ---
    :floating-rust

    #title
    Built with [Rust]{.text-primary}

    #description
    Optimized to the core, NUCH is built with Rust to ensure fast performance and low memory usage when processing your Markdown content and images.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    to: https://content.nuxt.com
    ---
      :::::u-color-mode-image
      ---
      height: 320
      width: 859
      alt: Beautiful documents powered by Content
      class: object-cover rounded-lg border border-accented
      dark: /landing/content-dark.png
      light: /landing/content-light.png
      ---
      :::::

    #title
    Powered by [Nuxt Content]{.text-primary}

    #description
    Build and render beautiful documentation sites with ease using Nuxt Content's file-based CMS capabilities, seamlessly integrated into NUCH.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 lg:col-span-3
    target: _blank
    ---
      :::::div{.bg-elevated.rounded-lg.p-3.overflow-x-auto}
      ```toml [config.toml]
      working_dir = "Documents/writings"
      publishing_dir = "your-site/content"
      working_images_dir = "Documents/writings/images"
      publishing_images_dir = "your-site/public/images"
      ```
      :::::

    #title
    [Simple]{.text-primary} configuration

    #description
    Just add your desired directories to the configuration file and let NUCH handle the rest.
    ::::
  :::
::

