import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

//Normal Function

// function ncard(val,index,arr){
//   return (
//     <Card
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       links={val.links}
//     />
//   )
// }
// we can use Fat-Arrow Function inside a ReactDom.render

ReactDOM.render(
  <>
    <h1 className="heading_style"> List of Top 6 Netflix Series in 2020 </h1>
    {Sdata.map((val, index) => {
      //console.log(index);
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          links={val.links}
        />
        
      );
    })}



{/* This is for map method: */}

    {/* {Sdata.map((val, index) => {
      //console.log(index);
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          links={val.links}
        />
        
      );
    })} */}

    
   {/* Remove these all cards and use map() method instead of that  */}
    {/* This is callback function (ncard) */}
    {/* <Card
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      links={Sdata[1].links}
    />
    <Card
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      links={Sdata[2].links}
    />
    <Card
      imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      links={Sdata[3].links}
    /> */}
    
  </>, 
  document.getElementById("root")
);



// //Normal fun.
// function myName (a,b){
//   return a+b;
// }

// //ES6 Fat-arrow fun.
// const myName = (a,b) => a+b;