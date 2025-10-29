import ReactDOM from 'react-dom/client'
function Book(){
    return (
        <div>
            <img src="" width="200" height="" alt="image"/>
            <h3>Title: Physics</h3>
            <h4>Price:754/-</h4>
            <button>Add to cart</button>
        </div>

    )
}

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<Book/>);