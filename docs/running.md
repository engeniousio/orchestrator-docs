---
id: running
title: Running Sift with Orchestrator
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

1. Copy your [organization token](/settings/#token) from the dashboard, see the page "Global settings" (read more about [Global Settings](/settings/)).

2. In the terminal paste the token and the test plan name (read more about [test plans](/test-plans/)).

:::tip

Test Orchestrator will always provide default test-plans with names: default_ios_plan (for iOS platform) and default_android_plan (for Android platform)

:::

3. Run command:

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
  sift orchestrator --token 'your token' --test-plan 'name of testplan' --status 'quarantined'
  ```
  </TabItem>
  <TabItem value="android">

  Go to the Project folder and run:

  ```
  sift orchestrator run --token 'your token' --test-plan 'name of testplan' --status 'quarantined'
  ```
  </TabItem>
</Tabs>

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );
