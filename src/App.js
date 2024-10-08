import React from 'react'
import Hello from "./hello"
import Counter from './Counter'
import Three from './Three'
//import Four from './Four'
import Five from './Five'
import Six from './Six'
import Seven from './Seven'
import Nine from './Nine'
import Ten from './Ten'
import Eleven from './Eleven'
import Twelve from './Twelve'
import Thirteen from './Thirteen'
import Fourteen from './Fourteen'
import Fifteen from './Fifteen'
import Sixteen from './Sixteen'
import Seventeen from './Seventeen'
import Eighteen from './Eighteen'
import Nineteen from './Nineteen'
import NineteenComp from './NineteenComp'
import { ThemeProvider, themeProvider } from './Themecontext'
function App() {
  //const items =['item1','item2','item3','item4'];
  return (
    <div>
      {/*<Hello/>*/}
      {/*<Counter/>*/}
      {/*<Three/>*/}
      {/*<Four/>*/}
      {/*<Five/>*/}
      {/*<Six/>*/}
      {/*<Seven/>*/}
      {/*<Nine/>*/}
      {/*<Ten/>*/}
      {/*<Eleven/>*/}
      {/*<Twelve/>*/}
      {/*<Thirteen/>*/}
      {/*<Fourteen/>*/}
      {/*<Fifteen items={items}/>*/}
      {/*<Sixteen items={items} itemsPerPage={2}/>*/}
      {/*<Seventeen/>*/}
      {/*<Eighteen/>*/}
      <ThemeProvider>
        <div className='App'>
        <Nineteen/>
        <NineteenComp/>
        </div>
      
      </ThemeProvider>
      
    </div>
  )
}
 
export default App
