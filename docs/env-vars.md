---
id: env-vars
title: Environment Variables
---

Environment Variables / Arguments - passed to all test cases in a run. They are useful when we want to run the same [tests](/tests) with the appropriate functionality depending on the [test suite](/test-plans) or if we do not want to store passwords and other secrets in the test code.

Thanks to the support for substitution from the environment of the [node](/nodes) where sift is running, you can also enter these secrets into [Orchestrator](/), and instead [sift](/sift) them through the appropriate CI servers.
