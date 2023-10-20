import React,{Component} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class Lagrande extends Component {
    componentDidMount() {
        this.createRow();
    }
    createRow=()=>{
        var Num = document.getElementById("size").value;
        var InputBox = '';
        for(let i=0;i<Num;i++){
            for(let j=0;j<2;j++){
                InputBox += "<input type='number' id='mat"+i+j+"' style='width:100px;margin:1px'></input>"   
            }
            InputBox += "<br>";
        // console.log(InputBox);

        }
        // console.log(Num);
        document.getElementById("box").innerHTML=InputBox;
    }
    Lagrange=()=>{
        var val = document.getElementById("size").value;
    var num = document.getElementById("number").value;
    var fx = [];
    if (fx.length === 0) {
            for(let j = 0; j < val; j++) {
                fx.push([])
                fx[j].push( document.getElementById("fx" + j + "0").value)
                fx[j].push( document.getElementById("fy"+j+"0").value)
            }
      }
    
    var C = (x2,x1,fx) =>{
        if(x2===0&&x1===0){return Number(fx[x1][1]);}
        else if(x2-x1>1){
            return Number(C(x2,(x1+1),fx)-C((x2-1),x1,fx))/(fx[x2][0]-fx[x1][0]); }
        else{
            return Number(fx[x2][1]-fx[x1][1])/(fx[x2][0]-fx[x1][0]);}
    }
    var Fx= (x,fx) =>{
        var Ans=0;
        for(var i=0;i<fx.length;i++){ 
            var c = C(i,0,fx);
            
            for(let j=0; j<i ; j++){
                c*=(x-fx[j][0]);
                
            }
            Ans+=c;
        } return Ans;

    }
}
    render(){
        return(
            <div>
               <h3 style={{ marginTop: "20px" }}>Newton's Divided</h3>
                <Row style={{margin:'5px'}}>
                <Col></Col>
                <Col md={3}>
                <Form.Group as={Row} style={{ marginBottom: "10px" }} >
                    <Form.Label column sm={7}>Row :</Form.Label>
                    <Col sm={5}><Form.Select style={{ width: "60px" }} id="size" onChange={this.createRow}>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </Form.Select>
                    </Col>
                </Form.Group>
                </Col>
                <Col></Col>
                </Row>
                <Form.Label style={{paddingRight:"100px"}}>x</Form.Label>
                <Form.Label>y</Form.Label>
                <div id='box'></div>
                <Button onClick={this.Lagrange} style={{marginTop:"50px"}}>Submit</Button>
                <div id="ans"></div>
            </div>
        );
    }
}
export default Lagrande;