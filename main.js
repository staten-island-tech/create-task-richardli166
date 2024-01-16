const piece = [
{
    name: "I",
    description: "a cyan piece that is four mini blocks long"
},
{
    name: "Z", 
    description: "a red piece that is a 3x2 rectangle that have the top right and bottom left cut off"
},
{
    name: "L",
    description: "a orange piece that is a 2x3 rectangle that has the top right and middle right cut off"
},
{
    name: "S",
    description: "a green piece that is 3x2 rectangle that have the top left and bottom right cut off"
},
{
    name: "J",
    description: "a blue piece that is a 2x3 rectangle that has the top left and middle left cut off"
},
{
    name: "O",
    description: "a yellow piece that is a 2x2 square",
},
{
    name: "T",
    description: "a purple piece that is 3x2 rectangle that has the top left and top right cut off"
}
];

const DOMSelectors = {
    Play: document.getElementById("playbutton"),
};

function getRandomdescription() {
    const randomIndex = Math.floor(Math.random() * piece.length);
    const piecearray = piece[randomIndex];
    return piecearray;
};

function checkPiece(letter, name) {
    if (letter === name) {
      console.log('Correct!');
      document.getElementById("display").insertAdjacentHTML("beforeend",
        `<div class="correct">
        <h3>You are Correct!</h3>
      </div>
    `);
    } else {
      console.log('Incorrect!');
      document.getElementById("display").insertAdjacentHTML("beforeend",
        `<div class="incorrect">
        <h3>You are Incorrect! It is the ${name} piece!</h3>
      </div>
      `);
    }
  };

function inserts(){
    DOMSelectors.Play.addEventListener("click", function(){
        const block = getRandomdescription();
        const name = block.name;
        const description = block.description;
        document.getElementById("display").innerHTML = "",
        document.getElementById("playbutton").remove(),
        document.getElementById("display").insertAdjacentHTML("beforeend",
       
        `<div class="button">
        <h2>${description}</h2>
        <button type="submit" id="ibutton">It is the I Piece!</button>
        <button type="submit" id="zbutton">It is the Z Piece!</button>
        <button type="submit" id="lbutton">It is the L Piece!</button>
        <button type="submit" id="sbutton">It is the S Piece!</button>
        <button type="submit" id="jbutton">It is the J Piece!</button>
        <button type="submit" id="obutton">It is the O Piece!</button>
        <button type="submit" id="tbutton">It is the T Piece!</button>  
      </div>
    `);
  
    document.getElementById("ibutton").addEventListener("click", function() {
        checkPiece('I', name);
      });
      document.getElementById("zbutton").addEventListener("click", function() {
        checkPiece('Z', name);
      });
      document.getElementById("lbutton").addEventListener("click", function() {
        checkPiece('L', name);
      });
      document.getElementById("sbutton").addEventListener("click", function() {
        checkPiece('S', name);
      });
      document.getElementById("jbutton").addEventListener("click", function() {
        checkPiece('J', name);
      });
      document.getElementById("obutton").addEventListener("click", function() {
        checkPiece('O', name);
      });
      document.getElementById("tbutton").addEventListener("click", function() {
        checkPiece('T', name);
      });
    });
  }
  
  inserts();
  