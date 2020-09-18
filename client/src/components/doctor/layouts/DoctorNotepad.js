import React, { useRef, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function DoctorNotepad(props) {
  const dropDown = useRef(null);
  const input = useRef(null);
  const inputMedIndex = useRef()
  const conditionInput = useRef(null);
  const inputCondCode = useRef()
  const addButton = useRef(null);

  const [searchMedicineValue, setSearchMedicineValue] = useState({ value: "" });
  const [searchConditionValue, setSearchConditionValue] = useState({
    value: "",
  });

  const dropDownConditions = useRef();
  const addConditionButton = useRef();

  const medication = useRef({});
  const conditionRef = useRef({});

  const [medicationRows, setMedicationRows] = useState(null);
  const [medicines, setMedicines] = useState(null);
  const [medicineList, setMedicineList] = useState([]);
  const [conditionRows, setConditionRows] = useState(null);
  const [conditions, setConditions] = useState(null);
  const [conditionList, setConditionList] = useState([]);

  const confirmButton = (
    <Button variant="warning" onClick={() => { handleConfirm() }}>
      {" "}
      Confirm{" "}
    </Button>
  );

  const [bottomButton, setBottomButton] = useState(confirmButton);

  useEffect(() => {
    fetchMedicineList();
    fetchConditionsList();
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
        setConditions(getCondtionsList(res));
        setConditionList(res);
      })
      .catch((err) => {
        console.log("Error fetching condition data" + err);
      });
  };

  function toggleFunction(e) {
    e.preventDefault();
    dropDown.current.classList.toggle("show");
    toggleButtonType();
  }

  const toggleFunctionCondition = (e) => {
    dropDownConditions.current.classList.toggle("show");
    if (addConditionButton.current.innerText === "Add Condition") {
      addConditionButton.current.innerText = "Cancel";
      addConditionButton.current.style.backgroundColor = "red";
    } else {
      addConditionButton.current.innerText = "Add Condition";
      addConditionButton.current.style.backgroundColor = "#3e8e41";
    }
  };

  const handlePrescribe = (e) => {
    if (checkValidMeds(input.current.value)) {
      medication.current[input.current.value] = {
        name: input.current.value,
        dosage: 0,
        times: 0,
        beforeMeal: "Before",
        medication_index: inputMedIndex.current
      };

      setMedicationRows(getRows());
    }
  };

  const handleDiagnose = (e) => {
    if (checkValidCondition(conditionInput.current.value)) {
      conditionRef.current[conditionInput.current.value] = {
        name: conditionInput.current.value,
        condition_code: inputCondCode.current
      };

      setConditionRows(getConditionRows());
    }
  };

  const checkValidCondition = (con) => {
    let ans = false;
    conditionList.forEach((m) => {
      if (m.name == con) {
        ans = true;
      }
    });
    return ans;
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

  const handleRemoveCondition = (cond) => {
    delete conditionRef.current[cond];
    setConditionRows(getConditionRows());
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

  const getCondtionsList = (list) => {
    return list.map((cond) => {
      return (
        <a
          onClick={(e) => {
            setConditionSearchValue(e, cond.code);
          }}
        >
          {cond.name}
        </a>
      );
    });
  };

  // record the data in the database
  // set the appointment status to completed
  const saveMedicineData = () => {
    fetch("/treatment_data/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        medication: medication.current,
        diagnosis: conditionRef.current,
        patient_age: props.appointment.patient_age
      }),
    });
  };

  // send the prescription to the patient
  const sendPrescriptionToPatient = () => {
    fetch("/medication/", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        prescription: medication.current,
        date: new Date().toISOString(),
        appointment_id: props.appointmentId,
        patient_id: props.patientId,
      }),
    });
  };

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
              placeholder="0"
            ></input>
          </td>
          <td>
            <select
              onChange={(e) => {
                changeValue(e, k, "beforeMeal");
              }}
            >
              <option value="Before">Before</option>
              <option value="After">After</option>
            </select>
          </td>
          <td>
            <input
              onChange={(e) => {
                changeValue(e, k, "times");
              }}
              type="number"
            ></input>
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

  // remove the confirm button
  // send the prescription to the database (so the patient can access it)
  // send the treatment info to the database for ML
  const handleConfirm = () => {
    setBottomButton(<h6> Prescription sent. </h6>);
    sendPrescriptionToPatient();
    saveMedicineData();
  };

  // toggles a button between active and cancel
  const toggleButtonType = () => {
    if (addButton.current.innerText === "Add Medication") {
      addButton.current.innerText = "Cancel";
      addButton.current.style.backgroundColor = "red";
    } else {
      addButton.current.innerText = "Add Medication";
      addButton.current.style.backgroundColor = "#3e8e41";
    }
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

  // filters the list of conditions based on the letters typed by the doctor
  const filterFunctionCondition = (e) => {
    setSearchConditionValue({ value: e.target.value });

    var filter, a, i;
    filter = searchConditionValue.value.toUpperCase();
    let div = dropDownConditions.current;
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      let txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  };

  const setSearchValue = (e, medIndex) => {
    input.current.value = e.target.innerText;
    inputMedIndex.current = medIndex
  };

  const setConditionSearchValue = (e, condCode) => {
    conditionInput.current.value = e.target.innerText;
    inputCondCode.current = condCode
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

      <div className="conditionTable">
        <div className="dropdown">
          <button
            onClick={(e) => {
              toggleFunctionCondition(e);
            }}
            className="dropbtn"
            ref={addConditionButton}
          >
            Add Condition
          </button>
          <div ref={dropDownConditions} className="dropdown-content">
            <input
              type="text"
              placeholder="Medication Name"
              value={searchConditionValue.value}
              onChange={filterFunctionCondition}
              className="searchInput"
              ref={conditionInput}
            />
            {conditions}
          </div>
        </div>

        <Button variant="primary" onClick={handleDiagnose}>
          DIAGNOSE
        </Button>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Condition</th>
            </tr>
          </thead>
          {/* map the values to the table body */}
          <tbody>{conditionRows}</tbody>
        </Table>
      </div>

      <div>{bottomButton}</div>
    </div>
  );
}
