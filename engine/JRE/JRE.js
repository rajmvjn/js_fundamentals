// Javascript Runtime environment - eg Browser, Node, any Javascript controlled system [robot, calculator or anything of that sort]

// JRE includes the following
      // 1. Javascript engine - with callstack and global execution context

      // 2. Event loop - Checks the callstack and incase of empty take things for execution from microtask queue, callback queue respctivly

      // 3. APIs - Browser[window global obj, getElementBy.., console, setTimeout, fetch etc,] Node-[console, setTimeout]

      // 4. Callback and microtask q.


// JS Engine architecture
  // V8 - interpreter - ignition
  // V8 - compiler - turbofan      