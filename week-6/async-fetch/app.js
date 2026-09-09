// ============================================================================
// ASYNC JAVASCRIPT: THE FUNDAMENTALS
// ============================================================================
// Run this file with:   node app.js
// Read it top to bottom. Every section prints something, and the comments
// explain WHY it prints in the order it does. The order is the whole lesson.
//
// Table of contents
//   0. What "async" even means
//   1. The event loop: proving JS does not run top to bottom
//   2. Callbacks: the original async tool, and why we moved on
//   3. Promises: a box that will hold a value later
//   4. async / await: promises that read like normal code
//   5. fetch: async in the real world
//   6. Running things in parallel vs one after another
//   7. Use cases: when you reach for async
//   8. Gotchas that bite everybody
//   9. Practice (yours to write, not mine)
// ============================================================================


// ----------------------------------------------------------------------------
// 0. WHAT "ASYNC" EVEN MEANS
// ----------------------------------------------------------------------------
// Synchronous:  do step 1, wait for it to finish, do step 2, wait, do step 3.
//               Every line blocks the next. Simple. Also slow when a step waits
//               on something outside the CPU (a server, a disk, a timer, a user).
//
// Asynchronous: START step 1, move on to step 2 immediately, and get notified
//               when step 1 finishes so you can deal with its result.
//
// Why it matters in JavaScript specifically:
//   JS runs on ONE thread. One call stack. One thing at a time.
//   If a network request took 2 seconds and JS waited on it synchronously,
//   the whole page would freeze for 2 seconds. No clicks, no scrolling, nothing.
//   Async is how a single-threaded language stays responsive: hand the slow
//   job to the environment (browser or Node), keep running, come back later.
//
// Mental model: ordering at a diner counter.
//   Sync  = you stand at the counter until your burger is done, everyone waits.
//   Async = you get a number, sit down, and they call you when it is ready.
//           The counter keeps serving other people the whole time.


// ----------------------------------------------------------------------------
// 1. THE EVENT LOOP: PROVING JS DOES NOT RUN TOP TO BOTTOM
// ----------------------------------------------------------------------------
// Three players:
//   Call stack      runs your synchronous code, one frame at a time.
//   Task queue      (macrotasks) holds callbacks from setTimeout, events, I/O.
//   Microtask queue holds Promise callbacks (.then / await continuations).
//
// The event loop rule:
//   1. Run all synchronous code on the stack until it is empty.
//   2. Drain the ENTIRE microtask queue.
//   3. Take ONE task from the task queue, run it, go back to step 2.
//
// So microtasks (promises) always jump ahead of macrotasks (timers), even a
// timer set to 0 milliseconds. Watch the numbers below.

function section1_eventLoop() {
  console.log('--- 1. Event loop ---');

  console.log('A: sync, runs first');

  setTimeout(() => {
    console.log('D: setTimeout 0ms, runs LAST (task queue)');
  }, 0);

  Promise.resolve().then(() => {
    console.log('C: promise .then, runs THIRD (microtask queue)');
  });

  console.log('B: sync, runs second');

  // Printed order: A, B, C, D.
  // "setTimeout 0" does not mean "now." It means "as soon as the stack is
  // empty AND the microtask queue is drained." Zero is a minimum, not a promise.
}


// ----------------------------------------------------------------------------
// 2. CALLBACKS: THE ORIGINAL ASYNC TOOL, AND WHY WE MOVED ON
// ----------------------------------------------------------------------------
// A callback is just a function you hand to another function, to be called
// later when the work is done. setTimeout is the simplest example.

function fakeRequest(label, ms, callback) {
  // Pretend this hits a server and takes `ms` milliseconds.
  setTimeout(() => {
    callback(null, `${label} data`); // Node convention: (error, result)
  }, ms);
}

function section2_callbacks() {
  return new Promise((resolve) => {
    console.log('--- 2. Callbacks ---');

    // One callback is fine.
    fakeRequest('user', 100, (err, user) => {
      console.log('got', user);

      // But real apps chain: get the user, THEN their posts, THEN the comments.
      // Each step nests inside the last. This is "callback hell" / the pyramid
      // of doom. Error handling has to be repeated at every level, and reading
      // the flow means reading sideways.
      fakeRequest('posts', 100, (err, posts) => {
        console.log('got', posts);
        fakeRequest('comments', 100, (err, comments) => {
          console.log('got', comments);
          console.log('(see the pyramid? that is the problem promises solve)');
          resolve();
        });
      });
    });
  });
}


// ----------------------------------------------------------------------------
// 3. PROMISES: A BOX THAT WILL HOLD A VALUE LATER
// ----------------------------------------------------------------------------
// A Promise is an object representing a value you do not have yet.
// It is always in exactly one of three states:
//   pending    still waiting
//   fulfilled  finished successfully, holds a value
//   rejected   finished with an error, holds a reason
// Once it settles (fulfilled or rejected) it never changes again.
//
// You make one with `new Promise((resolve, reject) => { ... })`.
// You consume one with .then(onFulfilled), .catch(onRejected), .finally().

function fakeRequestPromise(label, ms, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`${label} request failed`));
      } else {
        resolve(`${label} data`);
      }
    }, ms);
  });
}

function section3_promises() {
  console.log('--- 3. Promises ---');

  // The same three-step chain from section 2, now flat instead of nested.
  // Each .then returns a NEW promise, so you can keep chaining. Whatever you
  // `return` inside a .then becomes the value the next .then receives.
  return fakeRequestPromise('user', 100)
    .then((user) => {
      console.log('got', user);
      return fakeRequestPromise('posts', 100); // returning a promise = wait for it
    })
    .then((posts) => {
      console.log('got', posts);
      return fakeRequestPromise('comments', 100, true); // this one will reject
    })
    .then((comments) => {
      console.log('this line never runs, the promise above rejected');
    })
    .catch((err) => {
      // ONE catch handles a rejection from ANY step above it. That is the win
      // over callbacks: error handling in one place instead of every level.
      console.log('caught:', err.message);
    })
    .finally(() => {
      // Runs either way. Good for "stop the spinner" type cleanup.
      console.log('finally: chain is done, success or not');
    });
}


// ----------------------------------------------------------------------------
// 4. ASYNC / AWAIT: PROMISES THAT READ LIKE NORMAL CODE
// ----------------------------------------------------------------------------
// async/await is NOT a new kind of async. It is syntax over promises.
//   - Put `async` in front of a function and it ALWAYS returns a promise.
//   - Inside it, `await somePromise` pauses THAT FUNCTION (not the whole
//     program) until the promise settles, then hands you the value.
//   - If the promise rejects, `await` throws, so you use regular try/catch.
//
// Under the hood, every `await` is a .then, and the code after it is the
// callback. The event loop keeps running other work while this function waits.

async function section4_asyncAwait() {
  console.log('--- 4. async / await ---');

  try {
    const user = await fakeRequestPromise('user', 100);
    console.log('got', user);

    const posts = await fakeRequestPromise('posts', 100);
    console.log('got', posts);

    const comments = await fakeRequestPromise('comments', 100, true); // rejects
    console.log('never runs');
  } catch (err) {
    // Same job as .catch in section 3, but it looks like sync error handling.
    console.log('caught:', err.message);
  } finally {
    console.log('finally: same idea as promise .finally');
  }
}


// ----------------------------------------------------------------------------
// 5. FETCH: ASYNC IN THE REAL WORLD
// ----------------------------------------------------------------------------
// fetch(url) starts an HTTP request and returns a promise for the Response.
// Two things trip people up:
//   1. fetch only rejects on NETWORK failure (no connection, DNS, CORS).
//      A 404 or 500 is a "successful" fetch as far as the promise is concerned.
//      YOU have to check response.ok (true for status 200 to 299).
//   2. response.json() ALSO returns a promise, because the body streams in.
//      So it is two awaits: one for headers, one for the body.

async function section5_fetch() {
  console.log('--- 5. fetch ---');

  const url = 'https://jsonplaceholder.typicode.com/users/1';

  try {
    const response = await fetch(url);            // await #1: the response headers

    if (!response.ok) {                            // manual check, fetch will not do it
      throw new Error(`HTTP ${response.status} for ${url}`);
    }

    const user = await response.json();           // await #2: parse the body
    console.log('fetched user:', user.name, '/', user.email);
  } catch (err) {
    // Lands here for network errors AND the error we threw above.
    console.log('fetch failed (offline is fine for this lesson):', err.message);
  }
}


// ----------------------------------------------------------------------------
// 6. RUNNING THINGS IN PARALLEL VS ONE AFTER ANOTHER
// ----------------------------------------------------------------------------
// The most common performance mistake with async/await: awaiting things in
// sequence when they do not depend on each other.

async function section6_parallel() {
  console.log('--- 6. Sequential vs parallel ---');

  // SEQUENTIAL: each await waits for the previous. 3 x 200ms = ~600ms.
  let start = Date.now();
  await fakeRequestPromise('a', 200);
  await fakeRequestPromise('b', 200);
  await fakeRequestPromise('c', 200);
  console.log(`sequential took ~${Date.now() - start}ms`);

  // PARALLEL: start all three FIRST (each call kicks off its timer right away),
  // then wait for all of them together. ~200ms total.
  start = Date.now();
  const results = await Promise.all([
    fakeRequestPromise('a', 200),
    fakeRequestPromise('b', 200),
    fakeRequestPromise('c', 200),
  ]);
  console.log(`parallel took ~${Date.now() - start}ms`, results);

  // Promise.all rejects the moment ANY one rejects (fail fast).
  // Promise.allSettled waits for every one and tells you each outcome.
  const settled = await Promise.allSettled([
    fakeRequestPromise('ok', 50),
    fakeRequestPromise('bad', 50, true),
  ]);
  settled.forEach((r) => {
    console.log(
      'allSettled:',
      r.status,
      r.status === 'fulfilled' ? r.value : r.reason.message
    );
  });

  // Promise.race resolves or rejects with whichever finishes FIRST.
  // Classic use: a timeout. Race the real request against a timer that rejects.
  const winner = await Promise.race([
    fakeRequestPromise('fast', 50),
    fakeRequestPromise('slow', 500),
  ]);
  console.log('race winner:', winner);
}


// ----------------------------------------------------------------------------
// 7. USE CASES: WHEN YOU REACH FOR ASYNC
// ----------------------------------------------------------------------------
// Rule of thumb: anything that waits on something OUTSIDE the CPU is async.
//
//   Network        fetch / API calls, websockets, uploads         (this week)
//   Timers         setTimeout, setInterval, debounce, polling
//   User events    clicks, keypresses, form submits (event listeners are
//                  callbacks the browser fires later)
//   Files / disk   fs.readFile in Node, FileReader in the browser
//   Databases      every query in Node backends (Mongo, Postgres, MySQL)
//   Browser APIs   geolocation, camera, notifications, IndexedDB
//   Animation      requestAnimationFrame
//
// Where you will see it in your own projects:
//   - NurseTrack mobile hitting the ServeSync API: fetch, React Query on top.
//   - Your ASP.NET backend: same idea, C# async/await and Task are the cousins.
//   - Any form that saves to a server: disable button, await the request,
//     show success or error, re-enable. That whole flow is section 4 + 5.
//
// What does NOT need async: math, string work, array methods, DOM reads,
// anything that is already in memory. Making CPU work async does not make it
// faster; it just delays it.


// ----------------------------------------------------------------------------
// 8. GOTCHAS THAT BITE EVERYBODY
// ----------------------------------------------------------------------------
// - Forgetting `await`. You get a Promise object instead of the value, and
//   `console.log(user.name)` prints undefined. If you see "Promise { <pending> }"
//   in your output, you forgot an await.
//
// - `await` only works inside an `async` function (or at the top level of an
//   ES module). In a plain script or a non-async function it is a syntax error.
//
// - async functions ALWAYS return a promise, even if you `return 5`. The
//   caller has to await it or .then it.
//
// - forEach does not wait. `array.forEach(async (x) => await ...)` fires every
//   iteration at once and moves on. Use a `for...of` loop when order matters,
//   or map + Promise.all when it does not.
//
// - fetch does not throw on 404/500. Check response.ok yourself.
//
// - Unhandled rejections. A rejected promise nobody catches will log a warning
//   in the browser and, in newer Node versions, crash the process. Every chain
//   ends in a .catch, or every await sits inside a try/catch (or the caller's).
//
// - "async" does not mean "on another thread." JS is still single-threaded.
//   A tight loop inside an async function still freezes the page.


// ----------------------------------------------------------------------------
// 9. PRACTICE (YOURS TO WRITE, NOT MINE)
// ----------------------------------------------------------------------------
// Add these below `main()` and run the file again. Predict the output BEFORE
// you run it, then check yourself.
//
//   1. Write `wait(ms)` that returns a promise resolving after `ms`. One line
//      inside. Then use it with await to log "one", pause 1s, log "two".
//
//   2. Fetch https://jsonplaceholder.typicode.com/users (an array), then
//      log every user's name. Do it once with .then chains and once with
//      async/await. Same output, decide which reads better to you.
//
//   3. Fetch users/1, users/2, and users/3. First sequentially, then with
//      Promise.all. Time both with Date.now() like section 6.
//
//   4. Fetch https://jsonplaceholder.typicode.com/users/999 (does not exist).
//      Make it throw a readable error using response.ok. Then try a bogus
//      domain and see which catch branch runs.
//
//   5. Predict the order, then run:
//        console.log(1);
//        setTimeout(() => console.log(2), 0);
//        Promise.resolve().then(() => console.log(3));
//        (async () => { console.log(4); await null; console.log(5); })();
//        console.log(6);


// ----------------------------------------------------------------------------
// RUN THE LESSON IN ORDER
// ----------------------------------------------------------------------------
// Each section is awaited so the output reads top to bottom. Without these
// awaits, all the sections would start at once and their logs would interleave,
// which is itself a demonstration of the whole point.

async function main() {
  section1_eventLoop();
  await new Promise((r) => setTimeout(r, 10)); // let section 1's timer fire

  await section2_callbacks();
  await section3_promises();
  await section4_asyncAwait();
  await section5_fetch();
  await section6_parallel();

  console.log('--- done. now go do section 9. ---');
}

main();
