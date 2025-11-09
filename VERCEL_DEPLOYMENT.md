# Vercel Deployment Configuration

## Current Setup

1. **Static Build**: Client builds to `client/dist/public/`
2. **API Function**: Serverless function at `api/index.ts`
3. **Routes**: 
   - `/api/*` → Serverless function
   - Everything else → Static files

## Important Notes

- The build must be done with `base: '/'` in vite.config.ts
- Vercel's static-build will automatically run `npm run build` in the client directory
- The `distDir` in vercel.json is relative to the client directory
- Assets should use absolute paths (starting with `/`)

## Troubleshooting 404 Errors

If you get 404 errors:

1. **Check build output**: Ensure `client/dist/public/index.html` exists
2. **Check asset paths**: Assets should be at `/assets/...` not `./assets/...`
3. **Rebuild**: Delete `client/dist` and rebuild
4. **Check Vercel logs**: Look for build errors in Vercel dashboard

## Next Steps

1. Delete the old build: `rm -rf client/dist`
2. Rebuild: `cd client && npm run build`
3. Verify paths in `client/dist/public/index.html` are absolute
4. Commit and push
5. Check Vercel deployment logs

