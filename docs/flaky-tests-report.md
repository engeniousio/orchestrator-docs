---
id: flaky-tests-report
title: Test Cases Flakiness Report
---

import useBaseUrl from "@docusaurus/useBaseUrl";

## What is Flaky test cases

A test case is considered flaky if it [passed](/test-status) after a retry, meaning on the first try it failed and then after one or more retries it passed.

To track and eliminate flaky test cases you can filter all test cases by their result [“passed after rerun”](/test-status) to see only those that need your attention.

## How to see the Report

1. Go to the [Test Suite](/test-plans#test-plan-details) page.

2. Click **Test Cases Flakiness Report**.

3. Scroll down and up to see all report.

<img alt="flaky tests" src={useBaseUrl("gif/flaky-tests-min.gif")} />

:::note

Test Orchestrator display only the last 20 test runs.

:::

## How can I use it?

Test Cases Flakiness Report provides you all information about the 20 last [results](/test-result) in all test runs. You can [disable](/test-status#disabled) or make test cases [quarantined](/test-status#quarantined) until test cases are stable.
