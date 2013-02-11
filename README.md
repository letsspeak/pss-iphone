## Photoshop Javascripts for iPhone development.
--------

### Usage
1.Copy jsx files to /directory/to/Photoshop/Presets/Scripts/  
2.Restart Photoshop application.  
3.Select "File" > "Script" > script you want to execute.

### Resize all retina png for cocos2d
* Loads all *.png files from selected directory.
* Exports bare *-hd.png file on /selectedDirectory/hd/
* Exports half resized *.png file on /selectedDirectory/normal/

### Resize all normal png for cocos2d
* Loads all *.png files from selected directory.
* Exports bare *.png file on /selectedDirectory/normal/
* Exports x2 resized *-hd.png file on /selectedDirectory/hd/
* ResampleMethod is BICUBIC

### Resize all normal png for cocos2d (nearest neighbor)
* loads all *.png files from selected directory.
* exports bare *.png file on /selectedDirectory/normal/
* exports x2 resized *-hd.png file on /selectedDirectory/hd/
* ResampleMethod is NEARESTNEIGHBOR ( for pixelated images)
