### To convert these images into the caapi animation, use the command:

```
ffmpeg -framerate 12 -i png_%04d.png -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0 -b:v 1M caapi_animation.webm
```
