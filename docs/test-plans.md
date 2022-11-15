---
id: test-plans
title: Test Suites
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Test suites comprise a list of [test cases](/tests) and settings which you can set up and help you see the general [status](/test-status), scope of the test activity.

## Creating

1. Go to Test Suites page.

2. Click **Create Test Suite** button and fill out the name field.

:::important

Use only a unique name for creating a test suite!

:::

3. The created test suite will immediately appear on the Test Suites page and will be managed.

<img alt="creating test plan" src={useBaseUrl("gif/creating-test-plan-min.gif")} />

:::note

Test Suite can be managed by admin and lead. See more about [roles](/users/#roles).

:::

## Test Suite Details

Click **See details** button for the certain test suite.

You will see all information about this test suite like name, [test cases list](/tests), [settings](/test-plan-settings), and [tests flakiness report](/flaky-tests-report).

## Adding Tests to Test Suite

1. Go to a certain Test Suite page.

2. Click **Add Test Cases** button.

3. On the [Test Cases](/tests) page select test cases that you want to add to the Test Suite.

4. Click **Add To Test Suite** button then select a certain Test Suite and confirm the action.

<img alt="adding tests" src={useBaseUrl("gif/adding-tests-from-plan-min.gif")} />

:::note

Adding duplicate [test cases](/tests) will be ignored.

:::

5. Test cases will be added to the Test Suite. Comeback and manage it.

## Deleting Test Cases from Test Suite

1. Go to certain Test Suite page.

2. Select test cases that you want to delete.

3. Click **Delete test cases** button and confirm the action.

<img alt="deleting tests from Test Plan" src={useBaseUrl("gif/deleting-tests-from-plan-min.gif")} />

## Test Suite Settings

1. Go to a certain Test Suite page.

2. Click **Suite Settings** button.

3. You will see all Settings for the certain test suite.

:::note

[Test Suite Settings](/test-plan-settings) can be managed only by admin. See more about [roles](/users/#roles).

:::

## Deleting Test Suite

1. Go to a certain Test Suite page.

2. Click **Delete Suite** button at the header then confirm the action.

3. Test Suite will be deleted and you will be redirected to the [Test Suites](/test-plans#introduction) page.

<img alt="deleting test plan" src={useBaseUrl("gif/deleting-test-plan-min.gif")} />
