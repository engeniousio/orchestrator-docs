---
id: tests
title: Test Cases
---

import useBaseUrl from "@docusaurus/useBaseUrl";

In a single test case you can see and edit its [status](/test-status), links, additional information. The list of test cases shows you all existing test cases and their statuses. Filters help you find necessary test cases quiches and by selecting certain test cases you can add them to [test suites](/test-plans) or delete them.

## Test Cases List

All members of your organization can see test cases list.

## Test case information

We provide the ability to fully manage test cases.

<!-- <img alt="test" src={useBaseUrl("img/test.svg")} /> -->

1. Navigate to Test Suite page.

2. Double click Test Case row or click <img alt="setting" src={useBaseUrl("img/setup-icon.svg")} />, see the full information.

### Updating test case

The test case can be modified manually.
You can change [status](/test-status), Jira link, TestRail link, and comment.

<img alt="updating test" src={useBaseUrl("gif/updating-test-min.gif")} />

:::note

Test case can be managed by admin and lead. See more about [roles](/users/#roles).

:::

## Adding test case to Test Suite

1. Navigate to Test Cases page.

2. Select test cases that you want to add to [Test Suite](/test-plans#test-plan-details).

3. Click **Add to Test Suite** button then select a certain Test Suite and confirm the action.

<img alt="adding tests" src={useBaseUrl("gif/adding-tests-min.gif")} />

:::note

Adding duplicate [test cases](/tests) will be ignored.

:::

4. Test cases will add to the Test Suite.

<!-- ## Global deleting tests

You can delete tests from your organizations and it will be deleted from [Test Cases List](/tests/#test-list) and all [Test Suites](/test-plans).

1. Navigate to Test Cases page.

2. Select test case or test cases that you want to delete.

3. Click **Delete test cases** button and confirm the action. -->
