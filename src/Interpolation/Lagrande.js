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
        console.log(InputBox);

        }
        // console.log(Num);
        document.getElementById("box").innerHTML=InputBox;
    }
    Lagrange=()=>{
        var size = document.getElementById("size").value;
        var mat = [];
        for(let i=0;i<size;i++){
            mat.push([]);
            for(let j=0;j<2;j++){
                mat[i].push(document.getElementById("mat"+i+j).value);
           } 
        }
        console.log(mat);
        var L = (x, j, arr) => {
            var top = 1,
              divide = 1;
            for (var l in arr) {
              if (l !== j) {
                top *= mat[arr[l] - 1][0] - x;
                divide *= mat[arr[l] - 1][0] - mat[arr[j] - 1][0];
              }
            }
            return top / divide;
          };
           var Fx = (x, arr) => {
            var ans =0;
            for (let i in arr){
              ans += mat[arr[i] - 1][1] * L(x, i, arr);
            document.getElementById("ans").innerHTML = ans;

            }
            // return ans;
          };
          var result = Fx(42000, [1, 2])
          console.log(result);

    }
    render(){
        return(
            <div>
               <h3 style={{ marginTop: "20px" }}>Lagrange Polynomials</h3>
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