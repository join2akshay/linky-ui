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
      {/* <div className="div-one"></div>

<div className="div-two" ></div>

<div className="overlay"></div> */}
<div className='wrap'>
  <div className='triangle-background'></div>
  <div className='triangle-background-weak'></div>
  <div className='triangle-background-strong'></div>
  <div className='github'></div>
  <div className='footer-two'></div>
  <div className='footer'></div>
</div>


      <div className='box'>

      <h1>Linky - a free link shortner</h1>

      <div>
        <input type='text' className='input-section' onChange={this.handleChange} />
        <button className='btn-p' onClick={this.handelSubmit}>
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
  
  width: 100vw;
  height: 100vh;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  position: absolute; 
  animation: 2s ease-out 0s 1 slideInFromLeft;
}

.div-two {
  background:blue;
  -webkit-clip-path: polygon(100vw 0, 0% 100%, 100vw 100vh);
  clip-path: polygon(100vw 0, 0% 100vh, 100vw 100vh);
  
  width: 100vw;
  height: 100vh;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:bottom;
  position: absolute; 
  animation: 0.5s ease-out 0s 1 slideInFromRight;
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

.input-section{
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  box-shadow: rgba(0,0,0,.075) 0 1px 1px inset;
  box-sizing: border-box;
  color: #555;
  display: table-cell;
  float: left;
  font-size: 14px;
  height: 34px;
  line-height: 1.42857;
  margin: 0;
  padding: 6px 12px;
  position: relative;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  width: 100%;
  z-index: 2;
}
.btn-p{
  -webkit-appearance: button;
  background-color: #007bff;
  border: 1px solid #007bff;
  border-radius: .25rem;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  overflow: visible;
  padding: .375rem .75rem;
  text-align: center;
  text-transform: none;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}
@keyframes slideInFromLeft {
  from { opacity: 0; }
  to { opacity: 1; }
  }
}

@keyframes slideInFromRight {
  from { opacity: 0; }
  to { opacity: 1; }
  }
}

.triangle-background {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 700px 700px 0 0;
  border-color: #F9F9F9 transparent transparent transparent;
  transition: border-width 0.5s;
}

.triangle-background-weak {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 500px 500px 0 0;
  border-color: #E8E8E8 transparent transparent transparent;
  transition: border-width 0.5s;
}

.triangle-background-strong {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 400px 400px 0 0;
  border-color: #D45E99 transparent transparent transparent;
  transition: border-width 0.5s;
}

.wrap {
  height: 100%;
  position: relative;
}
.wrap:hover .triangle-background {
  border-width: 700px 0 0 0;
}
.wrap:hover .triangle-background-weak {
  border-width: 0 500px 0 0;
}
.wrap:hover .triangle-background-strong {
  border-width: 400px 0 0 0;
}
.wrap:hover .github {
  border-width: 0 100px 0 0;
}
.wrap:hover .footer {
  border-width: 0 0 200px 200px;
}

.github {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 100px 100px 0 0;
  border-color: black transparent transparent transparent;
  transition: border-width 0.5s;
}

.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 0 200px;
  border-color: transparent transparent #333 transparent;
  transition: border-width 0.5s;
}

.footer-two {
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 0 400px;
  border-color: transparent transparent black transparent;
  transition: border-width 0.5s;
}



      `}</style>
   </div>

    )
  }
}
