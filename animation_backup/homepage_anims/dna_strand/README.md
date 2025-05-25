### To convert these images into the dna strand animation webm, use the command:

```
ffmpeg -framerate 30 -i png_%04d.png -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0 -b:v 1M dna_animation.webm
```

### To convert these images into the dna strand animation mp4, use the command:

```
ffmpeg -framerate 30 -i png_%04d.png -filter_complex "[0:v]format=rgba[fg]; color=c=#f8f5ee@1.0:s=1920x1080:d=1[bg]; [bg][fg]overlay=format=auto" -c:v libx264 -pix_fmt yuv420p -movflags +faststart dna_animation.mp4
```

Here, #f8f5ee can be changed into any desired background color for the video.
