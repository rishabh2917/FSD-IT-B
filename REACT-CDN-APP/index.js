function Book(book){
const img=React.createElement("img",{
    src:book.image,
     width:200,
    height:200,
    alt:"book image"
},null);
const h3=React.createElement("h3",null,book.title)
const h4=React.createElement("h3",null,book.price)
const btn=React.createElement("button",null,"add to cart")
const div=React.createElement("div",{className:"card"},Image,h3,h4,btn);
return div;
}
const parent=document.getElementById("root");
ReactDOM.render(React.createElement(Book,{
    image:"https://imgs.search.brave.com/vxInoK4HjJ8bKcqU1TCcEYkkfbI1v0AfdjkuZOUMiCI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF6TncyK2oyNUwu/anBn",
    title:"Physics",
    price:451
}));
