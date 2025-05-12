# Readme

Preconfigured With `tailwind`.
Use `biome` instead of `eslint` and `prettier` for linting and formatting. (please install `biome` extension in your editor)

Optional: Run `npm run setup` to setup the commit hook

Dev: `npm run dev`  
Build: `npm run build`  
Start: `npm start` (Note: If you are not using Cloudflare, please change the Start command to `npm run build && vinxi start` in package.json and read the comment in `app.config.ts`)

hint: to type check, just run `npx tsc`, works everywhere

Ready to deploy on Cloudflare:

1. Sign in to Cloudflare
2. Navigate to `Worker & Pages`
3. Click `Create`
4. Select a repository
5. Give it a name
6. Finally `Save and Deploy`
