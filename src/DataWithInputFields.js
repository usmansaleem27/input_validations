import React, { useState } from "react";

const DataWithInputFields = () => {
  const [array, setArray] = useState([]);
  const [inputdata, setInputData] = useState({
    name: "", 
    number: "",
  });
  const [index, setIndex] = useState()
  const [bolin, setBolin] = useState(false)
  function data(e) {
    setInputData({ ...inputdata, [e.target.name]: e.target.value });
  }
  let {name,number}=inputdata
  function addInputData(){
    if(name==='' && number ===''){
    }
    else{
    setArray([...array,{name, number}])
    setInputData({name:'', number:''})
}
  }
//   console.log(array, 'total array')

// deleting a row here 
function deleteData(i){
    // console.log(i, 'this is to be deleted')
    let total=[...array]
    total.splice(i, 1)
    setArray(total)
}

function updateData(i){
    let {name, number}=array[i]
    setInputData({name, number})
    setBolin(true)
    setIndex(i)
}

function updateInfo(){
    let total = [...array]
    total.splice(index, 1,{name, number})
    // setBolin(false)
    setArray(total)
}

  return (
    <div>
      <div className="container" id="data_inputs">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              value={inputdata.name || ""} 
              name="name"
              autoComplete="off"
              placeholder="Enter Your Name"
              onChange={data}
            />
          </div>
          <div className="col-6">
            <input
              type="number"
              value={inputdata.number || ""}
              name="number"
              placeholder="Enter Number"
              onChange={data}
            />
            <button type="button" onClick={!bolin?addInputData:updateInfo} className='btn btn-primary'>
              {!bolin?`Add Data`: `Update Data`}
            </button>
          </div>
        </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>

        <table border='1' width='100%'>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr> 
{
    array && array.map(
        (item, i) => {
            return(
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.number}</td>
                    <td><button className="btn btn-primary" onClick={()=>updateData(i)}>Update</button></td>
                    <td><button className="btn btn-primary" onClick={()=>deleteData(i)}>Delete</button></td>
                </tr>
            )
        }
    )
}

            </tbody>
        </table>

    </div>
  );
};

export default DataWithInputFields;
