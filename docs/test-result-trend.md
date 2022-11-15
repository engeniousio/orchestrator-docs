---
id: test-result-trend
title: Test Result Trend
---

import useBaseUrl from "@docusaurus/useBaseUrl";

## How to see the Trend

1. Go to the [Test Suites](/test-plans) page.

2. Swipe right and left to see all test suites with the report.

<img alt="test result trend" src={useBaseUrl("gif/trend-min.gif")} />

:::note

Test Orchestrator display only the last 20 test runs.

:::

## What's the profit

Test result trend helps you see the report for the last 20 runs. You can switch between all your test suites to see the result trend for each suite.
On x-axis you see the number of builds, on y-axis you see the count of test cases in the build.

- Black line is for skipped test cases;
- Red line is for failed test cases;
- Yellow line is for passed after rerun test cases;
- Green line is for passed test cases.

  You can also see the date, time and number of a certain result on the trend.
  On the right, you can see a pie chart with the statuses of the test cases in a build.
