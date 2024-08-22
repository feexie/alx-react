# ALX React
# 0x07. React Redux Action Creator + Normalizr

This project focuses on implementing Redux with Normalizr in a React application. It covers the core concepts of Redux, action creators, async actions, and writing tests. You will learn how to normalize nested JSON data using Normalizr and implement Redux actions efficiently. covering the React.Js section of the ALX frontend specialization curriculum

## Project Overview

- **Weight:** 1
- **Start Date:** August 18, 2024, 10:00 PM
- **End Date:** August 22, 2024, 10:00 PM
- **Manual QA Review:** Required upon project completion

## Resources

- [Normalizr](https://github.com/paularmstrong/normalizr)
- [Normalizing State Shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape)
- [Redux Getting Started and Core Concepts](https://redux.js.org/introduction/getting-started)
- [Redux Actions](https://redux.js.org/basics/actions)
- [Async Actions](https://redux.js.org/advanced/async-actions)
- [Writing Tests for Redux](https://redux.js.org/recipes/writing-tests)

## Learning Objectives

By the end of this project, you should be able to:

- Explain the purpose of Normalizr and how to use it
- Understand schemas and normalization of nested JSON data
- Grasp core concepts of Redux
- Create Redux actions and action creators
- Implement async actions in Redux
- Write tests for Redux actions and reducers

## Requirements

- **Editors:** vi, vim, emacs, Visual Studio Code
- **Node Version:** 12.x.x
- **NPM Version:** 6.x.x
- **Operating System:** Ubuntu 18.04 LTS
- **Mandatory Files:** `README.md` at the root of the project folder
- **Push Requirements:** Push all files, including `package.json` and `.babelrc`
- **Function Export:** All functions must be exported

## Provided Files

- `notifications.json`
- `login-success.json`

## Tasks

### 0. Read Data from a JSON
- **Directory:** `task_0/dashboard/src/schema/`
- **Files:** `notifications.js`, `notifications.test.js`
- **Description:** Import JSON data and create a function to filter notifications by user ID.

### 1. Normalize a Nested JSON
- **Directory:** `task_1/dashboard/src/schema/`
- **Files:** `notifications.js`, `notifications.test.js`
- **Description:** Set up a schema using Normalizr and create tests to verify the normalization.

### 2. Filter a Normalized Schema
- **Directory:** `task_2/dashboard/src/schema/`
- **Files:** `notifications.js`
- **Description:** Modify the notification filtering function to use normalized data.

### 3. Create Actions for the Course List
- **Directory:** `task_3/dashboard/src/actions/`
- **Files:** `courseActionCreators.js`, `courseActionCreators.test.js`, `courseActionTypes.js`
- **Description:** Create action types and action creators for selecting and unselecting courses.

### 4. Create Actions for the UI
- **Directory:** `task_4/dashboard/src/actions/`
- **Files:** `uiActionTypes.js`, `uiActionCreators.js`, `uiActionCreators.test.js`
- **Description:** Create action types and action creators for handling user login, logout, and notification drawer visibility.

### 5. Create Actions for the Notification List
- **Directory:** `task_5/dashboard/src/actions/`
- **Files:** `notificationActionTypes.js`, `notificationActionCreators.js`, `notificationActionCreators.test.js`
- **Description:** Create action types and action creators for marking notifications as read and setting notification filters.

### 6. Bound the Actions
- **Directory:** `task_6/dashboard/src/actions/`
- **Files:** `courseActionCreators.js`, `notificationActionCreators.js`, `uiActionCreators.js`
- **Description:** Bind action creators for course selection, notification handling, and UI actions.

### 7. Async Action Creators
- **Directory:** `task_7/dashboard/src/actions/`
- **Files:** `uiActionTypes.js`, `uiActionCreators.js`, `uiActionCreators.test.js`
- **Description:** Set up Redux Thunk, simulate an API, and create async action creators for handling user login.

## Repository

- **GitHub Repository:** `alx-react`
- **Directory:** `0x07-react_redux_action_creator_normalizr`
