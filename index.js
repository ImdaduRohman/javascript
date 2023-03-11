//VARIABLE
const angka = [2, 5, 2, 4, 7, 4, 9, 8, 9, 6];
const todos = [
    {
        id: 1,
        todo: "makan",
    },
    {
        id: 2,
        todo: "belajar"
    },
    {
        id: 3,
        todo: "mandi"
    }
];


//filter
const filterAngka = angka.filter(a => a > 5);
const filterTodo = todos.filter(a => a.todo === "belajar");


//map
const mapAngka = angka.map(a => a*2);

//reduce 
const readuceAngka = angka.reduce((a, b ) => a + b)