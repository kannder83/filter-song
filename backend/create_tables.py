import pandas as pd
from sqlalchemy import exc

# Configuration
from config.database import Base, engine

# Models
from app import models


def create_tables():
    print("Creating database...")
    Base.metadata.create_all(engine)
    print("Creating database... Done!")


def copy_csv_to_db():

    df = pd.read_csv('./dataset/songs_normalize.csv')
    df.columns = [c.lower() for c in df.columns]

    try:
        print("Start copy...")
        df.to_sql("Songs", engine, if_exists="append",
                  index=False, method=None)
        print("Copy Done!")
    except exc.IntegrityError as error:
        print("Error: ", error)


def main():
    create_tables()
    copy_csv_to_db()


if __name__ == "__main__":
    main()
