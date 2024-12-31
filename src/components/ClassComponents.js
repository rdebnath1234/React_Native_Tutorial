import React,{Component} from 'react';
import {View,Text, Button} from 'react-native';
//CLASS COMPONENTS
class LifecycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
        };
        console.log("Constructor Called",this.state.count);
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps Called",props,state);
        return null;
    }
    
    componentDidMount(){
        console.log("componentDidMount Called",this.state.count);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate Called",nextProps,nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate Called",prevProps,prevState);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate Called",prevProps,prevState,snapshot);
    }
    componentWillUnmount(){
        console.log("componentWillUnmount Called");
    }
    increment = () => {
        this.setState({
            count:this.state.count + 1,
        });
        }
    render(){
        console.log("Render Called",this.state.count);
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{textAlign:'center',fontSize:25}}>Lifecycle Component</Text>
                <Text style={{textAlign:'center',fontSize:25}}>{this.state.count}</Text>
                <Button title="Increment" onPress={this.increment}></Button>
            </View>
        )
    }
}
export default LifecycleComponent;