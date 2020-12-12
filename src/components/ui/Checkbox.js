import { h } from 'preact'
import './css/checkbox.styl'

export default function Checkbox({ id, labelText, checked, onChange }) {
  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{labelText}</label>
    </div>
  )
}
