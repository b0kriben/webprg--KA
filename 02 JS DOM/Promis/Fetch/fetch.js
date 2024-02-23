fetch('https://jsonplaceholder.org/users/?id=1 ')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    document.getElementById("id1").innerHTML;
    return response.json();
  })
  .then(user => {
    console.log(user);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

function usersForm() {
    let tomb = document.forms["userForm"].value;
    if (tomb == "") {
      alert("Üres a tömb.");
      return false;
    }
    console.log(user);
}