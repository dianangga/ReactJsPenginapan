import React, { Component} from"react";
import "./App.css";
class XIR1 extends Component{
    
    constructor(props) {
        super(props); //parent dari props dimana nanti akan dijadikan rujukan
        this.state={dasar : "halo ",isi:" " }; //nilai awal state
    }
    //update nilai state yang ada di konstructor
    salamkan=()=>{ //fungsi => adalah untuk binding pada komponen 
        this.setState({dasar: "Salam Untukmu "});
    };
    handleChange =event=>{
        this.setState({ isi:event.target.value}); //untuk meuah nilai ketika form dinputkan
    };
    render(){
        return(
            <div className="color"> 
                <input type="text" onchange={this.handleChange} />
                <br/>
                {this.state.dasar}
                {this.props.namaDepan} {this.props.namaBelakang}
                <h5>{this.state.isi}</h5>
                <button onclick={this.salamkan}>CLICK</button>
            </div>
        
        //ini adalah contoh penggunaaan props
        //div  classname color
        //hello(this.props.namaDepan) (this.props.namaBelakang)
        //div
        
        //div <ClassName="color">Hello</div>
        );

    }
}

export default XIR1;