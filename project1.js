console.log("project1");

showNotes();

let Addbtn = document.getElementById('AddBtn')
Addbtn.addEventListener('click', function (e) {
    let AddText = document.getElementById('AddText');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(AddText.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    AddText.value = " ";
    console.log(AddText);
    showNotes();

});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    console.log(notesObj);
    let html = "";
    notesObj.forEach(function (element, index) {

        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`


    });

    let notesElm = document.getElementById("notes");
    console.log(notesObj.length);
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `<h4>NOthing to show...use "add a note" to type something</h4>`
    }



}


//function to delete a note
function deleteNote(index) {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();


}
let Addbtn1 = document.getElementById("my");
Addbtn1.addEventListener('click', function (e) {
    console.log("sam111")
    localStorage.setItem("notes", JSON.stringify([]));


});


//search

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        console.log(cardTxt);
    })
})