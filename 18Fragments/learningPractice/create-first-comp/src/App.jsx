import Dgbutton from "./Dgbutton";
import Hello from "./hello";
import Random from "./Random";

function Add(){


  let myName = 'Deepak Gupta';
  let fullName = () => {
    return 'Deepak ji cse wale ';
  }


  return <div>
      <h1>Deepak Gupta learned first time React  and i am mastering in react with name {myName} and {fullName()} </h1>
      <button> press with softly </button>
      <Dgbutton></Dgbutton>
      <Hello></Hello>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>

  </div>
}
export default Add;