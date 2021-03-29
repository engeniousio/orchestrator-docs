---
id: setup-orchestrator
title: Set up Orchestrator
---

import useBaseUrl from "@docusaurus/useBaseUrl";

## Set up your SSH

Go to the [set up SSH key guide](/ssh) and do all steps to create a new key and then return to this page.

## Create a new node

:::warning

The new node must include [SSH key](/ssh) path and include at least one [device or simulator](/udid).

:::

1. Go to the Sift Nodes page.

2. Click **Add Node** button.

3. Fill out all fields in the form.

- Name: This name will be displayed in the Orchestrator.
- Host: Your SIFT machine is going to connect to this node via ssh. Please provide the IP address of the node. Use `127.0.0.1` to run sift on local machine.
- Port: Your SIFT machine is going to connect to this node via ssh. Please provide the port. If you use local connections the default port will be `22`.
- Username: Name of your local machine.
- Path to private key: Your SIFT machine is going to connect to this node via ssh. Please provide the absolute path on the SIFT machine to a valid ssh private key which will be used for establishing a connection. By default it's located in `~/.ssh/id_rsa`.

:::note
Please do not provide the value of the private key itself - this information is private and you should not share it with us.
:::

- Deployment Path: We will temporarily store the build & results here.
- Xcode Path: Where is Xcode located? By default it's located in `/Applications/Xcode.app`.

### Enviroment variables

- Enviroment variables: This variables will be injected into your .xctestrun and can be used from test environment. You can read more about Enviroment variables [here](/env-vars).

### Device / Simulator

You can read more about Devices and Simulators [here](/udid).

- You can get simulator id by going to Xcode -> Window -> Devices and Simulators;
- Right click on device or simulator in list -> Copy Identifier;
- Сlick **Add Device** or **Add Simulator** and paste id.

4. Save all changes by click **Create** button.

<img alt="creating a new node" src={useBaseUrl("gif/creating-node-min.gif")} />

## Set up global settings

1. Go to the Global Settings page.

2. Fill out all fields in the form.

- Number or Reruns: How many reruns are allowed?
- Tests Per Device: How many tests are allowed per one device / simulator?
- Timeout for Test: SIFT will abort the execution after this number of seconds.
- XCTestrun Path: SIFT uses test-without-build command so we need to locate .xctestrun file.
- Output Directory Path: Where would you like to see the results?
- Setup Script Path: You can optionally add the script to execute before the test run.
- Tear Down Script Path: You can optionally add the script to execute after the test run.

### Enviroment variables

Cooming soon. You can read more about Enviroment variables [here](/env-vars).

3. Save all changes by click **Update** button.

## Tell Orchestrator about your tests

In this case, sift executable is located at `/usr/local/bin/` directory and has name sift.

1. Open the terminal.

2. Copy and Paste command:

```
sift orchestrator --token "your_token" --init
```

3. Instead of "your_token" use [your token](/settings#copy-the-token) from Global Settings.

## Create test plan

Go to the [guide](/test-plans#creating), do all steps and return here.

## Add tests to test plan

Go to the [guide](/test-plans#adding-tests-to-test-plan), do all steps and return here.
