# Design Specifications

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#0A2647` | Headers, nav, sidebar active |
| Accent | `#2E8B8B` | Links, highlights, interactive elements |
| Surface | `#F8FFFE` | Page background (light mode) |
| Dark BG | `#0A2647` | Page background (dark mode) |
| Muted | `#64748B` | Secondary text, captions |
| Border | `#E2E8F0` | Dividers, card borders |

## Theme Configuration

Colors configured via `<Head>` component in `app/layout.jsx`:

```jsx
<Head
  backgroundColor={{
    dark: 'rgb(10, 38, 71)',    // #0A2647
    light: 'rgb(248, 255, 254)' // #F8FFFE
  }}
  color={{
    hue: { dark: 174, light: 174 },       // Teal hue
    saturation: { dark: 55, light: 55 }
  }}
/>
```

## Typography

- Use system defaults (Nextra handles this)
- Code blocks use Shiki syntax highlighting
- Dark mode support via Nextra built-in theme switching

## Visual Principles

1. **Clean, minimal** - let frameworks be visual interest
2. **Generous whitespace**
3. **Tables first-class** - frameworks are often tabular
4. **Dark mode support** - built-in theme switching

## Layout Components

### Navbar
```jsx
<Navbar
  logo={<b>HelixOS</b>}
  projectLink="https://thehelixlab.co"
/>
```

### Footer
```jsx
<Footer className="flex-col items-center md:items-start">
  © {new Date().getFullYear()} The Helix Lab. All rights reserved.
</Footer>
```

### Layout Props
```jsx
<Layout
  navbar={navbar}
  pageMap={await getPageMap()}
  docsRepositoryBase="https://github.com/your-repo/helixos/tree/main/content"
  editLink="Edit this page"
  sidebar={{ defaultMenuCollapseLevel: 1 }}
  footer={footer}
  search={<Search placeholder="Search HelixOS..." />}
  toc={{ title: 'On This Page' }}
>
```

## Metadata Configuration

```jsx
export const metadata = {
  title: {
    default: 'HelixOS — The Helix Lab',
    template: '%s | HelixOS'
  },
  description: 'The canonical source of truth for The Helix Lab frameworks.',
  openGraph: {
    siteName: 'HelixOS',
    type: 'website'
  }
}
```

## Responsive Requirements

- Grid components stack on mobile
- Sidebar collapses appropriately
- Tables scroll horizontally on small screens
- Navigation adapts to screen size

## Brand Guidelines

- Use ™ symbol on first reference per page
- Keep professional, clean aesthetic
- Teal accent for interactive/highlighted elements
- Consistent spacing and alignment
