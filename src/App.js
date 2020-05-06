import React, {useState, useEffect} from 'react';
import './App.css';

var fakeData= [
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      "name": "CHECK PRINT SHIRT",
      "price": 110
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "GLORIA HIGH LOGO SNEAKER",
      "price": 91
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "CATE RIGID BAG",
      "price": 94.5
    },
    {
      "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      "name": "GUESS CONNECT WATCH",
      "price": 438.9
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "'70s RETRO GLAM KEFIAH",
      "price": 20
    }
  ]


function App() {
  const [page,setPage] = useState(1)

  function handleNext() {
    setPage(page+1)
  }

  return (
    <div className='container'>
        <div className ='row' >
        <div className = 'column'>
        <h1 style={{fontWeight:"bold"}}>// Example Inc.</h1>
        <br/>
        <InputPage page={page} handleNext={handleNext}/>
        </div>
        </div>
    </div>  
  );
}

export default App;

//--------------------

function InputPage(props) {
  let content = []

  switch(props.page) {

    case 1:
      content =  (
        <div>
        <h2>Your Name</h2>
        <input type='text' key={123}/>
        <button onClick={props.handleNext}> next </button>
        </div>
        )

        break;

    case 2:
      content = (
        <div>
        <h2>Your Age</h2>
        <input type='text'/>
        <h2>Phone Number</h2>
        <input type='text'/>
        <button onClick={props.handleNext}> next </button>
        </div>
        )
      
      break;

    case 3:
      content = (
        <div>
        <h2>Address</h2>
        <textarea />
        <button onClick={props.handleNext}> Submit </button>
        </div>
      )
      
      break;

    case 4:
      content = (
        <div>
        <h1>Thank you for submitting. </h1>
        <button onClick={props.handleNext} className="button button-clear">view products </button>
        </div>
      )
      break;

    case 5:
      content = (
        <ProductsList />
      )
      break;

  }

  return content;

}


function ProductsList() {
  const [list,setList] = useState(fakeData)
  let renderedList = []


  const handleChange = (e) => {
    let val = e.target.value;

    switch(val) {
      case "Increasing":
        let temp1 = [...list]
        temp1.sort((a,b) => a.price-b.price)
        setList(temp1)
        break;

      case "Decreasing":
        let temp2 = [...list]
        temp2.sort((a,b) => b.price-a.price)
        setList(temp2)
        break;

      case "Alphabetical":
        let temp3 = [...list]
        temp3.sort(function(a, b) {
              return a.name.localeCompare(b.name);
          })
        setList(temp3)
        break;
    }

  }

  useEffect(() => {
      let temp3 = [...list]
        temp3.sort(function(a, b) {
              return a.name.localeCompare(b.name);
          })
        setList(temp3)
  },[])
  

  renderedList = list.map(x => <Product data={x} />)


  return (<div>
      <select onChange={handleChange}> 
        <option>Alphabetical</option>
        <option>Increasing</option>
        <option>Decreasing</option>
      </select>

      {renderedList}

    </div>)


}




function Product(props) {
  return (
    <div className="product row">
      <div className="column">
      <img src={props.data.imgUrl} />
      </div>

      <div className="column">
      <label>PRODUCT: {props.data.name}</label>
      <label>PRICE: ${props.data.price}</label>
      </div>
    </div>
  )

}



/*{
  "name": "Product 6",
  "detail": "Lorem ipsum dolor sit amet",
  "price": "99",
  "info": "This is the latest and greatest product from Derp corp.",
  "offer": "info with offer",
  "image": "http://placehold.it/300x300/999/CCC"
}*/