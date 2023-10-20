import React,{Component} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class Polynomial extends Component {
    componentDidMount() {
        this.createRow();
    }
    createRow=()=>{
        var Num = document.getElementById("size").value;
        var InputX = '';
        var InputY = 'y = ';
        for(let i=0;i<1;i++){
            InputX += "x = ";
            for(let j=0;j<Num;j++){
            InputX += "<input type='number' id='mat1"+i+j+"' style='width:100px;margin:1px'></input>"   
            InputY += "<input type='number'  id='mat2"+i+"0' style='width:100px;margin:1px'></input>"   
            }
            console.log(InputX);
            console.log(InputY);
        }
        InputX += "<br>";
        document.getElementById("box").innerHTML=InputX+InputY;
    }
    Linear=()=>{
        var Num = document.getElementById("size").value;
        var mat1 = [];
        var mat2 = [];
        for(let i=0;i<1;i++){
            mat1.push([]);
            mat2.push([]);
            for(let j=0;j<Num;j++){
                mat1[i].push(document.getElementById("mat1"+i+j).value);
                if(i===0){
                mat2[i].push(document.getElementById("mat2"+i+"0").value);
                }
            }
        }
        // console.log(mat1);
        // console.log(mat2);

        const Least_squares = (X, Y, M, num) => {
            var A = [];
            var B = [];
            const expo = (mat, expo) => {
                var exposum = [];
                for (var i = 0; i < mat.length; i++) {
                    exposum.push(mat[i] ** expo);
                }
                return exposum;
            }
            for (var i = 2; i <= M; i++) {
                X.push(expo(X[0], i));
            }
            for (let i = 0; i <= X.length; i++) {
                A.push([]);
                B.push([]);
                for (var j = 0; j <= X.length; j++) {
                    A[i].push(0);
                }
                B[i].push(0);
            }
            const sum = (mat) => {
                var sum = 0;
                for (var i = 0; i < mat.length; i++) {
                    sum += mat[i];
                }
                return sum;
            };
            const summultipy = (mat1, mat2) => {
                var sum = 0;
                for (var i = 0; i < mat1.length; i++) {
                    sum += mat1[i] * mat2[i];
                }
                return sum;
            };
            for (let i = 0; i < A.length; i++) {
                for (let j = i; j < A.length; j++) {
                    if (i === 0 && j === 0) {
                        A[i][j] = X[0].length;
                    }
                    if (i === j && i !== 0) {
                        A[i][j] = summultipy(X[i - 1], X[i - 1]);
                    }
                    if (i === 0 && j !== 0) {
                        A[i][j] = sum(X[j - 1]);
                        A[j][i] = sum(X[j - 1]);
                    }
                    if (i !== j && i !== 0 && j !== 0) {
                        A[i][j] = summultipy(X[i - 1], X[j - 1]);
                        A[j][i] = summultipy(X[i - 1], X[j - 1]);
                    }
        
                }
                if (i === 0) {
                    B[i][0] = sum(Y[0]);
                } else {
                    B[i][0] = summultipy(X[i - 1], Y[0]);
                }
            }
            for (let i = 0; i < A.length; i++) {
                for (let j = i + 1; j < A.length; j++) {
                    var multivar = A[j][i];
                    if (i + 1 <= A.length) {
                        for (let k = 0; k < A.length; k++) {
                            var x = A[j][k] - (A[i][k] / A[i][i]) * multivar;
                            A[j][k] = x;
                        }
                        var y = B[j][0] - (B[i][0] / A[i][i]) * multivar;
                        B[j][0] = y;
                    }
                }
            }
            var a = [];
            for (let j = 0; j < A.length; j++) {
                a.push(null);
            }
            for (let i = A.length - 1; i >= 0; i--) {
                var ans = 0;
                for (let j = A.length - 1; j >= 0; j--) {
                    if (a[j] !== null && A[i][j] !== 0) {
                        B[i][0] = B[i][0] - A[i][j] * a[j];
                    } else if (A[i][j] !== 0) {
                        ans += B[i][0] / A[i][j];
                    }
                }
                a[i] = ans;
            }
            for (let j = 0; j < A.length; j++) {
                console.log("a" + String(j) + " = " + String(a[j]));
            }
            ans = 0;
            for (let j = 0; j < a.length; j++) {
                ans += a[j] * (num ** j);
            }
            // return ans;
            document.getElementById("ans").innerHTML = ans;


        };
        console.log(Least_squares(mat1, mat2, 2, 65));

    }
    render(){
        return(
            <div>
               <h3 style={{ marginTop: "20px" }}>Polynomial Regression</h3>
                <Row style={{margin:'5px'}}>
                <Col></Col>
                <Col md={3}>
                <Form.Group as={Row} style={{ marginBottom: "10px" }} >
                    <Form.Label column sm={7}>Row :</Form.Label>
                    <Col sm={5}><Form.Select style={{ width: "60px" }} id="size" onChange={this.createRow}>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </Form.Select>
                    </Col>
                </Form.Group>
                </Col>
                <Col></Col>
                </Row>
                <div id='box'></div>
                <Button onClick={this.Linear} style={{marginTop:"50px"}}>Submit</Button>
                <div id="ans"></div>
            </div>
        );
    }
}
export default Polynomial;