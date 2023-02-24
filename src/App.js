import Carousel from "./components/Carousel";

function App() {
  // some example images
  const slides = [
    "https://images.pexels.com/photos/12309506/pexels-photo-12309506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15579372/pexels-photo-15579372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13802279/pexels-photo-13802279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10041677/pexels-photo-10041677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10272685/pexels-photo-10272685.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/15578116/pexels-photo-15578116.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/2718416/pexels-photo-2718416.jpeg",
  ];

  return (
    <div className="w-screen h-screen p-4">
      <div className="max-w-lg mx-auto">
        <Carousel>
          {slides.map((slide) => (
            <img key={slide} src={slide} alt={slide} loading="lazy" className="w-full max-w-full object-cover object-center rounded-md" />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
