# Company Blog Frontend Structure

```text
src/
├── app/                  # Application bootstrap, providers, and global composition
├── assets/
│   ├── fonts/            # Self-hosted fonts
│   └── images/           # Static images imported by the application
├── components/
│   ├── common/           # Reusable domain-neutral components (e.g. EmptyState)
│   ├── layout/           # Header, footer, navigation, and page shell
│   └── ui/               # Small presentational primitives (Button, Input, Badge)
├── config/               # Environment-aware application configuration
├── constants/            # Stable labels, paths, and shared constants
├── features/
│   └── blog/
│       ├── api/          # Blog-specific API requests and data adapters
│       ├── components/   # ArticleCard, ArticleList, AuthorBio, etc.
│       ├── hooks/        # Blog data and interaction hooks
│       └── types/        # Blog models and feature-local types
├── hooks/                # Reusable cross-feature hooks
├── layouts/              # Route-level layouts, such as BlogLayout
├── lib/                  # Third-party client setup and framework adapters
├── pages/                # Route screens: Home, BlogIndex, BlogPost, NotFound
├── routes/               # Route definitions and route guards
├── services/             # Cross-feature service layer (analytics, SEO, CMS)
├── styles/               # Design tokens, resets, and global style helpers
├── types/                # Shared application-wide TypeScript types
└── utils/                # Pure, framework-independent helper functions
```

Keep a component inside a feature when it only serves that feature. Promote it to `components/` only after it is genuinely shared. Place page components in `pages/`; pages compose features and layouts but should not contain API logic.

The existing `src/route.ts` can be migrated into `src/routes/` when routing is introduced.
