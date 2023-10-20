import { React, Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


class CramersRule extends Component {
    constructor() {
        super();
        console.log("constructor called");
    }
    componentDidMount() {
        console.log("componentDidmout called");
        this.createinputbox();
    }
    
    createinputbox =()=>{
        var Size = document.getElementById("Matsize").value;
        console.log(Size)
        var MatString = '';
        for(var i=0;i<Size;i++){
          for(var j=0;j<Size;j++){
            MatString +="<input id='Mat"+i+j+"' type='number' style='width:50px;margin:1px'/>";
          }
          MatString +=" | <input id='Matans"+i+"0' type='number' style='width:50px;margin:1px'/>";
          MatString +="<br>";
        }
        //console.log(MatString);
        document.getElementById("MatInput").innerHTML=MatString;
    }
    CramersRule=()=>{
        var Size = document.getElementById("Matsize").value;
        var mat=[];
        var matans=[];
        
        for(let i=0;i<Size;i++){
            mat.push([]);
            for(let j=0;j<Size;j++){
                mat[i].push(document.getElementById("Mat"+i+j).value);
           } 
            matans.push([]);
            matans[i].push(document.getElementById("Matans"+i+"0").value);

        }
        document.getElementById("showA").innerHTML=this.printmat(mat);
        
        const det = met =>{
            var determinant = 0;
            for (let k = 0; k < met.length; k++) {
                var multipy = 1;
                for (let l = 0; l < met.length; l++) {
                    var index = k+l;
                    if (index > met.length-1) {
                        index-=met.length;
                    }
        
                    multipy *= met[l][index];
                    
                }
                determinant += multipy;
            }
           
            for (let k = 2; k < (met.length*2)-1; k++) {
                multipy = 1;
                for (let l = 2; l >= 0; l--) {
                    index = k-l;
                    if (index > met.length-1) {
                        index-=met.length;
                    }
                    if (index < 0) {
                        index+=met.lengt-1;
                    }
        
                    multipy *= met[index][l];
                    
                }
                determinant -= multipy;
            }
            return determinant;
        };
        
        const copymat = met => {
            var copymet = [];
            for(let i = 0; i < met.length; i++) {
                copymet.push([]);
        }
            for(let i = 0; i < met.length; i++) {
                    copymet[i] = [...mat[i]];
                
           }
           return copymet;
        
        };
        
        var ans ='';
        var x=[];
        for (let i = 0; i < Size; i++) {
            x.push([]);
            var cramermet = copymat(mat);
            for (let j = 0; j < Size; j++){
                cramermet[j][i]=matans[j][0];

            }
            ans += (det(cramermet)/det(mat))+"<br>";
            x[[i]].push(det(cramermet)/det(mat));
            this.printmat(ans);

        }
        //console.log(x);
        this.multipymat(mat,x);
        document.getElementById("showX").innerHTML=this.printmat(x);
        //console.log(ans);
    }
    multipymat = (mat1,mat2) =>{
        if(mat1[0].length===mat2.length){
            let mtpmat = [];
            for(let i=0; i<mat1.length; i++) {
                mtpmat.push([]);
            }
            let sum=0;
            for(let i = 0; i < mat1.length; i++) {
                for(let j = 0; j < mat2[0].length; j++) {
                    for(let k = 0; k < mat1[0].length; k++){
                        sum+=mat1[i][k]*mat2[k][j];
                    }
                    mtpmat[i].push(sum);
                    sum=0;
                }
            }
            // return(mtpmat);
            console.log(mtpmat);
            document.getElementById("showB").innerHTML = this.printmat(mtpmat);

        }else{console.log("matrics can't multipy");}
        
    };
    printmat = (mat) => {
        var ret = "<table style='margin:0 auto;border-left: 2px solid black;border-right: 2px solid black;'>";
        for (let i = 0; i < mat.length; i++) {
            ret += "<tr>";
            for (let j = 0; j < mat[0].length; j++) {
                ret += "<td  style='padding:10px;'>"+mat[i][j]+"</td>";
            }
        }
        ret += "</table>"
        return ret;
    };
    render() {
        
        return (
            <Container style={{ margin: "auto"}}>
            <Row style={{textalign: "center"}}>
                <Col md={3}></Col>
                <Col md={6}>
                <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Cramer's Rule</h3>
                </Col>
                <Col md={3}></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col >
                    <Form.Group  as={Row} className="mb-2">
                        <Form.Label column sm="7">Matrix dimension:</Form.Label>
                        <Col sm="3"><Form.Select onChange={this.createinputbox} id="Matsize" aria-label="Default select example">
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </Form.Select></Col>
                        </Form.Group>
                </Col>
                <Col></Col>
            </Row>
           
            <div id="MatInput"></div>
            <Row>
                <Col></Col>
                <Col><Button style={{margin:"10px"}} onClick={this.CramersRule}  variant="primary">Execute</Button>
                </Col>
                <Col></Col>  
            </Row>
           
            <table >
                <tr>
                <td><Col id='showA'></Col></td>
                <td><Col id='showX'></Col></td>
                <td>=</td>
                <td><Col id='showB'></Col></td>
                </tr>
                
            </table>
            </Container>
            
        );
    }
}
export default CramersRule;