### To convert these images into the caapi animation webm:

Rename PNG_0035_transparentbg.png to PNG_0035.png. Then enter the command:

```
ffmpeg -framerate 12 -i PNG_%04d.png -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0 -b:v 1M caapi_animation.webm
```

### To convert the images into the caapi animation mp4:

Rename PNG_0035_coloredbg.png to PNG_0035.png. Then enter the command:

```
ffmpeg -framerate 12 -i PNG_%04d.png -filter_complex "[0:v]format=rgba[fg]; color=c=#f8f5ee@1.0:s=2100x2100:d=1[bg]; [bg][fg]overlay=format=auto" -c:v libx264 -pix_fmt yuv420p -movflags +faststart caapi_animation.mp4
```

Here, #f8f5ee can be changed into any desired background color for the video. The background color of the final frame can be edited using any photo editing tool.
