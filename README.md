![alt text](logo.png)

# [WC App](https://marketingpro.lk)
An app for woocommerce website

### How to change version number
- `package.json`
- `android/app/build.gradle`
    - version code and version name
- `README.md`

### Debug and Release Mode change
comment the `signingConfigs.release` while debugging in `android/app/build.gradle`

### Assets Link

### TODO
- make app easy to replicate by making a config file
- code cleanup
- search page products loading issue
- make it only portrait mode
- Variation in order placing
- Loading logo
- user specified custom fonts are reflecting to the app
- Cart option other places
- Variation setup both checkout and product page
- Disable spring mode
- readme file steps
- remove session based implementation (doc github gist)
- reducing the quantity - zero quantity should remove the product


### TODO CLONE
- clone fresh project from github
  remove the git files
- product screen
  - `getShortDescription` function
  - `ContactComp` function
- contact screen
- link assets | run  `npx react-native link`


### Add Font
- download the font and rename the font like below
  - `Roboto` or `RobotoBlack` -> `Roboto-Black`
  - `SFUIDisplayBold` -> `SFUIDisplay-Bold`
  - Reason https://mehrankhandev.medium.com/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4
- link assets | run `npx react-native link`
- 

### Remove Fonts
- remove the fonts in `/assets` folder
- and remove the fonts in `/android/app/src/main/assets/fonts`
