# Build Task: api-cost-anomaly-detector

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: api-cost-anomaly-detector
HEADLINE: Detect unusual API cost spikes before bills arrive
WHAT: Monitors API usage patterns and costs across multiple providers, uses ML to detect anomalies and predict monthly bills before they arrive
WHY: Developers get surprised by massive API bills. Existing monitoring focuses on performance, not cost prediction and anomaly detection
WHO PAYS: Engineering teams, DevOps engineers, startup CTOs
NICHE: api-monitoring
PRICE: $$15/mo

ARCHITECTURE SPEC:
A Next.js SaaS app that connects to multiple API providers (OpenAI, AWS, Google Cloud, etc.) via their billing/usage APIs, stores historical usage data in a database, and uses time-series analysis to detect cost anomalies and predict monthly bills. Features a dashboard showing real-time costs, anomaly alerts, and bill predictions with Lemon Squeezy for subscription management.

PLANNED FILES:
- app/page.tsx
- app/dashboard/page.tsx
- app/api/providers/route.ts
- app/api/usage/route.ts
- app/api/anomalies/route.ts
- app/api/webhooks/lemon-squeezy/route.ts
- lib/providers/openai.ts
- lib/providers/aws.ts
- lib/providers/google-cloud.ts
- lib/anomaly-detector.ts
- lib/cost-predictor.ts
- lib/database.ts
- components/cost-chart.tsx
- components/anomaly-alerts.tsx
- components/provider-cards.tsx
- components/billing-prediction.tsx

DEPENDENCIES: next, react, typescript, tailwindcss, prisma, @prisma/client, postgresql, recharts, @lemonsqueezy/lemonsqueezy.js, next-auth, aws-sdk, @google-cloud/billing, openai, simple-statistics, date-fns, lucide-react, shadcn/ui

REQUIREMENTS:
- Next.js 15 with App Router (app/ directory)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (npx shadcn@latest init, then add needed components)
- Dark theme ONLY — background #0d1117, no light mode
- Stripe Payment Link for payments (hosted checkout — use the URL directly as the Buy button href)
- Landing page that converts: hero, problem, solution, pricing, FAQ
- The actual tool/feature behind a paywall (cookie-based access after purchase)
- Mobile responsive
- SEO meta tags, Open Graph tags
- /api/health endpoint that returns {"status":"ok"}
- NO HEAVY ORMs: Do NOT use Prisma, Drizzle, TypeORM, Sequelize, or Mongoose. If the tool needs persistence, use direct SQL via `pg` (Postgres) or `better-sqlite3` (local), or just filesystem JSON. Reason: these ORMs require schema files and codegen steps that fail on Vercel when misconfigured.
- INTERNAL FILE DISCIPLINE: Every internal import (paths starting with `@/`, `./`, or `../`) MUST refer to a file you actually create in this build. If you write `import { Card } from "@/components/ui/card"`, then `components/ui/card.tsx` MUST exist with a real `export const Card` (or `export default Card`). Before finishing, scan all internal imports and verify every target file exists. Do NOT use shadcn/ui patterns unless you create every component from scratch — easier path: write all UI inline in the page that uses it.
- DEPENDENCY DISCIPLINE: Every package imported in any .ts, .tsx, .js, or .jsx file MUST be
  listed in package.json dependencies (or devDependencies for build-only). Before finishing,
  scan all source files for `import` statements and verify every external package (anything
  not starting with `.` or `@/`) appears in package.json. Common shadcn/ui peers that MUST
  be added if used:
  - lucide-react, clsx, tailwind-merge, class-variance-authority
  - react-hook-form, zod, @hookform/resolvers
  - @radix-ui/* (for any shadcn component)
- After running `npm run build`, if you see "Module not found: Can't resolve 'X'", add 'X'
  to package.json dependencies and re-run npm install + npm run build until it passes.

ENVIRONMENT VARIABLES (create .env.example):
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK  (full URL, e.g. https://buy.stripe.com/test_XXX)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  (pk_test_... or pk_live_...)
- STRIPE_WEBHOOK_SECRET  (set when webhook is wired)

BUY BUTTON RULE: the Buy button's href MUST be `process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
used as-is — do NOT construct URLs from a product ID, do NOT prepend any base URL,
do NOT wrap it in an embed iframe. The link opens Stripe's hosted checkout directly.

After creating all files:
1. Run: npm install
2. Run: npm run build
3. Fix any build errors
4. Verify the build succeeds with exit code 0

Do NOT use placeholder text. Write real, helpful content for the landing page
and the tool itself. The tool should actually work and provide value.


PREVIOUS ATTEMPT FAILED WITH:
Codex exited 1: Reading additional input from stdin...
OpenAI Codex v0.121.0 (research preview)
--------
workdir: /tmp/openclaw-builds/api-cost-anomaly-detector
model: gpt-5.3-codex
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019df49f-36c7-7cd3-893a-cef3e3bffc8b
--------
user
# Build Task: api-cost-anomaly-detector

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: api-cost-anomaly-detector
HEADLINE: Det
Please fix the above errors and regenerate.