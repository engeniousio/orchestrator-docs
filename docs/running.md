---
id: running
title: Running Sift with Orchestrator
---

## Step 1 (Build Sift):

1. Open Terminal.

2. Make sure that you in the current working directory.

3. Run build command:

### <Highlight color="#4bb462">Sift Android</Highlight>

```
./gradlew assemble
```

### <Highlight color="#1877F2">Sift IOS</Highlight>

```
swift build -c release
```

## Step 2 (Run Sift with Orchestrator):

1. Copy a token from Test Orchestrator see the page "Global settings" (read more about [Global Settings](/docs/settings/)).

2. In the terminal paste token and test plan name.

:::tip

The Sift can run without --test-plan param, Test Orchestrator will provide the default test-plan name

:::

3. Run command:

### <Highlight color="#4bb462">Sift Android</Highlight>

```
?????
```

### <Highlight color="#1877F2">Sift IOS</Highlight>

```
sift orchestartor --token 'your token' --test-plan 'name of testplan'
```

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );
