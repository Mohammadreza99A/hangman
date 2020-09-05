# Hangman

Hangman game implemented in Flutter for Android and iOS.

## Getting Started

For help getting started with Flutter, view the online
[documentation](https://flutter.io/).

## How to release

1. update semantic version in both:
   - `android/app/build.gradle`
   - `ios/getgitrevision.sh`
2. check-in

#### **Android** (see https://flutter.io/android-release/):

- `flutter build apk`
  - creates `build/app/outputs/apk/app.apk` (is a release version)
  - This can be uploaded to Google.
- `flutter install` installs this on a device.
  (!This will first uninstall old version and so loose its settings!)

#### **iOS** (see https://flutter.io/ios-release/)

1. Run `flutter build ios` to create a release build (`flutter build` defaults to `--release`)
1. In Xcode, open `Runner.xcworkspace` in your app's `ios` folder.
1. Select **Product > Scheme > Runner**.
1. Select **Product > Destination > Generic iOS Device**.

Finally, create a build archive and upload it to iTunes Connect:

1. Select **Product > Archive** to produce a build archive.
1. In the sidebar of the Xcode Organizer window, select your iOS app, then
   select the build archive you just produced.
1. Click the **Validate...** button. If any issues are reported, address them
   and produce another build. You can reuse the same build ID until you upload
   an archive.
1. After the archive has been successfully validated, click **Upload to App
   Store...**. You can follow the status of your build in the Activities
   tab of your app's details page on [iTunes Connect][itunesconnect_login].

Then:

- Mail from Apple "Missing Push Notification Entitlement" can be safely ignored.
  (There is some call to the Push Notification API in flutter which is not used here.)
- Create new app version in itunes-connect, add update info text and assign the new build.

## Contributors

<a href="https://github.com/Mohammadreza99A">
  <img src="https://github.com/mohammadreza99a.png?size=50">
</a>

## License

Licensed under MIT
