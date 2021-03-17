---
id: flaky-tests-report
title: Flaky Tests Report
---

import useBaseUrl from "@docusaurus/useBaseUrl";

## What is Flaky tests

A test is considered flaky if it [passed](/test-status) after a retry, meaning on the first try it failed and then after one or more retries it passed.

To track and eliminate flaky tests you can filter all test by their result [“passed after rerun”](/test-status) to see only those that need your attention.

## How to see the Report

1. Go to the [Test Plan](/test-plans#test-plan-details) page.

2. Click **Tests Flakiness Report**.

3. Scroll down and up to see all report.

<img alt="flaky tests" src={useBaseUrl("gif/flaky-tests-min.gif")} />

:::note

Test Orchestrator display only the last 20 test runs.

:::

## How can I use it?

Tests Flakiness Report provides you all information about the 20 last [results](/test-result) in all test runs. You can [disable](/test-status#disabled) or make tests [quarantined](/test-status#quarantined) until tests improving stable.
