import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function ResearchConditionResults(props) {

    const results = props.data;
    const revMedList = props.medList
    const revConList = props.conList
  
    const [rows, setRows] = useState(null)
  
    const number_of_treatments = results.length;
  
    let different_medication_cases
  
    useEffect(() => {
  
        different_medication_cases = getDifferentMedications(results);
  
        setRows(setupRows())
  
    }, [])
  
  
    function getDifferentMedications(r) {
      let obj = {};
  
      r.forEach((res) => {
        if (obj[res.medication_index]) {
          obj[res.medication_index].count += 1;
        } else {
          obj[res.medication_index] = { count: 1 };
        }
      });
  
      return obj;
    }
  
    function setupRows() {
      return (
        <tbody>{Object.keys(different_medication_cases).map( (k,v) => {
              return ( <tr>
                  <td>
                      {revMedList[k].name}
                  </td>
                  <td>
                      {different_medication_cases[k].count}
                      
                  </td>
              </tr> )
        })}</tbody>
      );
    }
  
    return (
      <div>
        <div className="conditions-cases">
          <h4> This medicine is commonly used to treat the following </h4>
  
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Medication</th>
                <th>Number of patients treated</th>
              </tr>
            </thead>
            {rows}
          </Table>
        </div>
      </div>
    );

}
