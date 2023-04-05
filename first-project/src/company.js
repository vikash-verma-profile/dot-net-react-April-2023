import React,{Component} from 'react';

class CompanyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''};
        
        this.GetSubmitValue=this.GetSubmitValue.bind(this);
        this.handleChange=this.handleChange.bind(this);
        //this.input=React.createRef();
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }

    GetSubmitValue(event){
        alert("You have entered the Name : "+this.state.value);
        event.preventDefault();
    }
    render(){
        return(<form onSubmit={this.GetSubmitValue}>

            <h1>Sample Form to get Input</h1>

            <label>Name
            <input type='text' value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>Company Name <input type='text' ref={this.input} />
            </label>
            <input type='submit' value="submit" />
        </form>);
    }
}
export default CompanyComponent;