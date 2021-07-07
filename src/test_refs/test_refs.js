import React,{Fragment} from 'react';

class Test_refs extends React.Component{
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.txt = React.createRef();
        this.txt1 = React.createRef();
        // this.Display_hehe = this.Display_hehe.bind(this);
      }

Display_hehe=()=>{
    console.log(this.txt.current);
    console.log(this.txt1.current);
        // this.txt.current.focus();
        console.log(this.txt.current.value);
        console.log(this.txt1.current.value);
    // console.log('hêhh');
    }

render(){
    console.log(1)
    return(
        <Fragment>
            <input type='text' ref={this.txt} onFocus={this.Display_hehe} />
            <input type='number' ref={this.txt1}  />
            <button>Display</button>
        </Fragment>
       );
}
   
}


export default Test_refs;