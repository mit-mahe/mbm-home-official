### To convert these images into the new caapi animation webm:

Rename frame0062_transparentbg.png to frame0062.png. Then enter the command:

```
ffmpeg -framerate 16 -i frame%04d.png -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0 -b:v 1M caapi_animation.webm
```

### To convert the images into the new caapi animation mp4:

Rename frame0062_coloredbg.png to frame0062.png. Then enter the command:

```
ffmpeg -framerate 16 -i frame%04d.png -filter_complex "[0:v]format=rgba[fg]; color=c=#f8f5ee@1.0:s=2100x2100:d=1[bg]; [bg][fg]overlay=format=auto" -c:v libx264 -pix_fmt yuv420p -movflags +faststart caapi_animation.mp4
```

Here, #f8f5ee can be changed into any desired background color for the video. The background color of the final frame can be edited using any photo editing tool.
