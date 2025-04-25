// import React from 'react'
// import RouteComponent from './routing/RouteComponent/RouteComponent';

// const App = () => {
//   return (
//     <div>
//       <RouteComponent/>
//     </div>
//   )
// }

// export default App


import React from 'react';
import RouteComponent from './routing/RouteComponent/RouteComponent';
import backgroundImage from './assets/images/about_bg_image.jpeg'; 

const App = () => {
  return (
    <div className="relative">
      {/* 🔥 Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* 🔥 Main Content Above */}
      <div className="relative z-10">
        <RouteComponent />
      </div>
    </div>
  );
};

export default App;
