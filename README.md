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


## Array.find() method ##
```
return todos.find((todo)=>todo.id===requiredID)
```

```
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === requiredID) {
        foundTodo = todos[i];
      }
      return foundTodo;
    }
```