# 🚗 CarValue AI — Used Car Price Prediction

CarValue AI is a Machine Learning-powered web application that predicts the selling price of a used car based on important vehicle characteristics such as brand, manufacturing year, kilometers driven, fuel type, transmission, engine capacity, mileage, number of seats, and previous owners.

The project combines a trained Machine Learning model with a **FastAPI backend** and a modern frontend to provide an interactive car price prediction experience.

---

## 📌 Project Overview

Buying or selling a used car can be difficult because determining a fair market price depends on many factors.

CarValue AI uses Machine Learning to estimate the expected selling price of a used car from its specifications.

### Key Features

* 🚗 Used car price prediction
* 🤖 Machine Learning-based prediction
* ⚡ FastAPI REST API
* 📊 Data preprocessing and feature engineering
* 🔄 Real-time prediction through API
* 📖 Automatic API documentation with Swagger
* 💰 Prediction returned in Indian Rupees (INR)
* 🌐 Frontend interface for user interaction
* 🚀 Designed for cloud deployment

---

## 🏗️ Project Architecture

```text
                 ┌─────────────────────┐
                 │      Frontend       │
                 │   User Interface    │
                 └──────────┬──────────┘
                            │
                            │ HTTP Request
                            ▼
                 ┌─────────────────────┐
                 │    FastAPI Backend  │
                 │      /predict       │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │   ML Preprocessing  │
                 │ Feature Engineering │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │   Trained ML Model  │
                 │ car_price_model.pkl │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │ Predicted Car Price │
                 │        INR          │
                 └─────────────────────┘
```

---

## 🛠️ Technologies Used

### Programming

* Python
* JavaScript

### Data Science & Machine Learning

* Pandas
* NumPy
* Scikit-learn
* Jupyter Notebook
* Feature Engineering
* Data Preprocessing

### Backend

* FastAPI
* Uvicorn
* Pydantic
* Joblib

### Frontend

* React
* JavaScript
* HTML
* CSS

### Development & Deployment

* Git
* GitHub
* Render
* Vercel

---

## 📂 Project Structure

```text
Car_price_prediction/
│
├── backend/
│   ├── __init__.py
│   ├── main.py
│   ├── schemas.py
│   └── requirements.txt
│
├── frontend/
│   └── ...
│
├── data/
│   └── ...
│
├── car_price_model.pkl
├── car_pp.ipynb
├── .gitignore
└── README.md
```

---

## 📊 Input Features

The prediction model uses the following vehicle information:

| Feature           | Description                        |
| ----------------- | ---------------------------------- |
| Brand             | Car manufacturer/brand             |
| Year              | Manufacturing year                 |
| Kilometers_Driven | Total kilometers driven            |
| Fuel_Type         | Fuel type such as Petrol or Diesel |
| Transmission      | Manual or Automatic                |
| Engine_CC         | Engine capacity                    |
| Mileage_kmpl      | Vehicle mileage                    |
| Seats             | Number of seats                    |
| Owner_Count       | Number of previous owners          |

The application also derives additional features during preprocessing:

* **Car_Age**
* **Km_Per_Year**

These engineered features help the model understand the relationship between vehicle age, usage, and expected price.

---

## 🔌 API Endpoints

The FastAPI backend provides the following endpoints.

### Home

```http
GET /
```

Returns basic information about the API.

### Health Check

```http
GET /health
```

Used to check whether the backend service is running correctly.

### Price Prediction

```http
POST /predict
```

Accepts vehicle information and returns the predicted selling price.

---

## 📝 Example Prediction Input

```json
{
  "Brand": "Toyota",
  "Year": 2022,
  "Kilometers_Driven": 45000,
  "Fuel_Type": "Petrol",
  "Transmission": "Automatic",
  "Engine_CC": 1800,
  "Mileage_kmpl": 20.5,
  "Seats": 5,
  "Owner_Count": 1
}
```

### Example Response

```json
{
  "predicted_price": 1250000,
  "currency": "INR"
}
```

The exact prediction depends on the trained Machine Learning model.

---

## 📖 API Documentation

FastAPI automatically provides interactive API documentation.

When running locally:

```text
http://127.0.0.1:8000/docs
```

You can use Swagger UI to test the `/predict` endpoint directly from your browser.

---

## 💻 Run the Backend Locally

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/carvalue-ai.git
```

Move into the project:

```bash
cd carvalue-ai
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install backend dependencies:

```bash
pip install -r backend/requirements.txt
```

Start FastAPI:

```bash
uvicorn backend.main:app --reload
```

The API will run at:

```text
http://127.0.0.1:8000
```

Swagger documentation:

```text
http://127.0.0.1:8000/docs
```

---

## 🌐 Run the Frontend Locally

Move into the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will provide a local development URL in the terminal.

---

## 🚀 Deployment

The project is designed for separate frontend and backend deployment.

### Backend

The FastAPI backend can be deployed using:

**Render**

The deployment should use the backend's Python dependencies from:

```text
backend/requirements.txt
```

### Frontend

The frontend can be deployed using:

**Vercel**

The frontend should be configured to communicate with the deployed FastAPI backend URL.

---

## 🔐 Environment Variables

Sensitive information should not be committed to GitHub.

Use environment variables for configuration such as API URLs or secrets.

Example:

```text
.env
```

The `.env` file should remain excluded through `.gitignore`.

For deployment, environment variables should be configured directly in the hosting platform.

---

## 🧠 Machine Learning Workflow

The Machine Learning workflow used in this project includes:

```text
Data Collection
      ↓
Data Cleaning
      ↓
Exploratory Data Analysis
      ↓
Feature Engineering
      ↓
Data Preprocessing
      ↓
Model Training
      ↓
Model Evaluation
      ↓
Model Serialization
      ↓
FastAPI Integration
      ↓
Frontend Integration
      ↓
Deployment
```

---

## 🎯 Example Use Case

A user wants to estimate the value of a used Toyota car.

They provide:

* Brand
* Manufacturing year
* Kilometers driven
* Fuel type
* Transmission
* Engine capacity
* Mileage
* Number of seats
* Number of previous owners

CarValue AI processes these values and returns an estimated selling price in INR.

---

## 📈 Future Improvements

Possible future improvements include:

* Integration with real-time used-car market data
* More advanced Machine Learning models
* Model performance monitoring
* Price comparison with similar vehicles
* Interactive prediction history
* Improved UI/UX
* User authentication
* Database integration
* Automated model retraining
* Explainable AI for prediction reasoning

---

## 👨‍💻 Author

**Ajay**

Information Technology Undergraduate

Aspiring Data Scientist | Data Analyst | Machine Learning Engineer

Interested in Data Science, Machine Learning, Artificial Intelligence, and real-world data-driven applications.

---

## ⭐ Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.
