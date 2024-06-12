import './App.css';
import Card from './components/Card';

function App() {

  const cardData = {
    name: "Sarah Dole",
    handle: "@sarahdole",
    comment: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
  }

  return (
    <main className="flex justify-center">
      <Card name={cardData.name} handle={cardData.handle} comment={cardData.comment}/>
    </main>
  )
}


export default App
