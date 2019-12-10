import React,{useState}from 'react'
import ItemsCarousel from 'react-items-carousel';
import{Form,Button} from 'react-bootstrap'

import DatePicker from "react-datepicker"
export default function TraveoTwo() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 100;
    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
          <div className='container'>
        <div style={{ height: 200, background: '#EEE' }}><div className='text-center'>Choose From and To City</div>
        
        
    
        <Form>
        <Form.Group controlId="formToCity">
    <Form.Label>To City:</Form.Label>
    <Form.Control type="text" placeholder="Enter To city" />
    
  </Form.Group>
  <Form.Group controlId="formfromCity">
    <Form.Label>From City:</Form.Label>
    <Form.Control type="text" placeholder="Enter From city" />
    
  </Form.Group>

        <div className='text-center'><Button className='primary'>Submit</Button></div>
        </Form>


   
        </div>
        </div>

        <div style={{ height: 200, background: '#EEE' }}><div className='text-center'>Pick Travel Date and Check PNR</div>
        <Form>
            <Form.Group>
            <div className='text-center'> <Form.Label>Pick Start Date:</Form.Label></div>
        <div className='text-center'><DatePicker/></div>
            </Form.Group>
        <Form.Group>
        <Form.Label>Yor PNR is:</Form.Label>
        <Form.Control type="text" placeholder="PNR" readOnly/>
        </Form.Group>
        <div className='text-center'><Button className='primary'>Submit</Button></div>
        
        </Form>
        
        
        
    
        </div>


        <div style={{ height: 200, background: '#EEE' }}><div className='text-center'>Mode Of Travel:</div>
        
        <form>

  <div className="form-check text-center">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option1"
        checked={true}
        className="form-check-input"
      />
      Flight
    </label>
  </div>

  <div className="form-check text-center">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option2"
        className="form-check-input"
      />
      Train
    </label>
  </div>

  <div className="form-check text-center">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="option3"
        className="form-check-input"
      />
      Bus
    </label>
  </div>

  
  <div className='text-center'>
      
      <textarea rows='10' cols='40'>Reason for Travel</textarea>
      </div>
      <div className="form-group text-center">
    <button className="btn btn-primary mt-2" type="submit">
      Submit
    </button>
  </div>
</form>
        
        
        
        
        </div>
        
      </ItemsCarousel>
    </div>
    )
}
