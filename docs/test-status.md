---
id: test-status
title: Test Cases status
---

Test Orchestrator provides you three types of statuses. Statuses can be modified manually and seen in the test cases list. Managing the statuses of the test cases helps you quickly enable/disable certain test cases without taking them out of the CI/suite. Also you can filter the test cases by their status.

## Enabled

The test case will run in the next test run.

## Disabled

The test case will be ignored in the next test run.

## Quarantined

The test case will be ignored in the next test run and will be automatically enabled after 10 successful runs in a separate run.
