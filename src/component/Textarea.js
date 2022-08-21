import React ,{useState} from 'react'

export default function Textarea(props) {
  const handlechange=(event)=>{
    console.log("onchange");
    setText(event.target.value);
    
  }
  const handleUpClick =()=>{
    console.log("uppercase is cliclk" );
    let newText= Text.toUpperCase();
    setText(newText);
  }
  const handlelwClick =()=>{
    console.log("uppercase is cliclk" );
    let newText= Text.toLowerCase();
    setText(newText);
  }
  const handleclearClick =()=>{
    console.log("uppercase is cliclk" );
    let newText= "";
    setText(newText);
  }
  const [Text , setText]=useState("");
  
   return(
   
   
   <>
   
 <div className="container">
    <h1>{props.heading}</h1>
    <div className= " mb-3 my-3">
  <textarea className="form-control" value={Text} onChange={handlechange} id="my-box" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Conver To UpperCase</button>
<button className="btn bn btn-primary" onClick={handlelwClick}>Conver To LowerCase</button>
<button className="btn btn-primary mx-3" onClick={handleclearClick}>Click To Clear</button>


</div>
<div className="container">
   <h1 className="my-3">Your Text Summary</h1>
   <p> { Text.split(" ").length} word and { Text.length} charcter</p>
   <p>{0.088*Text.split(" ").length}</p>
   <h1>Preview</h1>
   <p>{Text}</p>
</div>

</> 
  )
}
