
## Description

This repo is a sort of journal that kept track of my attempts to find the right library for my needs.
The notes helped me write my final research paper and helped justify why I used AnimeJS over any of the other technologies. 

### V1 -- D3.js

* snazzy JS framework
* pros
    * manipulates DOM based on data
    * beautiful animations
    * kind of a standard for graphics
* cons
    * could not figure out how to pull off what I wanted
    * kinda fat and heavy
    * aimed at graphs/charts instead of pure animations

### V2 -- TKinter

* pros
    * it's in Pythonn
* cons
    * super ugly
    * too hands-on (relative distance, no easy interpolation, FPS controls)
    * it's TKinter


### V3 -- SVG.js
* pros
    * pretty straightforward usage, easy to fiddle with and adjust
* cons
    * interpolation options were totally messed up and didn't actually work as described
    * animation queue was weird and dumb -- it seemed like it precomputed animations and applied settings to queue, instead of per animation
    * some kind of retarded latency or something? couldn't move two SVGs at the same time?

### V4 -- SVG.js 2.0

* just an experimental V3

### V5 -- anime

* beautiful animation
* super simple
* no latency
* perfect interpolation
* logical stack queue
* perfect in every way <3
