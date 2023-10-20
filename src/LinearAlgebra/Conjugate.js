import { React, Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";


class Conjugate extends Component {
    createInput=()=>{
        var size = document.getElementById("size").value;
        var MatString = '';
        for(let i=0;i<size;i++){
            for(let j=0;j<size;j++){
                MatString += "<input type='number' id='mat"+i+j+"' style='width:50px;margin:1px'></input>"
            }
            MatString += " | <input type='number' id='matans"+i+"0' style='width:50px;margin:1px'></input>";
            MatString += "<br>";
        }
        console.log(size);
        document.getElementById("mat").innerHTML=MatString;
    }
    Conjugate=()=>{
        var size = document.getElementById("size").value;
        var mat = [];
        var matans = [];
        var x = [];
        for(let i=0;i<size;i++){
            mat.push([]);
            for(let j=0;j<size;j++){
                mat[i].push(document.getElementById("mat"+i+j).value);
           } 
            matans.push([]);
            matans[i].push(document.getElementById("matans"+i+"0").value);
            x.push([]);
            x[i].push(0);
          
        }

        // console.log(mat);
        // console.log(matans);
        // console.log(x);
        var lambda = [];
        var alpha = [];
        const printmat = mat =>{
            var ret = '';
            for(let i=0; i<mat.length; i++) {
                for(let j=0; j< mat[0].length; j++){
                    ret += mat[i][j]+"<br>";
                }
            }
            document.getElementById("ans").innerHTML = ret;
        };
        const plusmat = (mat1,mat2) => {
            var pmat =[];
            for(let i=0; i<mat1.length; i++) {pmat.push([]);}
            for(let i=0; i<mat1.length ; i++) {
                for(let j=0;j< mat1[0].length; j++) {
                    pmat[i].push(mat1[i][j]+mat2[i][j]);
                }
            }
            return pmat;
        };
        const minusmat = (mat1,mat2) => {
            var mnmat =[];
            for(let i=0; i<mat1.length; i++) {mnmat.push([]);}
            for(let i=0; i<mat1.length ; i++) {
                for(let j=0;j< mat1[0].length; j++) {
                    mnmat[i].push(mat1[i][j]-mat2[i][j]);
                }
            }
            return mnmat;
        };
        const multipymat = (mat1,mat2) =>{
            if(mat1[0].length===mat2.length){
                let mtpmat = [];
                for(let i=0; i<mat1.length; i++) {mtpmat.push([]);}
                let sum=0;
                for(let i   = 0; i < mat1.length; i++) {
                    for(let j = 0; j < mat2[0].length; j++) {
                        for(let k = 0; k < mat1[0].length; k++){
                            sum+=mat1[i][k]*mat2[k][j];
                        }
                        mtpmat[i].push(sum);
                        sum=0;
                    }
                }
                return(mtpmat);
            }else{console.log("matrics can't multipy");}
            
        };
        const transpose = mat => {
            let  tmat = [];
            for(let i=0; i<mat[0].length; i++) { 
                tmat.push([]);
                for(let j=0; j< mat.length; j++) {
                    tmat[i].push(mat[j][i]);
                }
            }
            return tmat;
        }
        var R = minusmat(multipymat(mat,x),matans);
        var D = multipymat(R,[[-1]]);
       
        do{
            var Dt =transpose(D);
            lambda=-1*((multipymat(Dt,R))[0][0]/(multipymat(multipymat(Dt,mat),D))[0][0]);
            x = plusmat(x,multipymat(D,[[lambda]]));
            R = minusmat(multipymat(mat,x),matans);
            var Rt = transpose(R);
            alpha = (multipymat(multipymat(Rt,mat),D))/(multipymat(multipymat(Dt,mat),D));
            D = plusmat(multipymat(R,[[-1]]),multipymat(D,[[alpha]]));
            printmat(x);
           
            
           
        }while(Math.sqrt(multipymat(transpose(R),R)[0][0])>=0.000001);
        
        
        
    }
    render() {
        return (
            <div>
                <h3 style={{ marginTop: "20px" }}>Conjugate Gradient</h3>
                <Row style={{margin:'5px'}}>
                <Col></Col>
                <Col>
                <Form.Group as={Row} >
                    <Form.Label column sm={7}>Matrix dimension :</Form.Label>
                    <Col sm={2}><Form.Select style={{ width: "60px" }} id="size" onChange={this.createInput}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                    </Col>
                </Form.Group>
                </Col>
                <Col></Col>
                </Row>
                <div id="mat"></div>
                <Button onClick={this.Conjugate} style={{marginTop:"50px"}}>Submit</Button>
                <div id="ans"></div>

            </div>
        );
    }
}
export default Conjugate;