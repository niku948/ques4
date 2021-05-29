/*
async function getUsers(){
    let response = await fetch('www.example.com/api/get/1');
    let data = await response.json();
    return data;
}
getUsers().then(data => console.log(data));

document.write("hi");

*/
/*
const userAction = async () => {
    const response = await fetch('http://example.com/movies.json', {
      method: 'POST',
      body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson

    document.getElementById('result').innerHTML = response.myJson;
  }
  */
  const userAction = async () => {
    const response = await fetch('http://example.com/movies.json', {
      method: 'POST',
      body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson

    document.getElementById('result').innerHTML = response.myJson;
    document.write(myJson);
    document.write("hi");
  }