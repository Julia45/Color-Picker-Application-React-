import { useState, Fragment } from 'react'
import { Button } from "./Button"
import { ColorChanger } from "./ColorChanger"
import { Rect } from "./Rect"

export function ColorPicker({ value, onChange, onSubmit, onCancel, onSlidersBlockToggle }) {
  const [color, setColor] = useState(value)
  const [show, setShow] = useState(true)
  const [currentColor, setCurrentColor] = useState({
    r: color.r,
    g: color.g,
    b: color.b,
  })

  function handleRedChange(value) {
    const nextColor = {
      ...color,
      r: value
    }

    setColor(nextColor)
    onChange(nextColor)
  }

  function handleGreenChange(value) {
    const nextColor = {
      ...color,
      g: value
    }

    setColor(nextColor)
    onChange(nextColor)
  }

  function handleBlueChange(value) {
    const nextColor = {
      ...color,
      b: value
    }

    setColor(nextColor)
    onChange(nextColor)
  }

  function handleSubmit() {
    setCurrentColor(color)
    onSubmit(color)
  }

  function handleCancel() {
    setColor(currentColor)
    onCancel(currentColor)
    handleOpenHide(false)
  }

  function handleOpenHide() {
    setShow(!show)
    onSlidersBlockToggle(!show)
  }

  return (
    <div className="ColorPicker">
      <Rect r={color.r} g={color.g} b={color.b} />
      {show &&
        <Fragment>
          <div className="color-changer__container">
            <ColorChanger value={color.r} onColorChange={handleRedChange} />
            <ColorChanger value={color.g} onColorChange={handleGreenChange} />
            <ColorChanger value={color.b} onColorChange={handleBlueChange} />
          </div>
          <div className="ColorPickerButtons">

            <Button name="Cancel" className="btn" onClick={handleCancel} />
            <Button name="Submit" className="btn" onClick={handleSubmit} />
          </div>
        </Fragment>
      }
      <Button name={show ? "Hide" : "Show"} className="openClose" onClick={handleOpenHide} />
    </div>
  );
}