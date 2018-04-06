//What can the user see?


//what can the user do?

//what does the user expect?

var thumbUp = document.getElementsByClassName("fa-thumbs-up"); //returns an array of dom objects
var trash = document.getElementsByClassName("fa-trash");

// appending an event listener toe very single thumb up
Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const order = this.parentNode.parentNode.childNodes[3].innerText
        const size = this.parentNode.parentNode.childNodes[5].innerText
        const cream = this.parentNode.parentNode.childNodes[7].innerText
        const milk = this.parentNode.parentNode.childNodes[9].innerText
        const sugar = this.parentNode.parentNode.childNodes[11].innerText
        // const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[13].innerText)
        fetch('orders', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'order': order,
            'size' : size,
            'cream' :cream,
            'milk' : milk,
            'sugar': sugar,
            'thumbUp':thumbUp

          })
        })
        .then(response => {
          if (response.ok) return response.json()

        })
        .then(data => {

          window.location.reload() //page reload (another get request is triggered)
        })
      });
});

//appending an event listener toe very single trash can
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const order = this.parentNode.parentNode.childNodes[3].innerText
        const size = this.parentNode.parentNode.childNodes[5].innerText
        const cream = this.parentNode.parentNode.childNodes[7].innerText
        const milk = this.parentNode.parentNode.childNodes[9].innerText
        const sugar = this.parentNode.parentNode.childNodes[11].innerText

        console.log(name);
        fetch('orders', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name

          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
