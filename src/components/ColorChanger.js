import './ColorChanger.css';

export function ColorChanger ({ value, onColorChange }) {

  function handleChange(e) {
    onColorChange(e.target.value)
  }

  return (
    <div className="controler-container">
      <input type="range" min="0" max="255" className="controler" onChange={handleChange} value={value}/>
      <p className="inputValue">{value}</p>
    </div>
  );
}

