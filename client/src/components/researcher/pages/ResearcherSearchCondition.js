import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import ResearchConditionResults from "../layouts/ResearchConditionResults";

export default function ResearcherSearchCondition() {
  const dropDown = useRef(null);
  const input = useRef(null);
  const inputMedIndex = useRef();

  const conditionInput = useRef(null);
  const inputCondCode = useRef()

  const revMedList = useRef({})
  const medList = useRef({})
  const revConList = useRef({})
  const conList = useRef({})




  const [medicines, setMedicines] = useState(null);
  const [medicineList, setMedicineList] = useState([]);
  const [conditions, setConditions] = useState(null);
  const [conditionList, setConditionList] = useState([]);
  const [searchMedicineValue, setSearchMedicineValue] = useState({ value: "" });

  const [searchResults, setSearchResults] = useState(null) 
  const [searchResultsData, setSearchResultsData] = useState(null) 

  const medication = useRef({});

  function toggleFunction(e) {
    e.preventDefault();
    dropDown.current.classList.toggle("show");
  }

  useEffect(() => {
    fetchMedicineList();
    fetchConditionsList();
  }, []);

  const fetchMedicineList = () => {
    fetch("/medicine/list")
      .then((res) => res.json())
      .then((res) => {
        // setMedicines(getMedsList(res));
        setMedicineList(res)
        makemedlist(res)
        reverseMedicineList(res)
      })
      .catch((err) => {
        console.log("Error fetching medicine data" + err);
      });
  };

  const makemedlist = (list) => {

    (list).forEach( m => {
        medList.current[m.name] = { index: m.index }
    })

  }

  const makeConList = list => {
      list.forEach( i => {
          conList.current[i.name] = { code: i.code }
      } )
  }

  const reverseMedicineList = (list) => {

    (list).forEach( m => {
        revMedList.current[m.index] = { name: m.name }
    })
  }
  
  const reverseConList = (list) => {
    (list).forEach( m => {
        revConList.current[m.code] = { name: m.name }
    })
  }

  const fetchConditionsList = () => {
    fetch("/conditions/list")
      .then((res) => res.json())
      .then((res) => {
        setConditions(getCondtionsList(res));
        setConditionList(res);
        makeConList(res)
        reverseConList(res)
      })
      .catch((err) => {
        console.log("Error fetching condition data" + err);
      });
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

  const handleSearch = e => {

    //   if (checkValidConds(conditionInput.current.value)) {
    //     conditionRef.current[conditionInput.current.value] = {
    //       name: conditionInput.current.value,
    //       condition_code: inputCondCode.current
    //     };
    
        // setConditionSearchValue(conditionInput.current, conditionInput.current.value)
        searchCondition(conditionInput.current.value)
        // setMedicationRows(getRows());
//   }
}

  
  const setConditionSearchValue = (e, condCode) => {
    conditionInput.current.value = e.target.innerText;
    inputCondCode.current = condCode
  };

  const searchCondition = m => {
      fetch( '/treatment_data/data/condition/' + conList.current[m].code ) 
        .then( res => res.json() )
        .then( res => { 
            setSearchResults(res)
            setSearchResultsData(buildResults(res)) 
        })
        .catch(err => { alert(err) })
  }


  const buildResults = res => {
    return ( <ResearchConditionResults data={ res } conList={ revConList.current } medList={ revMedList.current }  /> )
  }

    // check if the medicine exists in the records
    const checkValidMeds = (med) => {
        let ans = false;
        medicineList.forEach((m) => {
          if (m.name == med) {
            ans = true;
          }
        });
        return ans;
      };


    const checkValidConds = c => {
        return conList[c]
    }

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

  const setSearchValue = (e, medIndex) => {
    input.current.value = e.target.innerText;
    inputMedIndex.current = medIndex;
  };


  return (
    <Container className="researcher-search-page">
      <div className="searchbar-researcher-medication">
        <div className="searchMedicine">
          <Form>
            <div className="dropdown">
                <input
                  onClick={(e) => {
                    toggleFunction(e);
                  }}
                  type="text"
                  placeholder="Medical Condition Name"
                  value={searchMedicineValue.value}
                  onChange={filterFunction}
                  className="searchInput medicine-search-input"
                  ref={conditionInput}
                  onKeyUp={filterFunction}
                />
              <div ref={dropDown} className="dropdown-content">
                {conditions}
              </div>
            </div>

            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        </div>
        <div className='medicine-results'>
            {searchResultsData}
        </div>
      </div>
    </Container>
  );
}
