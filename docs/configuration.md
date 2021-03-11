---
id: configuration
title: Configuration
---

## SIFT

### General

| Option                | Default | Description                                                      |
| :-------------------- | :-----: | ---------------------------------------------------------------- |
| Output Directory Path |  null   | Where would you like to see the results?                         |
| Setup Script Path     |  null   | You can optionally add the script to execute before the test run |
| Tear Down Script Path |  null   | You can optionally add the script to execute after the test run  |

### <Highlight color="#4bb462">Android</Highlight>

| Option                      | Default | Description                                                |
| :-------------------------- | :-----: | ---------------------------------------------------------- |
| Timeout (seconds)           |   180   | SIFT will abort the execution after this number of seconds |
| Max retries per case        |    1    | How many reruns are allowed?                               |
| Max retries per run         |   50    | How many tests are allowed per one device / simulator?     |
| Path to the application APK |  null   | The path to the APK of the application under test          |
| Path to the androidTest APK |  null   | The path to the APK with tests                             |
| Report Title                |  null   | Title of the HTML report generated from the run results    |
| Report Subtitle             |  null   | Subtitle of the HTML report generated from the run         |

### <Highlight color="#1877F2">IOS</Highlight>

| Option            | Default | Description                                                               |
| :---------------- | :-----: | ------------------------------------------------------------------------- |
| Timeout (seconds) |   300   | SIFT will abort the execution after this number of seconds                |
| Number of Reruns  |    1    | How many reruns are allowed?                                              |
| Tests Per Device  |   50    | How many tests are allowed per one device / simulator?                    |
| XCTestrun Path    |  null   | SIFT uses test-without-build command so we need to locate .xctestrun file |

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

## Node

### General

| Option              | Description                                        |
| :------------------ | -------------------------------------------------- |
| Name                | Name of node                                       |
| Host                | Host name or ip address of node                    |
| Port                | Port of node                                       |
| Username            | Username for connect                               |
| Path To Certificate | Path to ssh certificate                            |
| Deployment Path     | We will temporarily store the build & results here |

### <Highlight color="#4bb462">Android</Highlight>

| Option           | Description                                                                            |
| :--------------- | -------------------------------------------------------------------------------------- |
| Android Sdk Path | Where is Android Sdk located? Should be the same path as ANDROID_SDK_ROOT/ANDROID_HOME |

### <Highlight color="#1877F2">IOS</Highlight>

| Option     | Description             |
| :--------- | ----------------------- |
| Xcode Path | Where is Xcode located? |
