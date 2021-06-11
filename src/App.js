import React from 'react'
import './App.css';
import Carousal from './carousal';

//added code splitting, so it will not send the component to client side if that component is not needed
//preventing the unnecessary increase in bundle size
import withLazyLoding from './withLazyLoding';
const CarousalImageComponent = withLazyLoding(React.lazy(() => import("./CarousalImageComponent")))
const CarousalDivComponent = withLazyLoding(React.lazy(() => import("./CarousalDivComponent")))
const CarousalTextComponent = withLazyLoding(React.lazy(() => import("./CarousalTextComponent")))


const CAROUSAL_DATA = [
  {data:{imgUri: 'https://source.unsplash.com/user/erondu/640x360?a=12'}, type:'IMAGE'},
  {data:{heading: 'Heading', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}, type:'DIV'},
  {data:{imgUri: 'https://source.unsplash.com/user/erondu/640x360?c=12'}, type:'IMAGE'},
  {data:{text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}, type:'TEXT'},
]

//can have mapping of components rather than using switch case.
// const componentMap = {
//   'IMAGE': ImageComponent,
//   'DIV': DivComponent,
//   'TEXT': TextComponent,
//   etc...
// }

function App() {
  const renderItem = ({item, index})=>{
    switch(item.type) {
      case 'IMAGE':
        return <CarousalImageComponent data={item}/>
      case 'DIV':
        return <CarousalDivComponent data={item}/>
      case 'TEXT':
        return <CarousalTextComponent data={item}/>
      default:
        return null
    }
  }
  return (
    <div className="App">
      <Carousal data={CAROUSAL_DATA} renderItem={renderItem}/>
    </div>
  );
}

export default App;
