### To convert these images into the beaker animation webm, use the command:

```
ffmpeg -framerate 8 -i png_%04d.png -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0 -b:v 1M beaker_animation.webm
```

### To convert these images into the beaker animation mp4, use the command:

```
ffmpeg -framerate 8 -i png_%04d.png -filter_complex "[0:v]format=rgba[fg]; color=c=#f8f5ee@1.0:s=676x646:d=1[bg]; [bg][fg]overlay=format=auto" -c:v libx264 -pix_fmt yuv420p -movflags +faststart beaker_animation.mp4
```

Here, #f8f5ee can be changed into any desired background color for the video.
