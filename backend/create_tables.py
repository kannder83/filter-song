from config.database import Base, engine

# Models
from app import models


def main():
    print("Creating database...")

    Base.metadata.create_all(engine)


if __name__ == "__main__":
    main()
