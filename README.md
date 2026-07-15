# فا

Luxury residential architect website — **design + execution management**.  
Target: high-end domestic Iranian clients.  
Positioning: credibility and conversion engine (not a portfolio gallery).

**Repo:** [github.com/massoudsh/archlang](https://github.com/massoudsh/archlang)

---

## Docs

| Doc | Purpose |
|-----|--------|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Full architecture + PRD task breakdown |
| [ROADMAP.md](./ROADMAP.md) | Product roadmap and milestones |
| [TASKS.md](./TASKS.md) | Task checklist (M1–M4) |

## Run the UI

```bash
cd web && npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000). RTL Persian layout, design system (warm white, charcoal, olive/bronze), Home with Hero, Services, Featured projects, Authority block, CTA.

**Stack (MVP):** Next.js (App Router), TailwindCSS, Framer Motion (minimal), static data, ArvanCloud (Docker/Container + CDN).

**Scope:** Home, Projects, Project Detail, Services, About, Contact. No blog, no user accounts.

## Deployment (ArvanCloud)

The app is containerized (`web/Dockerfile`, Next.js standalone output) for ArvanCloud's Container/PaaS platform. See [DEPLOY.md](./DEPLOY.md) for build and deploy steps.

---

*Control · Precision · Authority · Calm confidence*
