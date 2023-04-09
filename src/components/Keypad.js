// Code Keypad Component Here

function Keypad (){
  function handlePasswordChange(event){
    console.log('Entering password...');
  }
    return (
        <div>
          <input onChange={handlePasswordChange} type="password" />
        </div>
    )
}

export default Keypad;