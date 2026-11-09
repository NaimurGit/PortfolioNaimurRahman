# TurjoFolio — MERN Portfolio

A portfolio site for **Md Naimur Rahman**, split into two apps:

| Folder   | Stack                                    | Port |
| -------- | ---------------------------------------- | ---- |
| `User/`  | React 19 + Vite + TypeScript + Tailwind  | 5173 |
| `Server/`| Next.js 16 (route handlers) + Mongoose   | 3001 |

The React frontend reads all resume content from the Next.js REST API, which stores it in MongoDB.

## 1. Prerequisites

- Node.js 20+

You do **not** need to install MongoDB. `npm run dev` in `Server/` starts a bundled
MongoDB instance and seeds it automatically. (You can still point it at Atlas — see step 5.)

## 2. Install

```bash
cd Server && npm install
cd ../User && npm install
```

## 3. Run both apps

```bash
# terminal 1
cd Server
npm run dev      # starts MongoDB + API on http://localhost:3001

# terminal 2
cd User
npm run dev      # http://localhost:5173
```

On first run the database is empty, so the server seeds the portfolio content from
`Server/scripts/seed-data.ts` automatically. Edit that file to change any content, then run
`npm run seed` (with `npm run db` or `npm run dev` running) to refresh it.

## 4. Server scripts

| Command        | What it does                                                          |
| -------------- | --------------------------------------------------------------------- |
| `npm run dev`  | Starts the local database **and** the API together (recommended)      |
| `npm run db`   | Starts only the local MongoDB instance                                 |
| `npm run api`  | Starts only the Next.js API (assumes a database is already running)   |
| `npm run seed` | Replaces all portfolio content in the database                        |
| `npm run build`| Production build                                                      |

The embedded database stores its files in `Server/.data/` (git-ignored), so your data
survives normal restarts. To reset everything, stop the server, delete `Server/.data`, and
start again.

## 5. Optional: use MongoDB Atlas instead of the bundled database

Edit `Server/.env.local` and set `MONGODB_URI` to your Atlas connection string:

```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/turjofolio
CORS_ORIGIN=http://localhost:5173,http://127.0.0.1:5173
```

When `MONGODB_URI` points somewhere other than localhost, `npm run dev` skips the bundled
database and connects to Atlas directly. Run `npm run seed` once to populate it.

### Frontend API URL

`User/.env.local`:

```env
VITE_API_URL=http://localhost:3001
```

Any origin calling the API must be listed in `CORS_ORIGIN` on the server.

## API

| Method | Route             | Description                                  |
| ------ | ----------------- | -------------------------------------------- |
| GET    | `/api/portfolio`  | Everything in one payload (used by the site) |
| GET    | `/api/profile`    | Profile / hero data                          |
| GET    | `/api/projects`   | Projects                                     |
| GET    | `/api/skills`     | Skill groups                                 |
| GET    | `/api/education`  | Education history                            |
| GET    | `/api/activities` | Extra-curricular activities                  |
| POST   | `/api/contact`    | Save a contact message to MongoDB            |

All responses look like `{ "ok": true, "data": ... }`; errors return
`{ "ok": false, "error": "..." }` with a non-2xx status.

## Project structure

```
Server/
├─ scripts/
│  ├─ seed-data.ts        # all portfolio content
│  ├─ seed.ts             # `npm run seed`
│  ├─ local-mongo.ts      # `npm run db` (bundled MongoDB)
│  └─ lib/
│     ├─ ensure-seed.ts   # shared seeding helpers
│     └─ mongo-utils.ts   # URI parsing / embedded instance
└─ src/
   ├─ app/api/*/route.ts  # REST endpoints + CORS
   └─ lib/
      ├─ api.ts           # CORS helpers / response shapers
      ├─ db.ts            # cached Mongoose connection
      └─ models/          # Profile, Project, Skill, Education, Activity, Message

User/
├─ public/
│  ├─ naimur.png          # hero portrait
│  ├─ favicon.png
│  └─ resume/…pdf         # downloadable CV
└─ src/
   ├─ components/         # Navbar, Hero, About, Projects, Skills, Education, Contact, Footer
   ├─ lib/api.ts          # fetch helpers against VITE_API_URL
   └─ App.tsx
```

## Notes

- `Server/.env.local` and `User/.env.local` are git-ignored — keep real credentials out of git.
- Contact messages are stored in the `messages` collection; nothing sends email yet.
- `npm run build` works in both folders for production builds.
