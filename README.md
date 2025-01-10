# React useEffect Hook Memory Leak

This example demonstrates a common error in React's `useEffect` hook: a missing cleanup function.  When an effect doesn't have a cleanup function, it can cause memory leaks, especially when dealing with subscriptions, timers, or event listeners.  In this case, the `console.log` statement isn't itself the problem, but the lack of cleanup illustrates a significant risk.

## The Bug
The `useEffect` hook lacks a return statement containing a cleanup function.  This causes the `console.log` to execute repeatedly on every render, leading to a potentially memory leak if the component is mounted and unmounted frequently.

## Solution
The solution involves adding a return statement to the `useEffect` hook that will return a cleanup function. This function executes immediately before the component unmounts, enabling any necessary cleanup (like canceling subscriptions).  This is crucial for preventing memory leaks and ensuring correct component behavior.
