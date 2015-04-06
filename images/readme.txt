Put all non-sprite images into Source folder.

* run "grunt image-min" to reduce file size for bitmaps.
* run "grunt svg-min" to reduce svg file size.
* run "grunt responsive-images" to create thumbnail sets as defined in gruntfile.js.

or

* just run "grunt images" to run all of the above plus sprites

Finished images will be placed in the images root.

---

Put sprite images into sprites folder.

* run "grunt sprite" (or "grunt images") to create a single sprite image and scss partial.