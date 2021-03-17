---
id: test-status
title: Test status
---

Test Orchestrator provides you three types of statuses. Statuses can be modified manually and seen in the test list. Managing the statuses of the tests helps you quickly enable/disable certain tests without taking them out of the CI/suite. Also you can filter the tests by their status.

## Enabled

The test will run in the next test run.

## Disabled

The test will be ignored in the next test run.

## Quarantined

The test will be ignored in the next test run and will be automatically enabled after 10 successful runs in a separate run.
