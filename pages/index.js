import Head from 'next/head'
// import React from 'react'
// export default class Home extends React.Component {
  
//   render{

//     return (
      
//     )
//   }
// }

import React, { Component } from 'react'
import Particles from 'react-particles-js';

export default class Index extends Component {

  state={
   longUrl:'',
   shortUrl:'',
   disable:false,
   Loading:false
  }

  handleChange=(e)=>{

    this.setState({
      longUrl:e.target.value
    })

   

  }
 
  handelSubmit=()=>{
    
    
    const regx=/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    if(regx.test(this.state.longUrl))
    {
      this.setState({
        disable:true,
        Loading:true
      },()=>console.log(this.state.disable))
      if(navigator.onLine){
        fetch('https://slimy.me/api/url/shorten', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(this.state) // body data type must match "Content-Type" header
        }).then((res)=>res.json()).then((data)=>this.setState({shortUrl:data.shortUrl,disable:false,Loading:false})); // parses JSON response into native JavaScript objects
      }else{
        alert('check your internet connection!!!')
    }
    }else
    {
      alert('Invalid URL\n exmaple:www.google.com')

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
  margin: 0 !important;
  background:#283145;
}
            `
          }
        </style>
      </Head>

      <main >
      <Particles
      className="headerParticles"
      style={{position:'fixed'}}
    params={{
      
	    "particles": {
	        "number": {
	            "value": 60,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.02
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.05
	        },
	        "size": {
	            "value": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />
  <div>

<div className="text">
<h1>Linky - a free link shortner</h1>
</div>
<div className='center-item' style={{position:'relative'}}>
        <input type='text' className='input-section' onChange={this.handleChange} />
        <button className='btn-p' onClick={this.handelSubmit} disabled={this.state.disable}>
        {
          this.state.Loading ? 'Loading' : 'Short this link'
        }
          
        </button>

        {
        this.state.shortUrl.length ? (
        <div className='copy-box'>

          <div onClick={this.copyToClip}  >{this.state.shortUrl}</div>
          
        <span className='click-copy'>
          Click to copy
        </span>
        </div>
          ):'' 
      }
        </div>
  </div>
   </main>

   <style jsx>{`
  
  

   .text {
	 color: #c58b8b;
   
    letter-spacing: .05em;
    text-shadow: 
      4px 4px 0px #d5d5d5, 
      7px 7px 0px rgba(0, 0, 0, 0.2);
	font-size:2.3em;
	font-family:  sans-serif;
	-webkit-animation: shift 2s ;
  animation: shift 2s ;
	margin-top:125px;
	text-align:center;
	text-transform:uppercase;
}
.headerParticles {
  position: fixed;
}

h2 {
	animation: appear 3.2s;
	text-align:center;
}

@keyframes shift {
	0% {opacity:0;}
	33% {margin-top:0px;opacity:0;}
	100% {margin-top:125px;opacity:1;text-shadow: 
      4px 4px 0px #d5d5d5, 
      7px 7px 0px rgba(0, 0, 0, 0.2);}
}

@keyframes appear {
	0% {opacity:0;}
	50% {opacity:0;}
	100% {opacity:1;}
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
.input-section{
  -webkit-box-flex: 1;
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0 .25rem .25rem 0;
  box-sizing: border-box;
  color: #495057;
  display: block;
  flex: 1 1 auto;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  overflow: visible;
  padding: .375rem .75rem;
  position: relative;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  width: 50%;
  margin-bottom:25px;
}
.center-item{
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
.copy-box{
  background: #fff;
    padding: 5%;
    margin: 5%;
    border-radius: 2%;
    font-size:20px;
    cursor: pointer;
}
.click-copy{
  font-size: 15px;
    bottom: 0;
    position: absolute;
    left: 45%;
}



      `}</style>
   </div>

    )
  }
}
