# Deploy to HostPapa — what to upload

When you FTP this site to HostPapa, **upload these** (drag everything except the
"skip" list below):

## Upload to your HostPapa web root

```
index.html
site.webmanifest
assets/
img/
units/
```

That's it. Six top-level items.

## DO NOT upload

```
.git/                  ← version control, not for production
.gitignore             ← only useful for git
_local-only/           ← source photos, raw drone footage, helper scripts
DEPLOY.md              ← this file
```

## Optional after first deploy

Once you've uploaded `units/`, **also upload `units/video/*.mp4` and `*.webm`**
if you've generated them (see `_local-only/scripts/process-drone-video.sh`).
The HTML already references those paths — the page just falls back to the
poster image if the videos are missing.

## Quick FTP checklist for HostPapa cPanel File Manager

1. Open File Manager → navigate to `public_html/` (or whatever your site root is)
2. Upload (or drag) the 6 items above
3. Make sure `index.html` is at the root of `public_html/` (not in a subfolder)
4. Visit https://refractventures.co — should load

## Quick sanity check after upload

Open https://refractventures.co/ — should show the homepage with all property
cards loaded. Then check each unit page:

- https://refractventures.co/units/balcony-suite.html
- https://refractventures.co/units/front-porch-suite.html
- https://refractventures.co/units/gameday.html
- https://refractventures.co/units/little-sugar.html
- https://refractventures.co/units/ozark-gothic-camper.html
- https://refractventures.co/units/cabin-one.html

If any image is broken, that file didn't make it across — re-upload the
specific `units/img/<folder>/` it's missing from.
