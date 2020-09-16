import React, { useRef, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function DoctorNotepad() {
  const dropDown = useRef(null);
  const input = useRef(null);
  const addButton = useRef(null);

  const [searchMedicineValue, setSearchMedicineValue] = useState({ value: "" });

  const medication = useRef({});

  const [medicationRows, setMedicationRows] = useState(null);
  const [medicines, setMedicines] = useState(null);
  const [medicineList, setMedicineList] = useState([]);

  const confirmButton = <Button variant='warning' onClick={handleConfirm}> Confirm </Button>

  const [bottomButton, setBottomButton] = useState(confirmButton)

  useEffect(() => {
    fetchMedicineList();
  }, []);

  const fetchMedicineList = () => {
    fetch("/medicine/list")
      .then((res) => res.json())
      .then((res) => {
        setMedicines(getMedsList(res));
        setMedicineList(res);
      })
      .catch((err) => {
        console.log("Error fetching medicine data" + err);
      });
  };

  const fetchConditionsList = () => {
    fetch("/conditions/list")
    .then((res) => res.json())
    .then((res) => {
      setMedicines(getMedsList(res));
      setMedicineList(res);
    })
    .catch((err) => {
      console.log("Error fetching medicine data" + err);
    });
  }

  function toggleFunction(e) {
    e.preventDefault();
    dropDown.current.classList.toggle("show");
    toggleButtonType();
  }

  const handlePrescribe = (e) => {
    if (checkValidMeds(input.current.value)) {
      medication.current[input.current.value] = {
        name: input.current.value,
        dosage: 0,
        times: 0,
        beforeMeal: "Before",
      };

      setMedicationRows(getRows());
    }
  };

  // check if the medicine exists in the records before adding it to the prescription
  const checkValidMeds = (med) => {
    let ans = false;
    medicineList.forEach((m) => {
      if (m.name == med) {
        ans = true;
      }
    });
    return ans;
  };

  // when the doctor changes a dosage/ time of a prescribed medicine
  const changeValue = (e, med, index) => {
    medication.current[med][index] = e.target.value;
  };

  const handleRemove = (med) => {
    delete medication.current[med];
    setMedicationRows(getRows());
  };

  const getMedsList = (list) => {
    return list.map((med) => {
      return (
        <a
          onClick={(e) => {
            setSearchValue(e);
          }}
        >
          {med.name}
        </a>
      );
    });
  };


  // record the data in the database
  // set the appointment status to completed
  const saveMedicineData = () => {
    fetch('/treatments/', {
      method: 'post',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify({
        medication: medication.current
      })
    })
  }

  // send the prescription to the patient
  const sendPrescriptionToPatient = () => {

  }
  

  const getRows = () => {
    return Object.keys(medication.current).map((k, v) => {
      // console.log(medication.current[k])
      return (
        <tr>
          <td>{medication.current[k].name}</td>
          <td>
            <input
              type="number"
              onChange={(e) => {
                changeValue(e, k, "dosage");
              }}
              plaxeholder="0"
            ></input>
          </td>
          <td>
            <select onChange={ e => { changeValue(e, k, 'beforeMeal') } } >
              <option value="Before">Before</option>
              <option value="After">After</option>
            </select>
          </td>
          <td>
            <input onChange={ e => { changeValue(e, k ,'times') } } type="number"></input>
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


  // remove the confirm button
  const handleConfirm = () => {
    setBottomButton(null)
    sendPrescriptionToPatient()
    saveMedicineData()
  }

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
              {medicines}
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
      <div>
        {bottomButton}
      </div>
    </div>
  );
}
