---
id: setup-orchestrator
title: Set up Orchestrator
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Set up your SSH

:::note
You can use Sift without setting up SSH connections and instead use devices connected to the same host (or emulators/simulators set up on the host) where Sift is executed. In that case skip to **Create a new node** section.
:::

If you can connect to your node (or local machine) via ssh without password, then connection set up is right:

[try out your login](/ssh#step-3-try-out-your-login) and continue set up Orchestrator.

or:

go to the [set up SSH key](/ssh) guide and do all steps to create a new key and then return to this page.

## Create a new node

A node is a host that have real devices connected to it (or emulator/simulators set up).

:::warning
The new node must include [SSH key](/ssh) path and include at least one [device or simulator](/udid).
:::

:::note
You can use paths relative to Sift working directory and environment variables when specifying paths in your configuration.
:::

1. Go to the Sift Nodes page.

2. Click **Add Node** button.

3. Fill out all fields in the form.
:::note
You can use an environment variable(s) in **Name**, **Host**, **Username** and **Path to private key** fields.
:::
- **Name**: This name will be displayed in the Orchestrator.
- **Host**: Your SIFT machine is going to connect to this node via ssh. Please provide the IP address of the node. Use `127.0.0.1` to use devices connected to the same host (or emulators/simulators set up on the host) where Sift is executed.
- **Port**: Your SIFT machine is going to connect to this node via ssh. Please provide the port. Use `22` to use devices connected to the same host (or emulators/simulators set up on the host) where Sift is executed.
- **Username**: Name of your local machine. You can use any text when using devices connected to the same host (or emulators/simulators set up on the host) where Sift is executed.
- **Path to private key**: Your SIFT machine is going to connect to this node via ssh. Please provide the absolute path on the SIFT machine to a valid ssh private key which will be used for establishing a connection. By default it's located in `/Users/user_name/.ssh/id_rsa` where user_name is your machine username. You can use any path (even non existing) when using devices connected to the same host (or emulators/simulators set up on the host) where Sift is executed.

:::note
Please do not provide the value of the private key itself - this information is private and you should not share it with us.
:::

- **Deployment Path**: Sift will temporarily store the build & results here.

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
          <strong>Xcode Path</strong>: Where is Xcode located? By default it's located in <code>/Applications/Xcode.app</code>.
        </li>
    </ul>
  </TabItem>
  <TabItem value="android">
    <ul>
        <li>
          <strong>Android Sdk Path</strong>: Where is Android SDK located. This is the directory that contains <code>platform</code> and <code>platform-tools</code> subdirectories. Usually ANDROID_SDK_ROOT/ANDROID_HOME environment variable contains path of this directory.
          <p>Note: You can use an environment variable here. For example <code>$ANDROID_SDK_ROOT</code></p>
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
    <strong>Enviroment variables</strong> - Optional. This variables will be injected into your .xctestrun and can be used from test environment. You can read more about Enviroment variables <a target="_blank" href="/env-vars">here</a>.
  </TabItem>
  <TabItem value="android">
    <p><strong>Instrumentation arguments</strong> - Optional. These are additional arguments passed to the  instrumentation test runner (usually AndroidJUnitRunner). They can be used to pass credentials or environment settings (such as backend base URL) to tests executing on your devices.</p>
    <p>Note: You can use an environment variable in instrumentation argument values. This is useful to provide some parameters from your CI (for example to provide credentials and avoid storing them in Orchestrator).</p>
    <p>Note: You can use instrumentation arguments to provide AndroidJUnitRunner parameters like <strong>package</strong>, <strong>notAnnotations</strong>. When based on these parameters AndroidJUnitRunner excludes tests enabled in Orchestrator, they will be shown as skipped in the final report.</p>
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
    <ul>
      <li>
        Devices - Device serials (you can get them with <code>$ANDROID_SDK_ROOT/platform-tools/adb devices</code> command). Emulator serials (like <code>emulator-5554</code>) can be used here if you prefer to manage emulators outside of Sift.
      </li>
      <li>
        Simulators - Names of the emulators (AVD names) to automatically start/stop for a test run.
      </li>
    </ul>
  </TabItem>
</Tabs>

4. Save all changes by clicking **Create** button.

<img alt="creating a new node" src={useBaseUrl("gif/creating-node-min.gif")} />

## Set up global settings

1. Go to the **Global Settings** page.

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
            <strong>Number or Reruns</strong>: How many reruns are allowed?
        </li>
        <li>
            <strong>Tests Per Device</strong>: How many tests are allowed per one device / simulator?
        </li>
        <li>
            <strong>Timeout for Test</strong>: SIFT will abort the execution after this number of seconds.
        </li>
        <li>
            <strong>XCTestrun Path</strong>: SIFT uses test-without-build command so we need to locate .xctestrun file.
        </li>
    </ul>
  </TabItem>
  <TabItem value="android">
    <h5>Note: You can use environment variables in text and path configuration fields.</h5>
    <ul>
        <li>
          <strong>Max retries per case</strong>: How many reruns are allowed?
        </li>
        <li>
          <strong>Max retries per run</strong>: How many retries per one test run are allowed?
        </li>
        <li>
          <strong>Timeout for Test</strong>: Sift will abort execution of a test case after this number of seconds.
        </li>
        <li>
            <strong>Path to the application APK</strong>: Path to an APK containing a debug build of your application under test (usually it is built with <code>./gradlew :app:assembleDebug</code> command, binaries are build in a directory like app/build/outputs/apk/debug). 
        </li>
        <li>
            <strong>Path to the androidTest APK</strong>: Path to an APK that contains your tests (usually it is built with <code>./gradlew :app:assembleDebugAndroidTest</code> command,  binaries are build in a directory like app/build/outputs/apk/androidTest/debug)
        </li>
        <li>
            <strong>Report Title</strong>: Title to use for a generated HTML report.
        </li>
        <li>
            <strong>Report Subtitle</strong>: Optional subtitle to use for a generated HTML report.
        </li>
    </ul>
  </TabItem>
</Tabs>

- **Output Directory Path**: Where would you like to see the results? Please, choose a directory where you like to store the results. The directory will be created automatically if it doesn't exist.
- **Setup Script Path**: You can optionally add the script to execute before the test run.
- **Tear Down Script Path**: You can optionally add the script to execute after the test run.

### Enviroment variables/Instrumentation arguments

You can read more about Enviroment variables [here](/env-vars).

3. Save all changes by clicking **Update** button.

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
  In this case, sift executable is located at <code>/usr/local/bin/</code> directory and has name sift.


  ```
  sift orchestrator --token "your_token" --init
  ```
  </TabItem>
  <TabItem value="android">
  If your sift executable is located at <code>/usr/local/bin/</code> use the following command:

  ```
  sift orchestrator init --token "your_token"
  ```

  To run Sift from the current directory use the following command:

  ```
  ./sift orchestrator init --token "your_token"
  ```
  </TabItem>
</Tabs>

3. Instead of "your_token" use [token](/settings#copy-the-token) from Global Settings.

<img alt="Tell Orchestrator about your tests" src={useBaseUrl("img/sift-init-min.png")} />

## Create test plan

:::warning 

When creating a new test plan make sure that at least one node is enabled on [**Test Plan Settings**](/test-plan-settings) page. It's not possible to run tests without enabled nodes.

:::

Go to the [guide](/test-plans#creating), create a new test plan and return here.

## Add tests to test plan

Go to the [guide](/test-plans#adding-tests-to-test-plan), add tests to the created test plan and go to the next step: [Running Sift with Orchestrator](/running).
