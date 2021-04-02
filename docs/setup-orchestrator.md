---
id: setup-orchestrator
title: Set up Orchestrator
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Set up your SSH

If you can connect to your node (or local machine) via ssh without password, then connection set up is right:

[try out your login](/ssh#step-3-try-out-your-login) and continue set up Orchestrator.

or:

go to the [set up SSH key](/ssh) guide and do all steps to create a new key and then return to this page.

## Create a new node

:::warning

The new node must include [SSH key](/ssh) path and include at least one [device or simulator](/udid).

:::

1. Go to the Sift Nodes page.

2. Click **Add Node** button.

3. Fill out all fields in the form.

- Name: This name will be displayed in the Orchestrator.
- Host: Your SIFT machine is going to connect to this node via ssh. Please provide the IP address of the node. Use `127.0.0.1` to run sift on local machine.
- Port: Your SIFT machine is going to connect to this node via ssh. Please provide the port. When running sift on a local machine the port should be `22`.
- Username: Name of your local machine.
- Path to private key: Your SIFT machine is going to connect to this node via ssh. Please provide the absolute path on the SIFT machine to a valid ssh private key which will be used for establishing a connection. By default it's located in `/Users/user_name/.ssh/id_rsa` where user_name is your machine username.

:::note
Please do not provide the value of the private key itself - this information is private and you should not share it with us.
:::

- Deployment Path: We will temporarily store the build & results here.

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
        <li>
            Xcode Path: Where is Xcode located? By default it's located in `/Applications/Xcode.app`.
        </li>
    </ul>
  </TabItem>
  <TabItem value="android">
    <ul>
        <li>
            Android Sdk Path: Where is Android SDK located. This is the directory that contains `platform` and `platform-tools` subdirectories. Usually ANDROID_SDK_ROOT/ANDROID_HOME environment variable contains path of this directory.
        </li>
    </ul>
  </TabItem>
</Tabs>

### Enviroment variables and instrumentation arguments

<Tabs
  groupId="platforms"
  defaultValue="ios"
  values={[
    { label: "IOS", value: "ios" },
    { label: "Android", value: "android" },
  ]}
>
  <TabItem value="ios">
    Enviroment variables - Optional. This variables will be injected into your .xctestrun and can be used from test environment. You can read more about Enviroment variables <a target="_blank" href="/env-vars">here</a>.
  </TabItem>
  <TabItem value="android">
    Instrumentation arguments - Optional. These are additional arguments passed to the  instrumentation test runner (usually AndroidJUnitRunner). They can be used to pass credentials or environment settings (such as backend base URL) to tests executing on your devices.
  </TabItem>
</Tabs>

### Device / Simulator

You can read more about Devices and Simulators [here](/udid).

<Tabs
  groupId="platforms"
  defaultValue="ios"
  values={[
    { label: "IOS", value: "ios" },
    { label: "Android", value: "android" },
  ]}
>
  <TabItem value="ios">
    <ol>
        <li>
            You can get simulator id by going to Xcode -> Window -> Devices and Simulators;
        </li>
        <li>
            Right click on device or simulator in list -> Copy Identifier;
        </li>
        <li>
            Сlick <strong>Add Device</strong> or <strong>Add Simulator</strong> and paste id.
        </li>
    </ol>
  </TabItem>
  <TabItem value="android">
    Devices - Device serials (you can get them with `adb devices` command). Emulator serials can be used here if you prefer to manage them manually.
    Simulators - Names of the emulators (AVD names) to automatically start/stop for a test run.
  </TabItem>
</Tabs>

4. Save all changes by click **Create** button.

<img alt="creating a new node" src={useBaseUrl("gif/creating-node-min.gif")} />

## Set up global settings

1. Go to the Global Settings page.

2. Fill out all fields in the form.

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
        <li>
            Number or Reruns: How many reruns are allowed?
        </li>
        <li>
            Tests Per Device: How many tests are allowed per one device / simulator?
        </li>
        <li>
            Timeout for Test: SIFT will abort the execution after this number of seconds.
        </li>
        <li>
            XCTestrun Path: SIFT uses test-without-build command so we need to locate .xctestrun file.
        </li>
    </ul>
  </TabItem>
  <TabItem value="android">
    <ul>
        <li>
            Max retries per case: How many reruns are allowed?
        </li>
        <li>
            Max retries per run: How many retries per one test run are allowed?
        </li>
        <li>
            Timeout for Test: Sift will abort execution of a test case after this number of seconds.
        </li>
        <li>
            Path to the application APK: Path to an APK containing a debug build of your application under test (usually it is built with `./gradlew :app:assembleDebug` command). 
        </li>
        <li>
            Path to the androidTest APK: Path to an APK that contains your tests (usually it is built with `./gradlew :app:assembleDebugAndroidTest` command)
        </li>
        <li>
            Report Title: Title to use for a generated HTML report.
        </li>
        <li>
            Report Subtitle: Optional subtitle to use for a generated HTML report.
        </li>
    </ul>
  </TabItem>
</Tabs>

- Output Directory Path: Where would you like to see the results?
- Setup Script Path: You can optionally add the script to execute before the test run.
- Tear Down Script Path: You can optionally add the script to execute after the test run.

### Enviroment variables

Cooming soon. You can read more about Enviroment variables [here](/env-vars).

3. Save all changes by click **Update** button.

## Tell Orchestrator about your tests

1. Open the terminal.

2. Copy and Paste command:

<Tabs
  groupId="platforms"
  defaultValue="ios"
  values={[
    { label: "IOS", value: "ios" },
    { label: "Android", value: "android" },
  ]}
>
  <TabItem value="ios">
  In this case, sift executable is located at `/usr/local/bin/` directory and has name sift.


  ```
  sift orchestrator --token "your_token" --init
  ```
  </TabItem>
  <TabItem value="android">
  In this case, sift executable is located at `/usr/local/bin/` directory and has name sift.


  ```
  sift orchestrator init --token "your_token"
  ```
  </TabItem>
</Tabs>

3. Instead of "your_token" use [your token](/settings#copy-the-token) from Global Settings.

## Create test plan

Go to the [guide](/test-plans#creating), create a new test plan and return here.

## Add tests to test plan

Go to the [guide](/test-plans#adding-tests-to-test-plan), add tests to the created test plan and return here.
