import { useCallback, useEffect, useState ,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")
  // ref hook
  const passwordRef = useRef(null)

  const passGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""
    if (number) str += "0123456789"
    if (character) str += "~@!#%^&*(){}|?/+*/"
    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length)
      pass += str.charAt(idx)
    }
    setPassword(pass)
  }, [length, number, character])

  const copyPasswordToClipBoard = useCallback(()=>{
      passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)


  },[password])

  useEffect(() => {
    passGenerator()
  }, [length, number, character, setPassword])

  return (
    <>
      <div className='w-screen h-screen bg-black flex items-center justify-center'>
        <div className=' rounded max-w-md  bg-slate-500 px-6'>
          <h1 className='  text-3xl py-2   text-center text-white'>Password Generator</h1>
          <input type="text" value={password}
            className='w-80 py-2.5 px-3 my-3 rounded-lg'
            readOnly
            ref={passwordRef}
            name="" id="" />
          <button  onClick={copyPasswordToClipBoard} className=' py-2.5 px-3 rounded-lg bg-blue-700 transition duration-150 ease-in-out transform active:scale-90'> copy </button>
          <div className=' flex items-center gap-x-2 '>
            <input type="range" min={8} max={100} value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className='text-black'> Length: {length}</label>
            <input type="checkbox" defaultChecked={character}
              onChange={() => { setCharacter((prev) => !prev) }}
            />
            <label className='text-black'>Character</label>
            <input type="checkbox" defaultChecked={number}
              onChange={() => { setNumber((prev) => !prev) }} />
            <label className='text-black'> Number </label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
