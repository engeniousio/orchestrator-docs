---
id: running
title: Running Sift with Orchestrator
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

1. Copy the [organization token](/settings/#token) from the dashboard, see the page "Global settings" (read more about [Global Settings](/settings/)).

2. In the terminal paste token and test plan name.

:::tip

Test Orchestrator always will provide the default test-plan name with the name: default_ios_plan or default_android_plan

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
  sift orchestartor --token 'your token' --test-plan 'name of testplan'
  ```
  </TabItem>
  <TabItem value="android">

  ```
  ?????
  ```  
  </TabItem>
</Tabs>

More about [configuration SIFT](/configuration).

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );
