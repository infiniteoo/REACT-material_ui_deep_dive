import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup variant="contained" color="primary">
          <Button
            size="large"
            startIcon={<SaveIcon />}
            href="#"
            onClick={() => alert("hello")}
          >
            Save
          </Button>
          <Button
            size="large"
            endIcon={<DeleteIcon />}
            href="#"
            onClick={() => alert("hello")}
          >
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
