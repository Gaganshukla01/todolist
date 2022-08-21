
import './App.css';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';

function App() {
  return (
    <>
<Navbar />
<div className="container">
<Textarea heading="Enter your text here for analysis"/>
</div>
    </>

    
  );
}

export default App;
