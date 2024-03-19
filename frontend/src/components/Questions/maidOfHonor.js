import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CategoryDropdown from './CategoryDropdown';


const MaidOfHonor = ({ categories, selectedCategory, handleSelectChange, rowsBridesmaids, handlePlusOneSelectChangeBridesmaids, plusOneValueBridesmaids, handleRangeChangeBridesmaids, addRowBridesmaids }) => {
    

  return (
    <div className='wedding-party-form'>
      <Form>
        <Table responsive="sm">
          <thead className='table-head'>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Category</th>
              <th>Plus One / Significant Other?</th>
              <th>Plus One First Name</th>
              <th>Plus One Last Name</th>
              <th>Check if plus one is also in a wedding party</th>
              <th>How important is it that the plus-one comes?</th>
            </tr>
          </thead>
          <tbody>
            {rowsBridesmaids.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><Form.Control type="text" /></td>
                <td><Form.Control type="text" /></td>
                <td>
                  <Dropdown>
                    <CategoryDropdown categories={categories} value={selectedCategory} onChange={handleSelectChange} isDropdown={false} className="category-select" />
                  </Dropdown>
                </td>
                <td>
                <DropdownButton variant="outline-secondary" title={row.plusOneSelectedBridesmaids ? 'Yes' : (row.plusOneSelectedBridesmaids === false ? 'No' : 'Select One')} onSelect={(value) => handlePlusOneSelectChangeBridesmaids(index, value)}>
                    <Dropdown.Item eventKey="Yes">Yes</Dropdown.Item>
                    <Dropdown.Item eventKey="No">No</Dropdown.Item>
                  </DropdownButton>
                </td>
              
                    <td><Form.Control type="text" disabled={!row.plusOneSelectedBridesmaids || row.plusOneSelectedBridesmaids === 'No'}/></td>
                    <td><Form.Control type="text" disabled={!row.plusOneSelectedBridesmaids || row.plusOneSelectedBridesmaids === 'No'}/></td>
                    <td>
                      <Form.Check
                        type="checkbox"
                        label="bridesmaid"
                        className="form-margins"
                        disabled={!row.plusOneSelectedBridesmaids || row.plusOneSelectedBridesmaids === 'No'}
                      />
                      <Form.Check
                        type="checkbox"
                        label="groomsmen"
                        disabled={!row.plusOneSelectedBridesmaids || row.plusOneSelectedBridesmaids === 'No'}
                      />
                    </td>
                    <td>
                      <Form.Range 
                      min={1} 
                      max={5} 
                      step={0.5} 
                      disabled={!row.plusOneSelectedBridesmaids || row.plusOneSelectedBridesmaids === 'No'}
                      value={plusOneValueBridesmaids[index]} // Use plusOneValue instead of rangeValue
                      onChange={(e) => handleRangeChangeBridesmaids(index, e)} // Pass index to identify which row is being changed
                      />
                      <p>Selected Value: {plusOneValueBridesmaids[index]}</p> {/* Show the corresponding plusOneValue */}
                    </td>
                
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
          <Button className='add-row-button' onClick={addRowBridesmaids}>Add Row</Button>
        </div>
      </Form>
    </div>
  );
}

export default MaidOfHonor;