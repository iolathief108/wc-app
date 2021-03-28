![alt text](logo.png)

# [WC App](https://marketingpro.lk)
An app for woocommerce website

### Change version number
- `package.json`
- `android/app/build.gradle`
    - version code and version name
- `README.md`

### Debug and Release Mode change
comment the `signingConfigs.release` while debugging in `android/app/build.gradle`

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


### Step to create fresh Clone (clone is tested only in android not for ios)
- clone fresh project from github
- remove the git files
- rename the project
  - backup the android folder (copy)
  - run command `npx react-native-rename "app-name-without-space" -b com.site.project`
  - from folder you've copied previously copy the all the files in directory `/android/app/src/main/java/com.whatever.app_or_not/[files]` to curresponding directory
  - in `MainActivity.java` line 1 change package name and line 13 change app name
  - in `MainApplication.java` line 1 and 65 change package 
  - then these are the all the things you have to change including what rn-rename will do, below rn-re are automatically done by `rn-rename`, change other than rn-rename does
    - app name
      - `App.tsx` home screen title property
      - `ios/zeemart/LaunchScreen.storyboard` line 25 property text
      - `android/app/src/main/res/values/strings.xml` line 2 app name
      - rn-re `setting.gradle` line 1
      - rn-re `ios/appname-other/` folder names
    - package name
      - `android/app/_BUCK` android_build_config android_resource package names
      - rn-re `android/app/main/androidManifest.xml`
      - rn-re `android/build.gradle` line 132
      - rn-re `ios/podfile` line 5, 11, 26, 27, 29
- run command `yarn android` to see if everything is OK (assume that url in the config is working)
- if there is an error fix it and update the doc, if it working then continue
- upload wc-app-server-files to the server
- make sure graphql is enabled and wc-app-server-files are working
- change website url
  - `codegen.yml` schema property
  - `.graphqlconfig` url
  - `src/config.ts` website url and phone number
- product screen
  - `getShortDescription` function
  - `ContactComp` function
- contact screen
- OrderCard component `orderCardClick` function

### adding new assets or delete an assets
run command  `npx react-native link`

### add/remove fonts
- add fonts
  - download the font and rename the font like below
    - `Roboto` or `RobotoBlack` -> `Roboto-Black`
    - `SFUIDisplayBold` -> `SFUIDisplay-Bold`
    - Reason https://mehrankhandev.medium.com/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4
  - link assets | run `npx react-native link`
- Remove Fonts
  - remove the fonts in `/assets` folder
  - and remove the fonts in `/android/app/src/main/assets/fonts`

