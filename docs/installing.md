---
id: installing
title: Installing Sift
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

import useBaseUrl from "@docusaurus/useBaseUrl";

## Requirements:

:::important

This guide only for Mac and Linux.

:::

<Tabs
  groupId="platforms"
  defaultValue="ios"
  values={[
    { label: "IOS", value: "ios" },
    { label: "Android", value: "android" },
  ]}
>
  <TabItem value="ios">
    <ul>
      <li>Xcode 12+</li>
    </ul>
  </TabItem>
  <TabItem value="android">
    <ul>
      <li>Android SDK</li>
      <li>Java 8</li>
      <li>Test APK should have androidTestImplementation 'com.github.TarCV.tongs:tongs-ondevice:0.5' dependency
        (This dependency will be optional in the future)</li>
    </ul>
  </TabItem>
</Tabs>

## Install:

1. Open Terminal.

2. Change the current working directory to the location where you want to store cloned SIFT repository.

3. Copy the URL of SIFT from github.

4. Use git clone command with URL to create your local copy.

<Tabs
  groupId="platforms"
  defaultValue="ios"
  values={[
    { label: "IOS", value: "ios" },
    { label: "Android", value: "android" },
  ]}
>
  <TabItem value="ios">

  ```
  git clone https://github.com/engeniousio/sift.git
  ```
  
  <img alt="Clone sift" src={useBaseUrl("gif/clone-sift-min.gif")} />

  5.&nbsp;Go to the created directory and run setup script:

  ```
  sh make.sh
  ```

  <img alt="sh sift" src={useBaseUrl("gif/sh-command-min.gif")} />  
  </TabItem>
  <TabItem value="android">

  ```
  git clone https://github.com/engeniousio/sift-android.git
  ```

  <img alt="Clone sift" src={useBaseUrl("gif/clone-sift-min.gif")} />  
  </TabItem>
</Tabs>


## Build:

1. Open Terminal.

2. Make sure that you are in the current working directory.

3. Run build command:

<Tabs
  groupId="platforms"
  defaultValue="ios"
  values={[
    { label: "IOS", value: "ios" },
    { label: "Android", value: "android" },
  ]}
>
  <TabItem value="ios">

  ```
  swift build -c release
  ```
  <img alt="Build sift" src={useBaseUrl("gif/build-min.gif")} />

  4.&nbsp;Your executable will be stored here: ```.../sift/.build/x86_64-apple-macosx/release/Sift```.

  5.&nbsp;For easy access to Sift you can move generted Sift executable into your ```usr/local/bin``` folder. After that sift will be accessible directly from terminal from any location.

  </TabItem>
  <TabItem value="android">

  ```
  ./gradlew installDist
  ```  
  Sift binaries will be created in `runner/build/install` directory
  </TabItem>
</Tabs>

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );
