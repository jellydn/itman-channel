
/assets/IT Man - Intro.mp4
background: true

---

/assets/New content every Sunday.mp4
background: true

---

#### Tip #30
# Promise should be fun

---
# Callback hell in Javascript
https://lenguajejs.com/javascript/asincronia/callbacks/callback-hell.gif
size: contain

---
# Callback hell
```
doSomething(function(result1) {
  doSomethingElse(result1, function(result2) {
    doThirdThing(result2, function(result3) {
      doFourthThing(result3, function(result4) {
        // ... and so on
      });
    });
  });
});
```
# Promise
```
doSomething()
  .then(result1 => doSomethingElse(result1))
  .then(result2 => doThirdThing(result2))
  .then(result3 => doFourthThing(result3))
  .then(result4 => {
    // ... and so on
  })
  .catch(error => {
    // Handle any errors that occurred along the way
  });

```

# Even better with Async Await
```
try {
  const result1 = await doSomething();
  const result2 = await doSomethingElse(result1);
  const result3 = await doThirdThing(result2);
  const result4 = await doFourthThing(result3);
  // ... and so on
} catch (error) {
  // Handle any errors that occurred along the way
}
```

---
# [promise-fun](https://github.com/sindresorhus/promise-fun)
### Promise packages, patterns, chat, and tutorials
--- 
# Demo
## [jellydn/promise-should-be-fun](https://github.com/jellydn/promise-should-be-fun)
### Collection of exercises designed to practice and improve your skills with async programming in JavaScript.

---
# Thank you

/assets/IT Man Main Logo 800x600.png
## [https://bitly.com/m/itman](https://bitly.com/m/itman)