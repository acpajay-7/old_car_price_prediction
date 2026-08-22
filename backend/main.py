from fastapi import FastAPI
import joblib as joblib
import pandas as pd

from schemas import CarInput
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="CarValue AI",
    description="Used Car Price Prediction API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

MODEL_PATH = BASE_DIR / "car_price_model.pkl"

model = joblib.load(MODEL_PATH)




@app.get("/")
def root():

    return {
        "message": "CarValue AI API is running"
    }


@app.get("/health")
def health():

    return {
        "status": "healthy",
        "model_loaded": True
    }

@app.post("/predict")
def predict(car: CarInput):

    # Convert input into DataFrame
    data = pd.DataFrame([
        car.model_dump()
    ])


    # Feature Engineering


    CURRENT_YEAR = pd.Timestamp.today().year

    # Calculate car age
    data["Car_Age"] = CURRENT_YEAR - data["Year"]

    # Calculate kilometers driven per year
    data["Km_Per_Year"] = (
        data["Kilometers_Driven"]
        / data["Car_Age"].replace(0, 1)
    )


    prediction = model.predict(data)

    predicted_price = float(prediction[0])

    return  {
        "predicted_price": round(predicted_price, 2),
        "currency": "INR"
    }