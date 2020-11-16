import {ColorPicker} from "./components/ColorPicker"

function App() {  
  const handleChange = (value) => {
    console.log('value change', value)
  }
  const handleSubmit = (value) => {
    console.log('value submitted', value)
  }
  const handleCancelled = (value) => {
    console.log('value cancelled', value)
  }
  const onSlidersBlockToggle = (value) => {
    console.log('block closed/opened', value)
  }

  return (
    <div className="App">
      <ColorPicker
        value={{
          r: "171",
          g: "133",
          b: "199",
        }}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={handleCancelled}
        onSlidersBlockToggle={onSlidersBlockToggle}
      />
    </div>
  );
}

export default App;
