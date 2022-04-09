import React from "react";
//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    640: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1024: {
      items: 3,
    },
  },
};
class Testimoni extends React.Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className="lg:w-[1024px] md:w-[700px] sm:w-[500px] w-[300px] mt-20 px-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-[700]">Testimoni</h1>
          <OwlCarousel className="slider-items owl-carousel mt-10 text-center" {...options}>
            <div className="item bg-white">
              <div className="p-4 text-gray-800 rounded-lg shadow-md">
                <div className="mb-2">
                  <p className="mb-2 text-center text-gray-600 ">" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "</p>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                      <img src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg" alt="img" className="object-cover object-center w-full h-full" />
                    </div>
                    <h5 className="font-bold text-indigo-600">michael james</h5>
                    <p className="text-sm text-gray-600">web developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item bg-white">
              <div className="p-4 text-gray-800 rounded-lg shadow-md">
                <div className="mb-2">
                  <p className="mb-2 text-center text-gray-600 ">" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "</p>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                      <img src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg" alt="img" className="object-cover object-center w-full h-full" />
                    </div>
                    <h5 className="font-bold text-indigo-600">michael james</h5>
                    <p className="text-sm text-gray-600">web developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item bg-white">
              <div className="p-4 text-gray-800 rounded-lg shadow-md">
                <div className="mb-2">
                  <p className="mb-2 text-center text-gray-600 ">" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "</p>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                      <img src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg" alt="img" className="object-cover object-center w-full h-full" />
                    </div>
                    <h5 className="font-bold text-indigo-600">michael james</h5>
                    <p className="text-sm text-gray-600">web developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item bg-white">
              <div className="p-4 text-gray-800 rounded-lg shadow-md">
                <div className="mb-2">
                  <p className="mb-2 text-center text-gray-600 ">" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "</p>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                      <img src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg" alt="img" className="object-cover object-center w-full h-full" />
                    </div>
                    <h5 className="font-bold text-indigo-600">michael james</h5>
                    <p className="text-sm text-gray-600">web developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item bg-white">
              <div className="p-4 text-gray-800 rounded-lg shadow-md">
                <div className="mb-2">
                  <p className="mb-2 text-center text-gray-600 ">" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "</p>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                      <img src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg" alt="img" className="object-cover object-center w-full h-full" />
                    </div>
                    <h5 className="font-bold text-indigo-600">michael james</h5>
                    <p className="text-sm text-gray-600">web developer</p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
export default Testimoni;
