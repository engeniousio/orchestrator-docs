---
id: installing
title: Installing Sift
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

## Requirements:

### <Highlight color="#4bb462">Android</Highlight>

- Android SDK
- Java 8
- Test APK should have androidTestImplementation 'com.github.TarCV.tongs:tongs-ondevice:0.5' dependency
  (This dependency will be optional in the future)

### <Highlight color="#1877F2">IOS</Highlight>

- Xcode 12

## Install:

1. Open Terminal.

2. Change the current working directory to the location where you want the cloned directory.

3. Type git clone, and then paste the URL of Sift.

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
  </TabItem>
  <TabItem value="android">

  ```
  git clone https://github.com/engeniousio/sift-android.git
  ```  
  </TabItem>
</Tabs>

4. Press Enter to create your local clone.

## Build:

1. Open Terminal.

2. Make sure that you in the current working directory.

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
  </TabItem>
  <TabItem value="android">

  ```
  ./gradlew assemble
  ```  
  </TabItem>
</Tabs>

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );
