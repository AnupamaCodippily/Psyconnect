import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import whiteLogo from '../../../images/logo_white.png'

export default function ResearcherDashboard() {
    return (
        <Row className='researcher-dashboard-body'>
            <Col xs={3} className='researcher-dashboard-sidebar'>
                <img className='side-nav-logo' src={whiteLogo} />
                <hr/>
                <hr/>
                <hr/>

                <Button>
                    Search Medication
                </Button>
                <hr/>
                <Button>
                    Search Mental Health Conditions
                </Button>
                <hr/>
                <Button>
                    Medication Prediction
                </Button>
            </Col>
            <Col xs={7} className='researcher-dashboard-container'>
            </Col>
        </Row>
    )
}
