import React, { Component } from 'react' ;
import 'bootstrap/dist/css/bootstrap.min.css';

export class ToggleProfil extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            open: false,  
        };  
        this.togglebutton = this.togglebutton.bind(this);  
    }  
    togglebutton() {  
        const { open } = this.state;  
        this.setState({  
            open: !open,  
        });  
    }  
  
    render() {  
        var { title, children } = this.props;  
        const { open } = this.state;  
        if (open) {  
            title = 'Hide Users profil';  
        } else {  
            title = 'Show Users profil';  
        }  
        return (  
            <div className="container">  
                <div class="row" className="hdr">  
                    <span class="col-sm-8 btn btn-info">  
                        Show Hide Profil 
                         </span> 
                </div>  
                <div style={{ "marginTop": "10px" }}>  
                    <button class="col-sm-4 btn btn-secondary" onClick={this.togglebutton}>  
                        {title}  
                    </button>  
                    {open && (  
                        <div>  
                            {children}  
                        </div>  
                    )}  
                </div>  
            </div>  
            
        );  
    }  
}  
export default ToggleProfil;