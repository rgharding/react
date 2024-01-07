import 'bulma/css/bulma.css';
import Card from './Card';
import siriPic from './images/siri.png';
import alexaPic from './images/alexa.png';
import cortanaPic from './images/cortana.png';

function App() {

  return (
  <div>

    <section className="hero is-link">
      <div className='hero-body'>
      <p className="title">Personal Digital Assistant</p>
        </div>
    </section>

    <div className='container'>
      <section className="section">
        <div className='columns'>
          <div className='column is-4'>
            <Card title='Siri' handle='@siri44' theme='Siri theme' image={siriPic} alt="logoPic"/>
      </div>
      <div className='column is-4'>
        <Card title='Alexa' handle='@alexa99' theme='Alexas saying' image={alexaPic} alt="logoPic" />
      </div>
      <div className='column is-4'>
        <Card title='Cortana' handle='@cortana12' theme='Cortana saying' image={cortanaPic} alt="logoPic" />
      </div>
      </div>
      </section>

    </div>
</div>
  );
}

export default App;