# Drone Video Assets

This folder holds web-optimized drone footage used as backgrounds on:
- Homepage Faye Social House property card visual
- units/gameday.html hero gallery

To populate this folder, run from the repo root:

```bash
bash process-drone-video.sh
```

That script reads the original DJI MP4s from your Google Drive Faye - Hill LLC
Marketing folder, trims to ~18 seconds, encodes web-friendly MP4 + WebM, and
generates poster JPEGs.

If the HTML page renders with the static poster image (no motion), it means
the .mp4/.webm files haven't been generated yet — run the script.
