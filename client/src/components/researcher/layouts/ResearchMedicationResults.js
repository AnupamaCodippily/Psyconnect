import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function ResearchMedicationResults(props) {
  const results = props.data;
  const revMedList = props.medList
  const revConList = props.conList

  const [rows, setRows] = useState(null)

  const number_of_treatments = results.length;

  let different_conditions_cases

  useEffect(() => {

      different_conditions_cases = getDifferentConditions(results);

      setRows(setupRows())

  }, [])


  function getDifferentConditions(r) {
    let obj = {};

    r.forEach((res) => {
      if (obj[res.condition_code]) {
        obj[res.condition_code].count += 1;
      } else {
        obj[res.condition_code] = { count: 1 };
      }
    });

    return obj;
  }

  function setupRows() {
      console.log(different_conditions_cases)
      console.log(revConList)
    return (
      <tbody>{Object.keys(different_conditions_cases).map( (k,v) => {
            return ( <tr>
                <td>
                    {revConList[k].name}
                </td>
                <td>
                    {different_conditions_cases[k].count}
                    
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
              <th>Condition</th>
              <th>Number of patients treated</th>
            </tr>
          </thead>
          {rows}
        </Table>
      </div>
    </div>
  );
}
