import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// type TitleProps = {
//   text: string;
// }

// outro jeito
// interface TitleProps = {
//   text: string;
// }

// componente!
// o text é do tipo TitleProps
// para passar como parametro
// const Title = ({ text } : TitleProps) => {
//   return <h1>{text}</h1>
// }

type TitleProps = {
  children: React.ReactNode;
  size?: "small" | "large";
}

type ParagraphProps = {
  color: "red";
}

const user = {
  id: 1,
  name: "Jon Doe"
};

// mesmo tipo que o user
type UserAttributes = typeof user;

// só aceita os tipos corretos
const mary : UserAttributes = {
  id: 2,
  name: "Mary"
};

function sumNumbers(a: number, b: number) {
  return a + b;
}

// function List({ items, render }) {
//   return (
//     <ul>
//       {items.map((item, index) => {
//         return render(item, index)
//       })}
//     </ul>
//   );
// }

const Title = ({ children, size } : TitleProps) => {
  return (
  <h1
    style={{
      fontSize: size === "small" ? "1.5rem" : "3rem"
    }}
    >
    {children}
  </h1>
  );
}

const Parapgraph = ({ children, size, color } : ParagraphProps & TitleProps) => {
  return (
    <h1
    style={{
      fontSize: size === "small" ? "1.5rem" : "3rem"
    }}
    >
    {children}
  </h1>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
         {/*<Title text="Hello World" />*/} { /* aqui passo como prorpiedade */}
        <Title size="small">
          <span>
            Hello World
          </span>
        </Title> { /* aqui passo como filho */}

        <Parapgraph color="red" size="small">
            Eu sou um paragrafo
        </Parapgraph>
    </div>
  )
}

export default App
