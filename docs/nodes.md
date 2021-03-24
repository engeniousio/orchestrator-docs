---
id: nodes
title: Sift Nodes
---

import useBaseUrl from "@docusaurus/useBaseUrl";

## Node List

You can manage Sift Nodes.

## Creating a new node

1. Go to the Sift Nodes page.

2. Click **Add Node** button.

3. Fill out all fields in the form.

:::important

The new node must include [SSH key](/ssh) path and include at least one [device or simulator](/udid).

:::

4. Click **Create** button.

<img alt="creating a new node" src={useBaseUrl("gif/creating-node-min.gif")} />

## Modifying node

1. Go to the [Sift Nodes](/nodes) page or [Test Plan Settings](/test-plan-settings).

2. Click pencil icon for a certain node.

3. Make changes.

4. Click **Update** button.

<img alt="updating the node" src={useBaseUrl("gif/updating-node-min.gif")} />

:::important

The modified node must include at least one [device or simulator](/udid).

:::

## Deleting node

1. Go to the Sift Nodes page.

2. Click the red trash button nearly the certain node and confirm the action.

<img alt="deleting the node" src={useBaseUrl("gif/deleting-node-min.gif")} />

## Device and simulator

More about [UDID](/udid).

:::important

Each node must include at least one [device or simulator](/udid).

:::

### Adding device or simulator

1. Go to the [Sift Nodes](/nodes) page.

2. Click pencil icon for a certain node.

3. Click **Add device** or **Add simulator** udid the UDIDs section.

4. Fill out the device or simulator [UDID](/udid) in the form.

5. Click **Update** button.

### Updating device or simulator

1. Go to the [Sift Nodes](/nodes) page.

2. Click pencil icon for a certain node.

3. Edit the device or simulator [UDID](/udid) in the form.

4. Click **Update** button.

<img alt="actions with udids" src={useBaseUrl("gif/actions-with-udids-min.gif")} />

### Deleting device or simulator

1. Go to the [Sift Nodes](/nodes) page.

2. Click pencil icon for a certain node.

3. Click the red trash button nearly the certain device or simulator in the UDIDs section.

4. Click **Update** button.
