const piece = [
{
    name: "I",
    description: "a long blue piece that is four mini blocks long"
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
    Play: document.querySelector("#playbutton"),
};

function inserts(){
    DOMSelectors.querySelector("#playbutton").addEventListener("click", 
    function(){
        DOMSelectors.querySelector(".typeButtons").innerHTML = "";
        DOMSelectors.querySelector(".typeButtons").insertAdjacentHTML("beforeend",
        `<div class="button">
        <button type="submit" id="ibutton">It is the I Piece!</button>
        <button type="submit" id="zbutton">It is the Z Piece!</button>
        <button type="submit" id="lbutton">It is the L Piece!</button>
        <button type="submit" id="sbutton">It is the S Piece!</button>
        <button type="submit" id="jbutton">It is the J Piece!</button>
        <button type="submit" id="obutton">It is the O Piece!</button>
        <button type="submit" id="tbutton">It is the T Piece!</button>
    </div>
    `)
    });
}
inserts();
