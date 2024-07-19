import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter your description.');
    const convertToUpperCase = () => {
        // console.log(`convertToUpperCase ${text}`);
        let upperCase = text.toUpperCase();
        setText(upperCase);
    }
    const changeDesciptionValue = (e) => {
        // console.log('ON change');
        setText(e.target.value);
    }
    // setText("New description");
  return (
    <div>
<h1>{ props.heading }</h1>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={changeDesciptionValue} rows="8"></textarea>
</div>
<div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={convertToUpperCase}>Convert to uppercase</button>
  </div>
    </div>
  )
}
