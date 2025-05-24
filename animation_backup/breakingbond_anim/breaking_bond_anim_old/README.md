### To convert these images into the original breaking bond animation, use the command:

```
ffmpeg -framerate 16 -i %05d.png -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0 -b:v 1M breakingbond_animation.webm
```
