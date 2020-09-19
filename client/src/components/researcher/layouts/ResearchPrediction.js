import React, { useRef, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function ResearchPrediction(props) {
  const dropDown = useRef(null);
  const input = useRef(null);
  const inputMedIndex = useRef();
  const conditionInput = useRef(null);
  const inputCondCode = useRef()
  const addButton = useRef(null);

  const [searchMedicineValue, setSearchMedicineValue] = useState({ value: "" });
  const [searchConditionValue, setSearchConditionValue] = useState({
    value: "",
  });
  const medication = useRef({});
  const conditionRef = useRef({});

  const [medicationRows, setMedicationRows] = useState(null);
  const [medicines, setMedicines] = useState(null);
  const [medicineList, setMedicineList] = useState([]);
  const [conditionList, setConditionList] = useState([]);
  const [conditions, setConditions] = useState(null);
  const [conditionRows, setConditionRows] = useState(null);

  let conditionListRef
  const medList = useRef({})
  const defaultAge = 20
  
  let age = defaultAge
  const searchObj = useRef({})
  const testAge = useRef(0)
  const aws_hosted_psyconnect_model_url =
    "https://ughmvqu74l.execute-api.us-east-2.amazonaws.com/psyconnectml/";

  useEffect(() => {
    fetchMedicineList();
    fetchConditionsList();
  }, []);

  function toggleFunction() {
    dropDown.current.classList.toggle("show");
  }

  const fetchMedicineList = () => {
    fetch("/medicine/list")
      .then((res) => res.json())
      .then((res) => {
        // setMedicines(getMedsList(res));
        setMedicineList(res);
        makemedlist(res)

      })
      .catch((err) => {
        console.log("Error fetching medicine data" + err);
      });
  };

  const fetchConditionsList = () => {
    fetch("/conditions/list")
      .then((res) => res.json())
      .then((res) => {
        setConditions(getConditionsList(res));
        setConditionList(res);
        conditionListRef = [...res]
      })
      .catch((err) => {
        console.log("Error fetching condition data" + err);
      });
  };

  const getConditionsList = (list) => {
    return list.map((cond) => {
      return (
        <a
          onClick={(e) => {
            setSearchValue(e, cond.code);
            handleAdd();
            toggleFunction();     
          }}
        >
          {cond.name}
        </a>
      );
    });
  };

  const conv_to_matrix = (obj) => {
        const matrix = []
        let test_age = ( age > 0 && age != "") ? age : defaultAge

        Object.keys(obj).forEach( (k,v) => {
            matrix.push([  test_age, conditionRef.current[k].code ])
        } )

        return matrix
  };


  
  const makemedlist = (list) => {

    (list).forEach( m => {
        medList.current[m.name] = { index: m.index }
    })

  }


  const predict = () => {
    console.log(conv_to_matrix(conditionRef.current))
    console.log(conditionRef.current)
    fetch(aws_hosted_psyconnect_model_url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify({ 
            // "data": conv_to_matrix(conditionRef.current)
            data: [ [ 3,4 ] ] 
        })
    })
    .then( res => 
        res.json()
    )
    .then( res => {
        console.log(res)
    })
    .catch( err => { alert('Error' + err); console.log(err) } )

  };

  const handleAdd = () => {
    if (checkValidCondition(input.current.value)) {

      conditionRef.current[input.current.value] = {
        name: input.current.value,
        code : inputCondCode.current,
      };

      setConditionRows(getConditionRows());
    }
  };

  
  const checkValidCondition = (con) => {
console.log(conditionList)
    let ans = false;
    conditionListRef.forEach((m) => {
      if (m.name == con) {
        ans = true;
      }
    });
    return ans;
  };


  const getConditionRows = () => {
    return Object.keys(conditionRef.current).map((k, v) => {
      return (
        <tr>
          <td>{conditionRef.current[k].name}</td>
          <td>
            <Button
              variant="danger"
              onClick={(h) => {
                handleRemoveCondition(k);
              }}
            >
              {" "}
              x{" "}
            </Button>
          </td>
        </tr>
      );
    });
  };

  const changeValue = (e, med, index) => {
    medication.current[med][index] = e.target.value;
  };

  const handleRemove = (med) => {
    delete medication.current[med];
    setMedicationRows(getRows());
  };

  const checkValidMeds = (med) => {
    let ans = false;
    medicineList.forEach((m) => {
      if (m.name == med) {
        ans = true;
      }
    });
    return ans;
  };

  const getMedsList = (list) => {
    return list.map((med) => {
      return (
        <a
          onClick={(e) => {
            setSearchValue(e, med.index);
          }}
        >
          {med.name}
        </a>
      );
    });
  };

  const getRows = () => {
    return Object.keys(medication.current).map((k, v) => {
      // console.log(medication.current[k])
      return (
        <tr>
          <td>{medication.current[k].name}</td>
          <td>
            <Button
              variant="danger"
              onClick={(h) => {
                handleRemove(k);
              }}
            >
              {" "}
              x{" "}
            </Button>
          </td>
        </tr>
      );
    });
  };

  // filters the list of medicine based on the letters typed by the doctor
  function filterFunction(e) {
    setSearchMedicineValue({ value: e.target.value });

    var filter, a, i;
    filter = searchMedicineValue.value.toUpperCase();
    let div = dropDown.current;
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      let txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  const setSearchValue = (e, code) => {
    input.current.value = e.target.innerText;
    inputCondCode.current = code;
  };

  const handleRemoveCondition = (cond) => {
    delete conditionRef.current[cond];
    setConditionRows(getConditionRows());
  };


  return (
    <div>
      <div className="searchMedicine" >
          <br/>
          <br/>
          <br/>
          <input type="number" placeholder="Age" ref={testAge} />

          <br/>
          <br/>
          <br/>
             <input
                onClick={(e) => {
                  toggleFunction(e);
                }}
                type="text"
                placeholder="Condition Name"
                value={searchConditionValue.value}
                onChange={filterFunction}
                className="searchInput"
                ref={input}
              />
          <br/>
          <br/>

          <div className="dropdown researcher-predict-search">
            <div ref={dropDown} className="dropdown-content">
 
              {conditions}
            </div>
          </div>
      </div>

      
      <Button onClick={predict}> PREDICT MEDICATION </Button>
      <br/>
      <br/>

      <div className="disclaimer" style={{ color: "red" }}>
        Disclaimer: This is purely educational. None of this data meant is to be
        used as a substitute for consulting a real, licensed medical
        professional
      </div>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th> Condition Name</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{conditionRows}</tbody>
      </Table>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Medication Name</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{medicationRows}</tbody>
      </Table>
    </div>
  );
}
