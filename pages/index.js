import Head from 'next/head'
// import React from 'react'
// export default class Home extends React.Component {
  
//   render{

//     return (
      
//     )
//   }
// }

import React, { Component } from 'react'
export default class Index extends Component {

  state={
   longUrl:'',
   shortUrl:''
  }

  handleChange=(e)=>{
console.log(e.target.value)
    this.setState({
      longUrl:e.target.value
    })

  }
 
  handelSubmit=()=>{
    const regx=/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    if(regx.test(this.state.longUrl))
    {
      if(navigator.onLine){
        fetch('http://localhost:5000/api/url/shorten', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(this.state) // body data type must match "Content-Type" header
        }).then((res)=>res.json()).then((data)=>this.setState({shortUrl:data.shortUrl})); // parses JSON response into native JavaScript objects
      }else{
        alert('check your internet connection!!!')
    }
    }else
    {
      alert('Invalid URL')

    }
     
   

  }
  copyToClip=()=>{
    navigator.clipboard.writeText(this.state.shortUrl)
   alert('copied')
  }

  render() {
    return (
      <div className="container">
      <Head>
        <title>Linky- a free link shortner</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          {
            `
            body {
  margin: 0 !important
}
            `
          }
        </style>
      </Head>

      <main >
      <div className="div-one"></div>

<div className="div-two" ></div>

<div className="overlay"></div>

      <div className='box'>

      <h1>Linky - a free link shortner</h1>

      <div>
        <input type='text' onChange={this.handleChange} />
        <button onClick={this.handelSubmit}>
          Short this link
        </button>

      </div>
      
      {
        this.state.shortUrl.length ? (<div onClick={this.copyToClip}  >{this.state.shortUrl}</div>):'' 
      }
     
      </div>

     
   </main>
   <style jsx>{`
  
   /* Code that does the work */

.div-one {
  background:red;
  width: 100vw;
  height: 100vh;
   background: url('http://farm1.staticflickr.com//447//19585243302_fae38fd86f_o.jpg');
  width: 100vw;
  height: 100vh;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  position: absolute; 
}

.div-two {
  -webkit-clip-path: polygon(100vw 0, 0% 100%, 100vw 100vh);
  clip-path: polygon(100vw 0, 0% 100vh, 100vw 100vh);
  background: url('https://farm9.staticflickr.com/8644/15964625458_d5c6d431ac_k.jpg');
  width: 100vw;
  height: 100vh;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:bottom;
  position: absolute; 
}




/* Decoration */

.overlay {
  width: 100vw;
  height: 100vh;
  background: rgba( 0, 0, 0, 0.3)
  position: absolute; 
}

.box {
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform:translate(-50%, -50%); 
  text-align: center; color: rgba(250, 250, 250, 0.8); 
  border: 4px double rgba(250, 250, 250, 0.2)
}

.box h1 {
  font-size: 11vh; 
  padding: 0 1em; 
  font-family: Quicksand;
}
      `}</style>
   </div>

    )
  }
}
