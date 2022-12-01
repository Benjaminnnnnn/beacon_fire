async function delayedReqeust(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    setTimeout(() => console.log(data), 2000);
  } catch (err) {
    console.log(err);
  }
}

delayedReqeust("https://jsonplaceholder.typicode.com/users");
