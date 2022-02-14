let notes = [];

const addBtn = document.getElementById("addbtn");
const notesEle = document.getElementById("notes");

const showNotes = () => {
  let html = "";
  if (notes === []) {
    return null;
  }

  notes.forEach((note, index) => {
    html += `<div class="noteCard card mx-2 my-2" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${note.title}</h5>
            <p class="card-text">
              ${note.text}
            </p>
            <button id='${index}' onclick='deleteNote(this.id)' class="btn btn-primary">Delete Note</button>

          </div>
        </div>`;
  });
  notesEle.innerHTML = html;
};

showNotes();

addBtn.addEventListener("click", () => {
  const txtVal = document.getElementById("addTxt");
  const title = document.getElementById("title");
  notes.push({
    title: title.value,
    text: txtVal.value,
  });
  txtVal.value = "";
  title.value = "";
  showNotes();
});

const deleteNote = (id) => {
  notes.splice(id, 1);
  showNotes();
};

const searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", () => {
  let searchTxtVal = searchTxt.value.toLowerCase();
  let noteCards = document.querySelectorAll(".noteCard");
  Array.from(noteCards).forEach((el) => {
    const cardTxt = el.getElementsByTagName("p")[0].innerText.toLowerCase();

    if (cardTxt.includes(searchTxtVal)) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
});
