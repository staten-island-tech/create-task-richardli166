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
    Ipiece: document.querySelector("#ibutton"),
    Zpiece: document.querySelector("#zbutton"),
    Lpiece: document.querySelector("#lbutton"),
    Spiece: document.querySelector("#sbutton"),
    Jpiece: document.querySelector("#jbutton"),
    Opiece: document.querySelector("#obutton"),
    Tpiece: document.querySelector("#tbutton"),
};