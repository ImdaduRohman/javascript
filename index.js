//filter
const angka = [2, 5, 2, 4, 7, 4, 9, 8, 9, 6];
const filterAngka = angka.filter(a => a > 5);

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
]
const filterTodo = todos.filter(a => a.todo === "belajar");
console.log(filterTodo[0].todo, "<== filter todo")