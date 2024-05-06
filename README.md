## Promise ##
$$ Write Promise is JavaScript $$
```
    const myPromise = new Promise((resolve, reject) => {
        // resolve("Promise Resolved");
        //or
        reject("Promise Rejected");
      });
      myPromise
        .then((res) => console.log("Resolve Parameter of Promise says ", res))
        .catch((rej) => console.log("Reject parameter of promise says", rej));
```

```
  await new Promise((r) =>
          setTimeout(() => {
            r("5 seconds passed");
        }, 5000)
       ).then((res) => console.log(res));
       ```