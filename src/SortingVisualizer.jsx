import React, { Component } from 'react';
import './SortingVisualizer.css';
import {mergeSort} from './sortingAlgorithms/mergeSort';
import {bubbleSort} from './sortingAlgorithms/bubbleSort';
import {quickSort} from './sortingAlgorithms/quickSort';
import {insertionSort} from './sortingAlgorithms/insertionSort';
import {selectionSort} from './sortingAlgorithms/selectionSort';
class SortingVisualizer extends Component {
    constructor(){
        super();
        this.state={
            array: [],
            bgColor:"",
            backgroud:'radial-gradient(circle, rgba(146,37,189,1) 9%, rgba(146,37,189,1) 40%, rgba(144,40,190,1) 42%, rgba(116,85,205,1) 85%)'
        }
    }
    componentDidMount(){
         this.resetArray();
     }
     resetArray(){
         const array=[];
         for(let i=0;i<250;i++){
             array.push(randomIntFromInterval(15,650));
         }
         this.setState({array:array,bgColor:this.state.backgroud});
     }
     disableButtons(){
        document.getElementById("generateArray").disabled=true;
        document.getElementById("bubbleSort").disabled=true;
        document.getElementById("selectionSort").disabled=true;
        document.getElementById("insertionSort").disabled=true;
        document.getElementById("mergeSort").disabled=true;
        document.getElementById("quickSort").disabled=true;
     }
     restoreButtons(){
        document.getElementById("generateArray").disabled=false;
        document.getElementById("bubbleSort").disabled=false;
        document.getElementById("selectionSort").disabled=false;
        document.getElementById("insertionSort").disabled=false;
        document.getElementById("mergeSort").disabled=false;
        document.getElementById("quickSort").disabled=false; 
     }
     selectionSort(){
         this.disableButtons();
         const [animations,array]=selectionSort(this.state.array);
         for(let i=0;i<animations.length;i++){
             const colorChange=(animations[i][0]==="compare1" || animations[i][0]==="compare2");
             const arrayBars=document.getElementsByClassName('array-bar');
             if(colorChange){
                 const [temp,barOne,barTwo]=animations[i];
                 setTimeout(()=>{
                    const barOneStyle=arrayBars[barOne].style;
                    const barTwoStyle=arrayBars[barTwo].style;
                    const color=(temp==="compare1")?'red':'#3498DB';
                     barOneStyle.background=color;
                     barTwoStyle.background=color;
                 },i*2);
             }
             else{
                 const[temp,barOne,newHeight]=animations[i];
                 const barOneStyle=arrayBars[barOne].style;
                 setTimeout(()=>{
                     barOneStyle.height=newHeight+'px';
                 },i*2);
             }
         }
         const timeout=animations.length*2;
         setTimeout(()=>{
             this.restoreButtons();
             this.setState({array:array})
         },timeout+100);
     }
     mergeSort(){
         this.disableButtons();
        // const sorted=mergeSort(this.state.array);
        // const jsorted=this.state.array.sort(function(a,b){return a-b});
        // console.log(arrayAreEqual(sorted,jsorted));
        const [animations,array]=mergeSort(this.state.array);
         for(let i=0;i<animations.length;i++){
             const arrayBars= document.getElementsByClassName('array-bar');
             const colorChange=i%3!==2;
             if(colorChange){
                 const [barOne,barTwo] = animations[i];
                 const barOneStyle=arrayBars[barOne].style;
                 const barTwoStyle=arrayBars[barTwo].style;
                 const color=i%3===0?'red':'#3498DB';
                 setTimeout(()=>{
                    barOneStyle.background=color;
                    barTwoStyle.backgroud=color;
                 },i*3.5);
             }
             else{
                 setTimeout(()=>{
                    const[barOne,newHeight]=animations[i];
                    const barOneStyle=arrayBars[barOne].style;
                    barOneStyle.height=newHeight+'px';
                 },i*3.5)
             }
         }
         const timeout=animations.length*3.5;
         setTimeout(()=>{
            this.restoreButtons();
            this.setState({array:array,bgColor:this.state.backgroud});
        },timeout+100);
    }
     bubbleSort(){
         this.disableButtons();
         //const sorted=bubbleSort(this.state.array);
         //const jsorted=this.state.array.sort(function(a,b){return a-b});
         //console.log(arrayAreEqual(sorted,jsorted));
         const [animations,array]=bubbleSort(this.state.array);
         //console.log(animations);
         for(let i=0;i<animations.length;i++){
             const arrayBars=document.getElementsByClassName('array-bar');
             const colorChange= i%4===0 || i%4===1;
             if(colorChange===true){
                 const [barOne,barTwo]=animations[i];
                 if(barOne===-1){
                     continue;
                 }
                 const barOneStyle=arrayBars[barOne].style;
                 const barTwoStyle=arrayBars[barTwo].style;
                 const color=i%4===0?'red':'#3498DB';
                 setTimeout(()=>{
                     barOneStyle.backgroud=color;
                     barTwoStyle.background=color;
                 },i*3);
             }
             else{
                 setTimeout(()=>{
                     const[barOne,newHeight]=animations[i];
                     if(barOne!==-1){
                     const barOneStyle=arrayBars[barOne].style;
                     barOneStyle.height=newHeight+'px';
                     }
                 },i*3);
             }
         }
         const timeout=animations.length*3;
         setTimeout(()=>{
            this.restoreButtons();
            this.setState({array:array})
        },timeout+100);
     }
     quickSort(){
         this.disableButtons();
         const [animations,array]=quickSort(this.state.array);
         for(let i=0;i<animations.length-1;i++){
             const arrayBars=document.getElementsByClassName('array-bar');
             const colorChange = (i%6===0) || (i%6===1);
             if(colorChange===true){
                 const[barOne,barTwo,barThree]= animations[i];
                 if(barOne===-1 || barTwo===-1){
                     continue;
                 }
                 const barOneStyle=arrayBars[barOne].style;
                 const barTwoStyle=arrayBars[barTwo].style;
                 const barThreeStyle=arrayBars[barThree].style;
                 let color=i%6===0?'red':'#3498DB';
                 let pivotColor=i%6===0?'yellow':'#3498DB';
                 setTimeout(()=>{
                     barOneStyle.background=color;
                     barTwoStyle.background=color;
                     barThreeStyle.background=pivotColor;
                 },i*3);
             }
             else{
                 const[barOne,newHeight]=animations[i];
                 if(barOne===-1 ){
                     continue;
                 }
                 const barOneStyle=arrayBars[barOne].style;
                 setTimeout(()=>{
                     barOneStyle.height=newHeight+'px';
                 },i*3);
             }
         }
         const timeout=animations.length*3;
         setTimeout(()=>{
            this.restoreButtons();
            this.setState({array:array});
        },timeout+100);
     }
     insertionSort(){
         this.disableButtons();
         const [animations,array]=insertionSort(this.state.array);
         for(let i=0;i<animations.length;i++){
             const colorChange=(animations[i][0]==="comparison1" || animations[i][0]==="comparison2");
             const arrayBars=document.getElementsByClassName('array-bar');
             if(colorChange){
                 const[temp,barOne,barTwo]=animations[i];
                 const color=(temp==="comparison1")?'red':'#3498DB';
                 setTimeout(()=>{
                     const barOneStyle=arrayBars[barOne].style;
                     const barTwoStyle=arrayBars[barTwo].style;
                     barOneStyle.background=color;
                     barTwoStyle.background=color;                     
                 },i*3)
             }
             else{
                 const[temp,barOne,newHeight]=animations[i];
                 setTimeout(()=>{
                    const barOneStyle=arrayBars[barOne].style;
                    barOneStyle.height=newHeight+'px';
                 },i*3);
             }
         }
         const timeout=animations.length*3;
         setTimeout(()=>{
            this.restoreButtons();
            this.setState({array:array})
        },timeout+100);
     }
    render() {
        const {array,bgColor}=this.state;
        let styles={
            height:'60px',
            width:'85vw',
            overflowY:'hidden',
            overflowX:'hidden',
            background:'linear-gradient(90deg, rgba(243,243,255,1) 8%, rgba(169,232,242,1) 100%)',
            display:'inline-block',
            borderRadius:'50px',
            boxShadow:'50px',
        };
        return (
            <div className="array-container">
                {
                    array.map((value,idx) => (
                        <div 
                        className="array-bar animated bounceInUp delay 2s"
                        key={idx}
                        style={{height: value,background:bgColor}}></div>
                    ))
                }
                <div className="card" style={styles} >
                <button id="generateArray" 
                className="btn btn-success m-2 animated slideInLeft delay 9s" 
                style={{borderRadius:'30px'}} onClick={()=>this.resetArray()} >Generate new Array</button>
        
                <button id="mergeSort" 
                className="btn btn-info m-2 animated slideInLeft delay 7s" 
                style={{borderRadius:'30px'}} onClick={()=>this.mergeSort()} >Merge Sort</button>
                
                <button id="bubbleSort" 
                className="btn btn-info m-2 animated slideInLeft delay 5s" 
                style={{borderRadius:'30px'}} onClick={()=>this.bubbleSort()} >Bubble Sort</button>
                
                <button id="quickSort" 
                className="btn btn-info m-2 animated slideInLeft delay 3s" 
                style={{borderRadius:'30px'}} onClick={()=>this.quickSort()} >Quick Sort</button>
                
                <button id="insertionSort" 
                className="btn btn-info m-2 animated slideInLeft delay 1s" 
                style={{borderRadius:'30px'}} 
                onClick={()=>this.insertionSort()}>Insertion Sort</button>
                
                <button id="selectionSort" 
                className="btn btn-info m-2 animated slideInLeft delay 0s" 
                style={{borderRadius:'30px'}} onClick={()=>this.selectionSort()} >Selection Sort</button>
                </div>
            </div>
         );
    }
}

function randomIntFromInterval(min,max){
    //min and max included
    return Math.floor(Math.random()*(max-min+1)+min);
}
// Testing the algorithms
/*function arrayAreEqual(sorted,jsorted){
    if(sorted.length!==jsorted.length){
        return false;
    };
    let i=0;
    let j=0;
    while(i<sorted.length && j<jsorted.length){
        if(sorted[i]!==jsorted[j])
        return false;
        i++;
        j++;
    }
    return true;
} 
*/
 
export default SortingVisualizer;