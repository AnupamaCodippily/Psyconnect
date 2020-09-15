import React, { useRef, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { response } from "express";

export default function DoctorNotepad() {
  const dropDown = useRef(null);
  const input = useRef(null);
  const addButton = useRef(null);

  const [searchMedicineValue, setSearchMedicineValue] = useState({ value: "" });

  const medication = useRef({});

  const [medicationRows, setMedicationRows] = useState(null);
  const [medicines, setMedicines] = useState(null)
  let medicineList


  useEffect( () => {
      fetchMedicineList()
  }, [])

  const fetchMedicineList =  () => {
    fetch ('/medicine/list')
    .then( res =>{ res.json()} )
    .then( res => { setMedicines(res)} )
    .catch( err => { console.log('Error fetching medicine data') })
  }

  function toggleFunction(e) {
    e.preventDefault();
    dropDown.current.classList.toggle("show");
    toggleButtonType();
    // alert(1)
  }

  const handlePrescribe = (e) => {
    medication.current[input.current.value] = {
      name: input.current.value,
      dosage: 0,
      times: 0,
      beforeMeal: true,
    };

    setMedicationRows(getRows());
  };


  const handleChangeValue = (med, index) => {

  };

  const handleRemove = (med) => {
    delete medication.current[med];
    console.log(medication.current);
    setMedicationRows(getRows());
  };



  const getMedsList = list => {
    return list.map( med => {
        return(<a
        onClick={(e) => {
          setSearchValue(e);
        }}
      >
        { med.name }
      </a>)
    } )
  }

  const getRows = () => {
    return Object.keys(medication.current).map((k, v) => {
      // console.log(medication.current[k])
      return (
        <tr>
          <td>{medication.current[k].name}</td>
          <td>
            <input type="number" value={medication.current[k].dosage}></input>
          </td>
          <td>
            <select
              value={
                medication.current[k].beforeMeal === true ? "Before" : "After"
              }
            >
              <option value="After">After</option>
              <option value="Before">Before</option>
            </select>
          </td>
          <td>
            <input type="number" value={medication.current[k].times}></input>
          </td>
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

  const toggleButtonType = () => {
    if (addButton.current.innerText === "Add Medication") {
      addButton.current.innerText = "Cancel";
      addButton.current.style.backgroundColor = "red";
    } else {
      addButton.current.innerText = "Add Medication";
      addButton.current.style.backgroundColor = "#3e8e41";
    }
  };

  function filterFunction(e) {
    setSearchMedicineValue({ value: e.target.value });

    var input, filter, ul, li, a, i;
    // input = document.getElementById("myInput");
    filter = searchMedicineValue.value.toUpperCase();
    // alert(filter)
    let div = dropDown.current;
    a = div.getElementsByTagName("a");
    // alert(a.length)
    for (i = 0; i < a.length; i++) {
      let txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  const setSearchValue = (e) => {
    input.current.value = e.target.innerText;
  };

  return (
    <div>
      <div className="searchMedicine">
        <Form>
          <div className="dropdown">
            <button
              onClick={(e) => {
                toggleFunction(e);
              }}
              className="dropbtn"
              ref={addButton}
            >
              Add Medication
            </button>
            <div ref={dropDown} className="dropdown-content">
              <input
                type="text"
                placeholder="Medication Name"
                value={searchMedicineValue.value}
                onChange={filterFunction}
                className="searchInput"
                ref={input}
                onKeyUp={filterFunction}
              />
              { medicines }
              {/* <a
                onClick={(e) => {
                  setSearchValue(e);
                }}
              >
                About
              </a>
              <a
                onClick={(e) => {
                  setSearchValue(e);
                }}
              >
                Benzene
              </a>
              <a
                onClick={(e) => {
                  setSearchValue(e);
                }}
              >
                Acid
              </a>
              <a
                onClick={(e) => {
                  setSearchValue(e);
                }}
              >
                Nutella
              </a>
              <a
                onClick={(e) => {
                  setSearchValue(e);
                }}
              >
                Kittens
              </a> */}
            </div>
          </div>

          <Button variant="primary" onClick={handlePrescribe}>
            PRESCRIBE
          </Button>
        </Form>
      </div>
      <div className="prescriptionTable">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Medication</th>
              <th>Dosage(mg)</th>
              <th>Before/After Meals</th>
              <th>Times/day </th>
              <th> </th>
            </tr>
          </thead>
          {/* map the values to the table body */}
          <tbody>{medicationRows}</tbody>
        </Table>
      </div>
    </div>
  );
}
