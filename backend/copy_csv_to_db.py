import pandas as pd
from sqlalchemy import create_engine
from config.conf import settings


def copy_csv_to_db():

    SQLALCHEMY_DATABASE_URL = f'postgresql://{settings.database_username}:{settings.database_password}@{settings.database_hostname}:{settings.database_port}/{settings.database_name}'
    engine = create_engine(SQLALCHEMY_DATABASE_URL)

    df = pd.read_csv('./dataset/songs_normalize.csv')
    df.columns = [c.lower() for c in df.columns]
    print("Start copy...")
    df.to_sql("Songs", engine, if_exists="append", index=False, method=None)
    print("Copy Done!")


def main():
    copy_csv_to_db()


if __name__ == "__main__":
    main()
