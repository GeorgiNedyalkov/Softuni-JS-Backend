# Event Loop

## What is the Event Loop?

The Event loop is what allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible.

What is a kernel?

## Event Loop Explained

When Node.js starts, it initializes the event loop, processes the input script,
which may make async API calls, schedule timers, or call process.nextTick(), then
begines processing the loop.

In the event loop each phase is executed in FIFO queue of callbacks to execute.
When the event loop enters a give phase, it will perform any operations specific to that phase, the execute callbacks in that phases's queue utinl the queue has been exchausted or the maximum number of callbacks has executed. When the queue has been exchausted or the callback limit is reached.

Since any operation may schedulu more operations and new events processed in the _poll_ phase are queue by the kernel, poll events can be queued while polling events are being processed. As a result, long running callbacks can allow the poll to run much longer than a timer's threshold.
