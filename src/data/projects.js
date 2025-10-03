// A small module exporting metadata about demo projects. These values
// populate the Projects section of the portfolio. When new projects
// are added, update this file and the corresponding screenshots
// in the public/previews folder.

const projects = [
  {
    id: 'projecthub',
    title: 'ProjectHub – Kanban Project Manager',
    description:
      'Organize your work into Backlog, In Progress and Done columns. Drag and drop tasks, add tags and due dates, filter and search. Works offline via IndexedDB and exports/imports CSV.',
    tech: ['React', 'Tailwind', 'Framer Motion', 'Zustand', 'Dexie', 'dnd‑kit'],
    cover: new URL('projecthub_cover_1200x630.png', import.meta.env.BASE_URL).href,
    live: 'https://ivanvaic99.github.io/projecthub/',
    github: 'https://github.com/ivanvaic99/projecthub',
  },
  {
    id: 'fintrack',
    title: 'FinTrack – Budget & Expense Tracker',
    description:
      'Track your income and spending with categories and recurring expenses. Visualise data with line, bar and donut charts. Import/export CSV and enjoy offline access.',
    tech: ['React', 'Tailwind', 'Recharts', 'Dexie', 'date‑fns'],
    cover: new URL('fintrack_cover_1200x630.png', import.meta.env.BASE_URL).href,
    live: 'https://ivanvaic99.github.io/fintrack/',
    github: 'https://github.com/ivanvaic99/fintrack',
  },
  {
    id: 'devblog-cms-lite',
    title: 'DevBlog CMS Lite – Markdown Blog Editor',
    description:
      'Write and preview markdown posts, tag them and manage draft vs. published states. Export your entire blog as a JSON feed or ZIP archive. Offline support included.',
    tech: ['React', 'Tailwind', 'react‑markdown', 'Dexie'],
    cover: new URL('devblog-cms-lite_cover_1200x630.png', import.meta.env.BASE_URL).href,
    live: 'https://ivanvaic99.github.io/devblog-cms-lite/',
    github: 'https://github.com/ivanvaic99/devblog-cms-lite',
  },
  {
    id: 'shopsprint',
    title: 'ShopSprint – E‑commerce Storefront (mock)',
    description:
      'Browse a product catalogue with filters, view details, add items to your cart and generate an order ID at checkout. Orders are stored locally and exportable as CSV.',
    tech: ['React', 'Tailwind', 'Zustand', 'localStorage'],
    cover: new URL('shopsprint_cover_1200x630.png', import.meta.env.BASE_URL).href,
    live: 'https://ivanvaic99.github.io/shopsprint/',
    github: 'https://github.com/ivanvaic99/shopsprint',
  },
];

export default projects;