# NeoWX

Welcome to NeoWX - the most advanced weewx theme.

NeoWX is based on the popular SofaSkin.

## Documentation

Have a look at the web site: https://projects.neoground.com/neowx

Frequently asked questions are also answered there.

## Installation

First download the latest version and put it on your linux machine where weewx is running. Then install it via wee_extension: `wee_extension --install=neowx-1.0.zip`.
Edit the `weewx.conf` (located in most cases at `/etc/weewx/weex.conf` or `/home/weewx/weewx.conf`) section `[StdReport]` -> `[[StandardReport]]` -> `skin` (ca. line 149) and set `skin = neowx`. Restart weewx `sudo service weewx stop && sudo service weewx start`. 

## Uninstall

Just use wee_extension again: `wee_extension --uninstall=neowx`. But you can also manually change the skin defined in `weewx.conf` and remove the skin/neowx directory. 


## Resources

### Logo

Weather icon used in logo:
by Netguru
https://dribbble.com/shots/2923788-Free-Weather-Icons

### Weather Icons

This theme uses the great weather icons by Erik Flowers / Lukas Bischoff.
Find out more: https://erikflowers.github.io/weather-icons
