# simple-restful-api
a nice random restful api i made

# use
two things
GET /hello
and
POST /text/id
```js
fetch("http://127.0.0.1:8080/text/1", {method: "POST", headers: { Content-Type: "application/json" }, body: JSON.stringify({text: "text"})})
.then(res => res.json())
.then(data => {console.log(data)});
```
