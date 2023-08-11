# @fluentui/react@8.x shadow DOM test app

This is a simple test app for [Fluent React v8 Shadow DOM support](https://github.com/microsoft/fluentui/issues/28058).

## Usage

0. Clone this repo
1. `yarn` to install deps
2. `yarn dev` to run the app locally

**For code usage see `src/App.tsx`**

## Using in-progress features in your app

Shadow DOM support is a large change to Fluent so while it's being developed you can grab changes in the form of [patches](https://github.com/ds300/patch-package) here.

To use patches:

0. Clone this repo
1. Follow the `patch-package` [setup instructions](https://github.com/ds300/patch-package#set-up) for your application
2. Copy the `patches` folder to your application
3. Run `npm install` or `yarn` to install the patches

