import { useState } from "react"
import "./switch.css"

interface Props {
  name: string //Required. Name of the switch
  checked?: boolean // Current state of the switch i.e ON/OFF.
  description?: string // Description of the switch
  isDisabled?: boolean // Disabled state.
}

export default function Switch({ name, checked, description, isDisabled }: Props) {
  let [isChecked, setisChecked] = useState(checked); // Hook to manage the on/off state of the switch.


  return (
    <div className={isDisabled ? "toggle-switch disable" : "toggle-switch"}>
      <input
        role="switch"
        type="checkbox"
        id={name}
        disabled={isDisabled}
        checked={isChecked}
        name={name}
        aria-label={`A ${checked ? "checked" : "unchecked"} Switch`}
        aria-checked={isChecked ? true : false}
        onClick={() => setisChecked(!isChecked)}
        onChange={() => null} //Used to perform some actions when changing the state of switch.
      />
      <label htmlFor={name}></label>
      <div id="description">{description}</div>
    </div>
  )
}