# 🚗 Used Car Price Prediction

An end-to-end machine learning application that predicts the estimated selling price of a used car based on its features.

The project combines **Machine Learning, FastAPI, and a web-based frontend** to provide an interactive car price prediction experience.

## 🌐 Project Overview

Buying or selling a used car can be difficult because prices depend on several factors such as brand, model, year, fuel type, transmission, kilometers driven, and other vehicle characteristics.

This project uses machine learning to estimate the expected price of a used car from these inputs.

### Key Features

* 🚗 Used car price prediction
* 🤖 Machine Learning model
* ⚡ FastAPI backend
* 🌐 Interactive frontend
* 📊 Data preprocessing and feature engineering
* 🧪 Prediction testing
* 🔌 REST API architecture
* 📁 Organized project structure

## 🏗️ Architecture

```text
User
  ↓
Frontend
  ↓
FastAPI Backend
  ↓
Data Preprocessing
  ↓
Machine Learning Model
  ↓
Predicted Car Price
  ↓
Frontend
```

## 🛠️ Tech Stack

### Programming

* Python
* HTML
* CSS
* JavaScript

### Machine Learning

* Pandas
* NumPy
* Scikit-learn

### Backend

* FastAPI
* Uvicorn

### Development

* Jupyter Notebook
* Git
* GitHub

## 📂 Project Structure

```text
old_car_price_prediction/
│
├── backend/              # FastAPI backend
├── frontend/             # Web frontend
├── data/                 # Dataset
├── car_pp.ipynb          # Data analysis and model development
├── test_prediction.py    # Prediction testing
├── requirements.txt      # Python dependencies
└── README.md             # Project documentation
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/acpajay-7/old_car_price_prediction.git
```

Move into the project:

```bash
cd old_car_price_prediction
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

## ▶️ Run the Backend

Navigate to the backend directory:

```bash
cd backend
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

The API should then be available locally.

FastAPI also provides interactive API documentation at:

```text
/docs
```

## 🧪 Test the Prediction

Run:

```bash
python test_prediction.py
```

This can be used to verify that the prediction functionality is working correctly.

## 📊 Machine Learning Workflow

The machine learning workflow includes:

1. Data collection
2. Data cleaning
3. Exploratory Data Analysis
4. Feature selection
5. Data preprocessing
6. Model training
7. Model evaluation
8. Prediction
9. API integration
10. Frontend integration

## 🔮 Future Improvements

* Add more car-related features
* Improve model accuracy
* Add multiple ML models for comparison
* Add model performance metrics
* Improve frontend UI/UX
* Add authentication
* Add prediction history
* Deploy the complete application to the cloud

## 👨‍💻 Author

**Ajay**

B.Tech Information Technology Student

Interested in:

* Data Science
* Data Analytics
* Machine Learning
* Artificial Intelligence

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

**GitHub Repository:**
https://github.com/acpajay-7/old_car_price_prediction
