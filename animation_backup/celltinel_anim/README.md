### To convert these images into the celltinel animation webm:

Rename png_0022_transparentbg.png to png_0022.png. Then enter the command:

```
ffmpeg -framerate 8 -i png_%04d.png -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0 -b:v 1M celltinel_animation.webm
```
### To convert these images into the celltinel animation mp4:

Rename png_0022_coloredbg.png to png_0022.png. Then enter the command:

```
ffmpeg -framerate 8 -i png_%04d.png -filter_complex "[0:v]format=rgba[fg]; color=c=#f8f5ee@1.0:s=1920x1080:d=1[bg]; [bg][fg]overlay=format=auto" -c:v libx264 -pix_fmt yuv420p -movflags +faststart celltinel_animation.mp4
```

Here, #f8f5ee can be changed into any desired background color for the video. The background color of the final frame can be edited using any photo editing tool.
