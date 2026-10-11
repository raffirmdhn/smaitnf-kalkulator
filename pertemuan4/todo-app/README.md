# Smart To-Do List (Live Coding Modul 1)

Materi live coding dan praktikum pertemuan terakhir Modul 1 untuk siswa SMAIT Nurul Fikri.
Fokus pembelajaran: **DOM Manipulation, In-Memory Array CRUD, dan Quick Peek Fetch API**.

---

## Tujuan Pembelajaran
1. Memahami alur data modern: **Data (Array) $\rightarrow$ Render Function $\rightarrow$ Tampilan HTML (DOM)**.
2. Mempraktikkan operasi CRUD dasar di sisi klien (*in-memory*):
   - **Create**: Menambah item tugas baru via form (`array.unshift()`).
   - **Read**: Menampilkan daftar tugas dengan perulangan (`array.forEach()`).
   - **Update**: Mengubah status selesai / belum (`item.completed = !item.completed`).
   - **Delete**: Menghapus item tugas berdasarkan index (`array.splice(index, 1)`).
3. Mengenal konsep **API & Asynchronous dasar**: Mengambil data awal dari internet menggunakan `fetch()`.

---

## Public API yang Digunakan
* **Endpoint**: `https://jsonplaceholder.typicode.com/todos?_limit=4`
* **Metode**: `GET`
* **Format Data**:
  ```json
  [
    { "id": 1, "title": "delectus aut autem", "completed": false },
    { "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false }
  ]
  ```
