from pydantic import BaseModel, Field


class CarInput(BaseModel):

    Brand: str

    Year: int = Field(
        ge=2010,
        le=2026
    )

    Kilometers_Driven: float = Field(
        gt=0
    )

    Fuel_Type: str

    Transmission: str

    Engine_CC: float = Field(
        gt=0
    )

    Mileage_kmpl: float = Field(
        gt=0
    )

    Seats: int = Field(
        ge=2,
        le=10
    )

    Owner_Count: int = Field(
        ge=1,
        le=10
    )