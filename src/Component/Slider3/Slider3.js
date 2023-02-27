import ImageSlider from "./ImageSlider";
import "./Slider3.css";


const Slider3 = () => {


  const slides = [
    { url: "https://images.unsplash.com/photo-1673209892798-5ffcad7f24e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", title: "beach" },
    { url: "https://images.unsplash.com/photo-1673263300724-514bbcbd9c71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80", title: "boat" },
    { url: "https://images.unsplash.com/photo-1673245886394-bf2625fe2ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", title: "forest" },
    { url: "https://images.unsplash.com/photo-1673274488834-adfe9fc6236b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", title: "city" },
    { url: "https://images.unsplash.com/photo-1673262370990-35c215b1aade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", title: "italy" },
  ];



  return (
      <div className="containerStyles">
    

        <ImageSlider slides={slides} />


      </div>
  );
};

export default Slider3;