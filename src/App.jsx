import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  let image_arr = imageData()
  console.log(image_arr)
  return(
    <>
      <h1>Kalvium Gallery</h1>
        
      <div className = "parent_div">
        <img src={image_arr[0].img} className = 'image' id='image' alt="" />
        <img src={image_arr[1].img} className = 'image' id='image' alt="" />
        <img src={image_arr[2].img} className = 'image' id='image' alt="" />
        <img src={image_arr[3].img} className = 'image' id='image' alt="" />
      </div>
    </>
  )
}

export default App;
