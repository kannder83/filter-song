from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


# Routes
from app.routes.songs import router as router_songs


def get_application():

    app = FastAPI(
        title="filter-song",
        description="Search the best songs",
        docs_url="/",
        version="0.1.0"
    )

    origins = ["*"]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(router_songs)

    return app


application = get_application()
