import 'bulma/css/bulma.css';
import Card from './Card';
import siriPic from './images/siri.png';
import alexaPic from './images/alexa.png';
import cortanaPic from './images/cortana.png';

function App() {

  return (
  <div>
    <div>Personal Digital Assistant</div>

    <Card title='Siri' handle='@siri44' theme='Siri theme' image={siriPic} alt="logoPic"/>
    <Card title='Alexa' handle='@alexa99' theme='Alexas saying' image={alexaPic} alt="logoPic" />
    <Card title='Cortana' handle='@cortana12' theme='Cortana saying' image={cortanaPic} alt="logoPic" />
  </div>
  );
}

export default App;