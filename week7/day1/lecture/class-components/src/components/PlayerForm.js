import React, {Component} from 'react'

class PlayerForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            position:''
        }
        console.log('Constructor');
    }

    changeHandler = (e) => {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.props.addNewPlayer(this.state)
        this.setState({name:'',position:''})

    }
    componentDidMount(){
        console.log('Component mounted');
    }

    componentDidUpdate(){
        console.log('Component updated');
    }

    
    render(){
        console.log('RENDERED');
        return(
            <form onSubmit={this.submitHandler}>
                <label>Name: </label>
                <input type="text" name='name' onChange={this.changeHandler} value={this.state.name}/>

                <label>Position: </label>
                <input type="text" name='position'onChange={this.changeHandler} value={this.state.position}/>

                <button>Add Player</button>
            </form>
        )
    }
}
export default PlayerForm