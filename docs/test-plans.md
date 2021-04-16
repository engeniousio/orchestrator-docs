---
id: test-plans
title: Test Plans
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Test plans comprise a list of [tests](/tests) and settings which you can set up and help you see the general [status](/test-status), scope of the test activity.

## Creating

1. Go to Test Plans page.

2. Click **Create Test Plan** button and fill out the name field.

:::important

Use only a unique name for creating a test plan!

:::

3. The created test plan will immediately appear on the Test Plans page and will be managed.

<img alt="creating test plan" src={useBaseUrl("gif/creating-test-plan-min.gif")} />

:::note

Test Plan can be managed by admin and lead. See more about [roles](/users/#roles).

:::

4. Click **See details**, then open **Plan Settings** and make sure that at least one node is enabled.

:::important

When creating a new test plan make sure that at least one node is enabled on **Plan Settings** page. It's not possible to run tests without enabled nodes.

:::

## Test Plan Details

Click **See details** button for the certain test plan.

You will see all information about this test plan like name, [tests list](/tests), [settings](/test-plan-settings), and [tests flakiness report](/flaky-tests-report).

## Adding Tests to Test Plan

1. Go to a certain Test Plan page.

2. Click **Add Tests** button.

3. On the [Tests](/tests) page select tests that you want to add to the Test Plan.

4. Click **Add To Test Plan** button then select a certain Test Plan and confirm the action.

<img alt="adding tests" src={useBaseUrl("gif/adding-tests-from-plan-min.gif")} />

:::note

Adding duplicate [tests](/tests) will be ignored.

:::

5. Tests will add to the Test Plan. Comeback and manage it.

## Deleting Tests from Test Plan

1. Go to certain Test Plan page.

2. Select tests that you want to delete.

3. Click **Delete tests** button and confirm the action.

<img alt="deleting tests from Test Plan" src={useBaseUrl("gif/deleting-tests-from-plan-min.gif")} />

## Test Plan Settings

1. Go to a certain Test Plan page.

2. Click **Plan Settings** button.

3. You will see all Settings for the certain test plan.

:::note

[Test Plan Settings](/test-plan-settings) can be managed only by admin. See more about [roles](/users/#roles).

:::

## Deleting Test Plan

1. Go to a certain Test Plan page.

2. Click **Delete Plan** button at the header then confirm the action.

3. Test Plan will delete and you will redirect to the [Test Plans](/test-plans#introduction) page.

<img alt="deleting test plan" src={useBaseUrl("gif/deleting-test-plan-min.gif")} />
