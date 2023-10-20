import { React, Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

class Exam extends Component {
    componentDidMount() {
        this.createinputbox();
    }
    createinputbox = () => {
        var Size = document.getElementById("Matsize").value;
        console.log(Size);
        var MatString1 = '';
        for (var i = 0; i < Size; i++) {
            for (var j = 0; j < Size; j++) {
                MatString1 += "<input id='Mat1" + i + j + "' type='number' style='width:50px;margin:1px'/>";
            }
            MatString1 += "<br>";
        }
        var MatString2 = '';
        for (var i = 0; i < Size; i++) {
            for (var j = 0; j < Size; j++) {
                MatString2 += "<input id='Mat2" + i + j + "' type='number' style='width:50px;margin:1px'/>";
            }
            MatString2 += "<br>";
        }
        //console.log(MatString);
        document.getElementById("MatInput1").innerHTML = MatString1;
        document.getElementById("MatInput2").innerHTML = MatString2;
    }

    operation = () => {
        var num = document.getElementById("operation").value;
        var Size = document.getElementById("Matsize").value;
        var mat1 = [];
        var mat2 = [];
        for (let i = 0; i < Size; i++) {
            mat1.push([]);
            mat2.push([]);
            for (let j = 0; j < Size; j++) {
                mat1[i].push(document.getElementById("Mat1" + i + j).value);
                mat2[i].push(document.getElementById("Mat2" + i + j).value);
            }

        }
        console.log(mat1);
        console.log(mat2);
        console.log(num);
        if (num == 1) {
            var plus = [];
            for (let i = 0; i < mat1.length; i++) {
                plus.push([]);
                for (let j = 0; j < mat1[0].length; j++) {
                    plus[i].push(parseInt(mat1[i][j]) + parseInt(mat2[i][j]));
                }
            }
            //console.log(plus);
            this.printmat(plus);


        }
        else if (num == 2) {
            var minus = [];
            for (let i = 0; i < mat1.length; i++) {
                minus.push([]);
                for (let j = 0; j < mat1[0].length; j++) {
                    minus[i].push(parseInt(mat1[i][j]) - parseInt(mat2[i][j]));
                }
            }
            // console.log(minus);
            this.printmat(minus);
        }
        else if (num == 3) {
            let multi = [];
            let sum = 0;
            for (let i = 0; i < mat1.length; i++) {
                multi.push([]);
                for (let j = 0; j < mat2[0].length; j++) {
                    for (let k = 0; k < mat1[0].length; k++) {
                        sum += mat1[i][k] * mat2[k][j];
                    }
                    multi[i].push(sum);
                    sum = 0;
                }
            }
            // console.log(multi);
            this.printmat(multi);

        }
    }
    printmat = (mat) => {
        var ret = "<table style='margin:0 auto;'>";
        for (let i = 0; i < mat.length; i++) {
            ret += "<tr>";
            for (let j = 0; j < mat[0].length; j++) {
                ret += "<td  style='padding:10px;'>"+mat[i][j]+"</td>";
            }
        }
        ret += "</table>"

        document.getElementById("show").innerHTML = ret;
    };
    render() {

        return (
            <div>
                <Row>
                    <Col></Col>
                    <Col >
                        <Form.Group as={Row} className="mb-2">
                            <Form.Label column sm="7">Matrix dimension:</Form.Label>
                            <Col sm="3"><Form.Select style={{margin:"0 auto",marginTop:"5px"}} onChange={this.createinputbox} id="Matsize" aria-label="Default select example">
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select></Col>
                        </Form.Group>
                    </Col>
                    <Col></Col>
                </Row>

                <div style={{ display: "flex"}} >
                    <Col id='MatInput1'></Col>
                    <Col>
                    <Form.Group as={Row} className="mb-2">
                        <Col sm="3"><Form.Select  onChange={this.operation} id="operation" aria-label="Default select example">
                            <option value="1">+</option>
                            <option value="2">-</option>
                            <option value="3">*</option>
                        </Form.Select></Col>
                    </Form.Group></Col>
                    <Col id='MatInput2'></Col>
                </div>
                <Row>
                    <Col></Col>
                    <Col><Button style={{ margin: "10px" }} onClick={this.operation} variant="primary">Execute</Button>
                    </Col>
                    <Col></Col>
                </Row>
                <div id='show'></div>
            </div>
        );
    }

}
export default Exam;