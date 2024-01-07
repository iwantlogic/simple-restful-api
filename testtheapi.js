for (i=0; i<10; i++){

fetch("http://127.0.0.1:8080/text/"+i, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"  },
  body: JSON.stringify({
    "text": `Hello #${i}`
  }),
}).then(res => {
  return res.json();
}).then(data => {
  console.log(data)
})

}
