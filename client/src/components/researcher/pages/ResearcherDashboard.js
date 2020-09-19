import React, { useState } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import whiteLogo from '../../../images/logo_white.png'
import ResearchPrediction from '../layouts/ResearchPrediction'
import ResearcherSearchCondition from './ResearcherSearchCondition'
import ResearcherSearchMedication from './ResearcherSearchMedication'

export default function ResearcherDashboard() {

    const [dashboardBody, setDashboardBody] = useState( null )

    const searchMeds = e => {
        setDashboardBody( <ResearcherSearchMedication/> )
    }

    const searchCon = e => {
        setDashboardBody( <ResearcherSearchCondition/> )
    }

    const predict = e => {
        setDashboardBody(<ResearchPrediction/>)
    }

    return (
        <Row className='researcher-dashboard-body'>
            <Col xs={3} className='researcher-dashboard-sidebar'>
                <img className='side-nav-logo' src={whiteLogo} />
                <hr/>
                <hr/>
                <hr/>

                <Button onClick={ searchMeds }>
                    Search Medication
                </Button>
                <hr/>
                <Button onClick={ searchCon }>
                    Search Mental Health Conditions
                </Button>
                <hr/>
                <Button onClick={predict}>
                    Medication Prediction
                </Button>
            </Col>
            <Col xs={7} className='researcher-dashboard-container'>
                { dashboardBody }
            </Col>
        </Row>
    )
}
