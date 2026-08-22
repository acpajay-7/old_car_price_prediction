import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    Brand: "",
    Year: "",
    Kilometers_Driven: "",
    Fuel_Type: "",
    Transmission: "",
    Engine_CC: "",
    Mileage_kmpl: "",
    Seats: "",
    Owner_Count: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setPrediction(null);
    setError("");

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            Brand: formData.Brand,
            Year: Number(formData.Year),
            Kilometers_Driven: Number(
              formData.Kilometers_Driven
            ),
            Fuel_Type: formData.Fuel_Type,
            Transmission: formData.Transmission,
            Engine_CC: Number(formData.Engine_CC),
            Mileage_kmpl: Number(formData.Mileage_kmpl),
            Seats: Number(formData.Seats),
            Owner_Count: Number(formData.Owner_Count),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Prediction failed"
        );
      }

      setPrediction(data.predicted_price);

    } catch (error) {
      setError(error.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">

      <div className="header">

        <h1>🚗 CarValue AI</h1>

        <p>
          Intelligent Used Car Price Prediction
        </p>

      </div>


      <form onSubmit={handleSubmit}>

        {/* Brand */}

        <label>Brand</label>

        <input
          type="text"
          name="Brand"
          value={formData.Brand}
          onChange={handleChange}
          placeholder="Toyota"
          required
        />


        {/* Year */}

        <label>Year</label>

        <input
          type="number"
          name="Year"
          value={formData.Year}
          onChange={handleChange}
          placeholder="2022"
          required
        />


        {/* Kilometers */}

        <label>Kilometers Driven</label>

        <input
          type="number"
          name="Kilometers_Driven"
          value={formData.Kilometers_Driven}
          onChange={handleChange}
          placeholder="45000"
          required
        />


        {/* Fuel */}

        <label>Fuel Type</label>

        <select
          name="Fuel_Type"
          value={formData.Fuel_Type}
          onChange={handleChange}
          required
        >

          <option value="">
            Select Fuel Type
          </option>

          <option value="Petrol">
            Petrol
          </option>

          <option value="Diesel">
            Diesel
          </option>

          <option value="CNG">
            CNG
          </option>

          <option value="Electric">
            Electric
          </option>

        </select>


        {/* Transmission */}

        <label>Transmission</label>

        <select
          name="Transmission"
          value={formData.Transmission}
          onChange={handleChange}
          required
        >

          <option value="">
            Select Transmission
          </option>

          <option value="Manual">
            Manual
          </option>

          <option value="Automatic">
            Automatic
          </option>

        </select>


        {/* Engine */}

        <label>Engine (CC)</label>

        <input
          type="number"
          name="Engine_CC"
          value={formData.Engine_CC}
          onChange={handleChange}
          placeholder="1800"
          required
        />


        {/* Mileage */}

        <label>Mileage (km/l)</label>

        <input
          type="number"
          step="0.1"
          name="Mileage_kmpl"
          value={formData.Mileage_kmpl}
          onChange={handleChange}
          placeholder="20.5"
          required
        />


        {/* Seats */}

        <label>Seats</label>

        <input
          type="number"
          name="Seats"
          value={formData.Seats}
          onChange={handleChange}
          placeholder="5"
          required
        />


        {/* Owners */}

        <label>Number of Previous Owners</label>

        <input
          type="number"
          name="Owner_Count"
          value={formData.Owner_Count}
          onChange={handleChange}
          placeholder="1"
          required
        />


        {/* Button */}

        <button
          type="submit"
          disabled={loading}
        >

          {loading
            ? "Predicting..."
            : "Predict Car Price"}

        </button>

      </form>


      {/* Prediction */}

      {prediction !== null && (

        <div className="result">

          <h2>
            Estimated Car Price
          </h2>

          <div className="price">

            ₹{" "}
            {Number(prediction).toLocaleString(
              "en-IN"
            )}

          </div>

        </div>

      )}


      {/* Error */}

      {error && (

        <div className="error">

          ⚠️ {error}

        </div>

      )}

    </div>
  );
}

export default App;
