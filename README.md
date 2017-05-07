# Nextjs and Freactal Example

This example demonstrates the use of [freactal](https://github.com/FormidableLabs/freactal#freactal) with [Nextjs](https://github.com/zeit/next.js).

The example is just a counter that maintains state between pages.

Each page is wrapped with state for globally accessible state values. For local needs, state can be composed and the state needed at lower levels can be specified in their own store and composed. If you look at the `LocalCounter` component, you'll see that it has its own state, but also has access to the global state through its parent. The local state can be updated, but leaving the page and coming back reinitializes the local state, which leaving the global state untouched, just like we want.
