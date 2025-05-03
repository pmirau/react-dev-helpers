## How to add new version

1. Commit all new changes
2. Bump `version` in package.json
3. `npm run build`
4. Create a new commit "vX.X.X" that includes package.json version change and updated code in `dist/`
5. `npm publish`
