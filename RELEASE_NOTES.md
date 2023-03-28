## v1.1.0

### Bugfixes
* [#185] Refactored HP and updated schema to account fix HP issues on PCs
* [#199] toggling a light source throws an error without a token on scene
* [#201] Chat messages missed from light tracker events due to errors thrown
* [#202] Thrown error prevented the light from being updated on token
* [#207] Fixes issue where item was deleted before light could be activated
* [#208] Character sheet item context menu not working for non-GM users
* [#210] Possible race condition in Light Tracker
* [#214] Dice roller not honouring requested rollMode

### Enhancements
* [#139] Added Guided Tour for explaining the Lightsource Tracker
* [#190] Added HP rolling for players by level, including data migration
* [#195] Added gulp livereloading for developers
* [#196] Added Lightsource Tracker testing
* [#198] & [#216] Added contributed i18n updates for German, Finnish, French translation
* [#211] Increase granularity of Light Tracker intervals as allowed by performance enhancements
* Various small tweaks to character sheet CSS and layout

## v1.0.2

### Bugfixes

* [#189] When a custom effect was renamed, it caused an error that prevented the selector app opening

### Enhancements

* [#188] Added contributed i18n updates for Finnish, German and Swedish languages

## v1.0.1

### Bugfixes

* [#178] Fixed NaN display issue with ranged attacks

## v1.0.0

Initial release.