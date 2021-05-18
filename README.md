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
  - then these are the all the things you have to change including what rn-rename will do, below rn-re (beginning of the line) are automatically done by `rn-rename`, change other than rn-rename does
    - app name
      - `src/App.tsx` home screen title property
      - `ios/zeemart/LaunchScreen.storyboard` line 25 property text
      - `android/app/src/main/res/values/strings.xml` line 2 app name
      - rn-re `setting.gradle` line 1
      - rn-re `ios/appname-other/` folder names
    - package name
      - `android/app/_BUCK` android_build_config android_resource package names (line 38 43)
      - rn-re `android/app/src/main/androidManifest.xml`
      - rn-re `android/app/build.gradle` line 132
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

### Upload to playstore
1. run command `keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000` to  generate a file called `my-upload-key.keystore` also this command will prompt you to enter a password. move that file to the `/android/app/` directory.
2. edit file `android/gradle.properties` MYAPP_UPLOAD_STORE_PASSWORD, MYAPP_UPLOAD_KEY_PASSWORD (KEYS) replace the value of this KEYS with the password you have entered (both)
3. file `android/app/build.gradle` change `signingConfig signingConfigs.debug` to `signingConfig signingConfigs.release` (lines around 169)
4. run command `cd android` `gradlew bundleRelease`
5. explain - step 1 will create a unique file even if you are execute the same command with same password. which is this file is associated with the final release build(step 4). to update the app you will require some data which is file, alias and password. so keep those information safe. because this app is a template. so keep the datas(or files) that are needed to create the same app (possibly to update). may be the color configuration file, icons, main logo, description photos, screenshot, logo you have uploaded to the android dev console. 
