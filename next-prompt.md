---
page: hostinger-build-fix
---
# Hostinger Node.js Build Fix Protocol

**Objective:** The Hostinger build sequence crashed due to `tw-animate-css` missing from the production environment (it was incorrectly categorized under `devDependencies`). We have manually moved it to `dependencies` in `package.json`. You must now update the package manager lock files and autonomously generate the final deployment zip.

## Execution Requirements:

1. Open the terminal at the root of the project (`/calcmoney`).
2. Run `npm install` to regenerate `package-lock.json` with `tw-animate-css` correctly assigned to the production dependency tree.
3. Verify the local build resolves cleanly by running `npm run build`.
4. Run the following exact command in the terminal to package the deployment payload, strictly excluding local dependencies and secret caches:

```bash
zip -r Aura_Deploy_Final_v3.zip . -x "node_modules/*" -x ".next/*" -x ".git/*" -x "*.log" -x "*.env*"
```

5. Confirm the zip `Aura_Deploy_Final_v3.zip` is generated, ensuring `package-lock.json` has been updated and no `.env` files are trapped inside. Hand it to the Project Manager for deployment.
