import React from "react";
import { useState } from "react";
function InputComp({ dataStorage,setDataStorage }) {
  const [maxInput, setmaxInput] = useState(50);
  const [InputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [bodyValue, setbodyValue] = useState("");
  console.log(dataStorage)
  const [filteredValue,setFilteredValue]=useState(dataStorage)
  console.log(bodyValue);
  console.log(InputValue);
  const randomID = `ID:${parseInt(1000 + Math.random() * 9000)}`;
  const date = new Date();
  function handleAddTittle(e) {
    const value = e;
    if (value.length <= 50) {
      setInputValue(value);
      setmaxInput(50 - value.length);
    }
  }
  function handleAddBody(e) {
    const value = e;
    setbodyValue(value);
  }
  function handleSubmit() {
    if (InputValue.length !== 0 && bodyValue.length !== 0) {
      let newNote={
        id: randomID,
        title: InputValue,
        body: bodyValue,
        archived: false,
        createdAt: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`,
      };
      console.log(dataStorage);
      setDataStorage([...dataStorage,newNote])
      setFilteredValue([...dataStorage,newNote])
    } else {
      alert("title dan body tidak boleh kosong");
    }
  }
  function handleChangeSearch(e){
    const value=e
    setSearchValue(value)
    console.log(dataStorage.filter(note=>note.title.toLowerCase().includes(searchValue.toLowerCase())))
    const searchNote=value.length>1?dataStorage.filter(note=>note.title.toLowerCase().includes(value.toLowerCase())):filteredValue
    setDataStorage(searchNote)
  }
  return (
    <>
      <div className="input-comp">
      <h1>Buat Catatan</h1>
        <p>{maxInput === 0 ? "Limit Text Habis" : maxInput}</p>
        <input
          className="input-title"
          type="text"
          placeholder="input Title"
          value={InputValue}
          onChange={(e) => handleAddTittle(e.target.value)}
        ></input>
        <textarea
          style={{ width: "100%" }}
          rows={15}
          cols={50}
          value={bodyValue}
          onChange={(e) => handleAddBody(e.target.value)}
          placeholder="Input Description"
        ></textarea>
        <button onClick={() => handleSubmit()}>Submit</button>
        <input
          className="input-title"
          type="text"
          placeholder="Search Title"
          value={searchValue}
          onChange={(e) => handleChangeSearch(e.target.value)}
        ></input>
      </div>
    </>
  );
}
export default InputComp;
