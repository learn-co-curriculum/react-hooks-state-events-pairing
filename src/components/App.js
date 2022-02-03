import video from "../data/video.js";
import MainContent from "./MainContent.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <MainContent video={video}/>
    </div>
  );
}

export default App;

//App
  //Main content 
      //Comments 