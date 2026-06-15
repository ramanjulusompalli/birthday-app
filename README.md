# Birthday Greeting Web App

A rich React birthday greeting app that can be hosted as a static website on AWS free-tier friendly services.

## Customize

Edit `src/main.jsx`:

- Change `friend.name`
- Change `friend.from`
- Replace the sample photo URLs with your own files in `public`
- The app already includes `public/birthday-song.wav`

Example photo path:

```js
src: '/photo-1.jpg'
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production files will be in `dist`.

## Deploy On AWS Free Tier

Recommended simple route:

1. Create an S3 bucket.
2. Enable static website hosting.
3. Upload the contents of `dist`.
4. Make the bucket files publicly readable, or place CloudFront in front of the bucket.
5. Share the S3 website endpoint or CloudFront URL with your friend.

For a nicer public link and HTTPS, use CloudFront with the S3 bucket as origin. S3 storage and CloudFront free-tier allowances are usually enough for a small birthday greeting site.
