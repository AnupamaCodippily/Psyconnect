import React from 'react'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export default function DoctorNotepad() {



    return (
        <div>
            <div className='searchMedicine'>
                <Form>
                    <Form.Control type="text" placeholder="Medication name" />
                    <Button variant="primary" type="submit">
                        PRESCRIBE
                    </Button>
                </Form>
            </div>
            <div className='prescriptionTable'>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Medication</th>
                            <th>Dosage(mg)</th>
                            <th>Before/After Meals</th>
                            <th>Times/day </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
