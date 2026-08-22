import joblib as joblib
import pandas as pd



model = joblib.load("car_price_model.pkl")

car = pd.DataFrame([{
    "Brand": "Toyota",
    "Year": 2022,
    "Kilometers_Driven": 45000,
    "Fuel_Type": "Petrol",
    "Transmission": "Automatic",
    "Engine_CC": 1800,
    "Mileage_kmpl": 20.5,
    "Seats": 5,
    "Owner_Count": 1
}])

CURRENT_YEAR = 2026

car["Car_Age"] = CURRENT_YEAR - car["Year"]

car["Km_Per_Year"] = (car["Kilometers_Driven"] / car["Car_Age"].replace(0, 1))
prediction = model.predict(car)

print(
    f"Predicted Price: ₹{prediction[0]:,.0f}"
)