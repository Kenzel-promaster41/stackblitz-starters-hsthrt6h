function submitForm() {
    var userName = document.getElementById("username").value;
    var gameType = document.getElementById("gameType").value;
    var subscribed = document.getElementById("subscribe").checked;
  
    if (userName === "") {
      alert("Please enter your name.");
    } else {
      var message = "Name: " + userName +
        "\nFavorite Game Type: " + gameType;
  
      if (subscribed) {
        message += "\nSubscribed: Yes";
      } else {
        message += "\nSubscribed: No";
      }
  
      alert(message);
    }
  }
  