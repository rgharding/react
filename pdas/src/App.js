import Card from './Card';

function App() {

  return (
  <div>
    <Card name={'Siri'} handle={'@siri44'} theme={'Siri theme'} pic={'siriPic'} />
    <Card name={'Alexa'} handle={'@alexa99'} theme={'Alexas saying'} />
    <Card name={'Cortana'} handle={'@cortana12'} theme={'Cortana saying'}  />
  </div>
  );
}

export default App;