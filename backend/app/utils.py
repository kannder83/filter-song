

class RegisterSong():
    def __init__(self, rows, limit, skip, data):
        self.rows = rows
        self.pages = 0
        self.rows_per_page = limit
        self.initial_id = skip+1
        self.last_id = skip+limit
        self.data = data

    def total_of_pages(self):
        additional_page = self.rows % self.rows_per_page

        if additional_page == 0:
            self.pages = self.rows // self.rows_per_page
        else:
            self.pages = (self.rows // self.rows_per_page)+1

    def get_data(self):
        self.total_of_pages()

        return {
            "rows": self.rows,
            "pages": self.pages,
            "rows_per_page": self.rows_per_page,
            "initial_id": self.initial_id,
            "last_id": self.last_id,
            "data": self.data
        }
