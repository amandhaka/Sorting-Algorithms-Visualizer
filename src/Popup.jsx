import React, { Component } from 'react';
import {Button,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
class PopUp extends Component {
    constructor(props){
        super(props);
        this.state={
            modal:true,
        }
    }
    toggle() 
        {
            this.setState({modal:!this.state.modal});
        }
    render() {
        let styles={
            position:"absolute",
            textAlign:"center",
            left:"50%",
            top:"50%",
            width:"40vw",
            transform:"translate(-50%,-50%)",
        }
        return ( 
            <div>
                <Modal style={styles} toggle={()=>this.toggle()} isOpen={this.state.modal}>
                    <ModalHeader style={{fontFamily: "'Anton', sans-serif",fontWeight:'900'}}>Sorting Algorithm</ModalHeader>
                    <ModalBody style={{fontFamily:"'Rajdhani', sans-serif"}}>
                        Hey!<br></br>
                        This is a Sorting Algorithms Visualizer built using reactjs.
                        You can see how some of the most famous sorting algorithms work
                        i.e.<br></br>
                        <code>Bubble Sort, Merge Sort, Insertion Sort, Quick Sort, Selection Sort</code><br></br>
                        You can generate new array using "Generate New Array" button everytime and choose your sorting algorithm
                        to sort the bars and see how it is done.
                    </ModalBody>
                    <ModalFooter>
                    <Button onClick={()=>this.toggle()} color="danger" style={{width:'60px',right:'0',textAlign:'center'}}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
         );
    }
}
 
export default PopUp;