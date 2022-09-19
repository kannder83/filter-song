from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .conf import settings


# Routes
from app.routes.songs import router as router_songs


def get_application():

    if settings.debug == True:
        app: FastAPI = FastAPI(
            title="filter-song",
            description="Search the best songs",
            docs_url="/",
            version="0.1.0",
        )
    else:
        app: FastAPI = FastAPI(
            title="filter-song",
            description="Search the best songs",
            docs_url="/",
            root_path=settings.prod_url,
            version="0.1.0",
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
