import React from 'react';

function App() {
  const offices = [
    {
      name: "Skyline View",
      rent: 45000,
      address: "MG Road, Bengaluru",
      image: "https://img.freepik.com/premium-photo/contemporary-office-space-with-city-view-ultra-hd_995162-3208.jpg"
    },
    {
      name: "Tech Hub",
      rent: 65000,
      address: "Cyber City, Gurugram",
      image: "https://easyoffices.scdn8.secure.raxcdn.com/images/results/global-centre/IN19115/1024/19115-1-1024x640.jpg"
    },
    {
      name: "Green Space",
      rent: 55000,
      address: "Baner, Pune",
      image: "https://img.freepik.com/premium-photo/office-space-with-green-wall-greenery_865967-213151.jpg"
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Office Space Rental App</h1>

      {offices.map((office, index) => (
        <div key={index} style={{ 
          border: "1px solid #ccc", 
          padding: "15px", 
          margin: "15px", 
          borderRadius: "8px",
          boxShadow: "0 0 5px rgba(0,0,0,0.1)",
          maxWidth: "400px"
        }}>
          <img src={office.image} alt={office.name} style={{ width: "100%" }} />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p>
            <strong>Rent:</strong>{" "}
            <span style={{ color: office.rent < 60000 ? "red" : "green" }}>
              ₹{office.rent}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;

