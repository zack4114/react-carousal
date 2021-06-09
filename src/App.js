import './App.css';
import Carousal from './carousal';

const CAROUSAL_DATA = [
  {imageUri:'https://source.unsplash.com/user/erondu/640x360?a=12'},
  {imageUri:'https://source.unsplash.com/user/erondu/640x360?b=13'},
  {imageUri:'https://source.unsplash.com/user/erondu/640x360?c=14'},
  {imageUri:'https://source.unsplash.com/user/erondu/640x360?d=15'},
  {imageUri:'https://source.unsplash.com/user/erondu/640x360?e=16'},
  {imageUri:'https://source.unsplash.com/user/erondu/640x360?f=17'},
  {imageUri:'https://source.unsplash.com/user/erondu/640x360?g=8'}
]

function App() {
  const renderItem = ({item, index})=>{
    return <div>
      <img src={item.imageUri} alt={item.imageUri} style={{objectFit:'cover'}}/>
    </div>
  }
  return (
    <div className="App">
      <Carousal data={CAROUSAL_DATA} renderItem={renderItem}/>
    </div>
  );
}

export default App;
