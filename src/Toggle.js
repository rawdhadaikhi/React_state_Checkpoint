import React ,{Component} from 'react';
import myimg from './profile.png';

class ShowProfil extends Component {    
    constructor(props){
        super(props);
        this.state ={
         name :'raoudha daikhi',
         bio : 'My soft skills are reactjs,nodejs,bootstrap',
         profession:'web developer',
         imageUrl :myimg,
        };
    }
    
    render() {  
    const styleH ={fontSize:'large',color:'#686868', textAlign:'center'}
    const styleProf = {textAlign:'center',color:'black'}
    const styleImg={width:100,height:100 ,margin:20};

        return (  
    <div style={{borderRadius :5,backgroundColor:'white', borderStyle:'outset', color:'#ffb3d1',height:450,width:350,padding:30,margin:'auto'}}> 
        <img src ={this.state.imageUrl}  alt ="" style={styleImg}/>  
      <h1 style={styleH}>FullName :{this.state.name}</h1>
      <h2 style={styleH}>Bio :{this.state.bio}</h2>
       <p style={styleProf}>Profession :{this.state.profession}</p>
     

          </div>  
        );  
    }  
}

export default ShowProfil; 