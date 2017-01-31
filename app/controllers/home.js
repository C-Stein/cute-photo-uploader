app.controller('HomeCtrl', function(){
  console.log('home control!')

  // Create a root reference
let storageRef = firebase.storage().ref();

let inputElement = document.getElementById("fileInput");

inputElement.addEventListener("change", handleFiles, false);


  function handleFiles() {
    var fileList = this.files; /* now you can work with the file list */
    console.log("filelist[0]", fileList[0])
    storageRef.child(fileList[0].name).put(fileList[0])
      .then(function(snapshot) {
        console.log('Uploaded a blob or file!');
      });
  }

//getting the url
  storageRef.child('fox2.jpeg').getDownloadURL()
    .then(function(url) {
      var img = document.getElementById('myimg');
      img.src = url;
    }).catch(function(error) {
    // Handle any errors
  });




})