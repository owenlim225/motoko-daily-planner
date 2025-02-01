# Daily planner

![Daily planner](/examples/_attachments/daily_planner.png)

Daily planner features a monthly calender that can be used to track daily activities, appointments, or tasks. Data for each task is stored onchain. For each day, a historic fact can be queried using HTTPS outcalls, which are a feature that allow ICP smart contracts to obtain data from external sources.

This application's logic is written in [Motoko](https://internetcomputer.org/docs/current/motoko/main/getting-started/motoko-introduction), a programming language designed specifically for developing smart contracts on ICP.

## Project structure

The `/backend` folder contains the Motoko canister, `app.mo`. The `/frontend` folder contains web assets for the application's user interface. The user interface is written using the React framework. Edit the `mops.toml` file to add [Motoko dependencies](https://mops.one/) to the project.

## Continue building locally

To migrate your ICP Ninja project off of the web browser and develop it locally, follow these steps.

### 1. Download your project from ICP Ninja using the 'Download files' button.

![ICP Ninja download](/examples/_attachments/icp_ninja_download_files.png)

### 2. Open the `BUILD.md` file for further instructions.

The `BUILD.md` file included in your download will provide information about using `dfx`.
