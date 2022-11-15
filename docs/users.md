---
id: users
title: Users
---

import useBaseUrl from "@docusaurus/useBaseUrl";

## Invite users (admin only)

You can invite users to Test Orchestrator. Invited users will see all test suites and test cases run for the organization.

1. Go the Users page.

2. Click **Invite User** button and fill out all fields: name, email, and select [user role](/docs/users#user-roles). Then click **Send Invitation**.

<img alt="sending an invitation" src={useBaseUrl("gif/sending-an-invitation-min.gif")} />

:::important

Use only real emails for sending invitations!

:::

3. The user will receive an invitation email with a link to accept the invitation.

<img alt="creating user" src={useBaseUrl("gif/creating-user-min.gif")} />

:::note

The created invite is available for 24 hours. Upon the expiration of this period, the invite will be automatically deleted.

:::

## User roles

Test orchestrator supports multiple users a role-based access control with three predefined data-access roles: member, lead, and admin. Each role includes a set of authorized actions (read, write, etc.) permitted on the organization.

| Entity               |   Member    |     Lead     |    Admin     |
| -------------------- | :---------: | :----------: | :----------: |
| `Invites`            |   _deny_    |    _deny_    | _Read-write_ |
| `Tests`              | _Read-only_ | _Read-write_ | _Read-write_ |
| `Test plans`         | _Read-only_ | _Read-write_ | _Read-write_ |
| `Users`              | _Read-only_ | _Read-only_  | _Read-write_ |
| `Global Settings`    | _Read-only_ | _Read-only_  | _Read-write_ |
| `Test Plan Settings` | _Read-only_ | _Read-only_  | _Read-write_ |
| `Nodes`              | _Read-only_ | _Read-only_  | _Read-write_ |

## User management

According to the [user roles](/docs/users#user-roles), the admin can manage users. On the Users page is a table list of users with users full information like name, email, last activity, and role. Admin can delete one or several users and change the role.

### Changing role

:::important

Admin cannot perform actions with another admin! Be attentive when choosing a role for a user.

:::

<img alt="change user role" src={useBaseUrl("gif/change-role-min.gif")} />

### Deleting user

<img alt="deleting user" src={useBaseUrl("gif/deleting-user-min.gif")} />
