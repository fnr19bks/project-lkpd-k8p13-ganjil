# Panduan Deploy LKPD Digital "Detektif Digital" ke GitHub Pages

Panduan ini ditujukan untuk guru atau siapa pun yang ingin mengonlinekan aplikasi ini secara **GRATIS** menggunakan GitHub Pages, tanpa perlu memahami coding.

## Persiapan Awal
Pastikan Anda sudah memiliki 5 file berikut di dalam satu folder di komputer Anda:
1. `index.html`
2. `style.css`
3. `script.js`
4. `favicon.svg`
5. `logo.png` (File logo SMPN 19 Bekasi. Jika belum ada, aplikasi akan menampilkan teks "SMPN 19" sebagai gantinya).

---

## Langkah 1: Membuat Akun GitHub
1. Buka situs [github.com](https://github.com/).
2. Klik tombol **Sign up** di pojok kanan atas.
3. Masukkan email, password, dan username yang Anda inginkan.
4. Ikuti verifikasi yang diminta (biasanya mengisi kode dari email atau puzzle).
5. Setelah selesai, Anda akan masuk ke halaman Dashboard GitHub.

## Langkah 2: Membuat Repository Baru
1. Di halaman Dashboard, klik tombol **+** di pojok kanan atas, lalu pilih **New repository**.
2. Beri nama repository, misalnya: `lkpd-detektif-digital`.
3. Pada bagian **Description**, isi: "LKPD Informatika Kelas 8 - Pencarian Efektif dan Kredibilitas Sumber".
4. Centang **Add a README file**.
5. Biarkan pilihan lainnya default (Public).
6. Klik tombol **Create repository**.

## Langkah 3: Mengunggah File
1. Di halaman repository yang baru dibuat, klik tombol **Add file** (di sebelah tombol Code), lalu pilih **Upload files**.
2. Seret (drag) kelima file (`index.html`, `style.css`, `script.js`, `favicon.svg`, `logo.png`) ke area unggah.
3. Di bagian bawah, pada kolom "Commit changes", biarkan default.
4. Klik tombol **Commit changes**.
5. Tunggu hingga proses unggah selesai (biasanya hanya beberapa detik).

## Langkah 4: Mengaktifkan GitHub Pages
1. Setelah file terunggah, klik tab **Settings** (ikon gerigi) di bagian atas menu repository.
2. Di menu sebelah kiri, gulir ke bawah dan cari **Pages** (di bawah bagian "Code and automation").
3. Pada bagian **Build and deployment** -> **Source**, pastikan terpilih **Deploy from a branch**.
4. Pada bagian **Branch**, pilih **main** (atau master), dan folder **/(root)**.
5. Klik tombol **Save**.

## Langkah 5: Mendapatkan Link Online
1. Tunggu sekitar 1-2 menit. Refresh halaman Settings -> Pages.
2. Di bagian atas halaman, akan muncul tulisan: *"Your site is live at https://[username-anda].github.io/lkpd-detektif-digital/"*.
3. Klik link tersebut. Aplikasi LKPD Digital Anda sudah online dan bisa diakses oleh siswa!
4. Bagikan link ini ke siswa melalui Google Classroom, WhatsApp, atau media lainnya.

## Langkah 6: Mengubah Logo (Opsional)
Jika Anda ingin mengganti logo di kemudian hari:
1. Siapkan file logo baru dengan nama `logo.png`.
2. Di halaman repository GitHub, klik file `logo.png` yang lama.
3. Klik ikon pensil (Edit) atau ikon tempat sampah (Delete).
4. Jika menghapus, klik **Add file** -> **Upload files** untuk mengunggah logo baru dengan nama yang sama (`logo.png`).
5. Klik **Commit changes**.

---
### Catatan Penting:
- **Tombol Petunjuk (Hint):** Setiap level memiliki tombol 💡 Petunjuk yang bisa diklik siswa jika mereka bingung. Petunjuk ini berisi tips dari materi.
- **Favicon:** Ikon kecil di tab browser (favicon) mungkin tidak muncul jika Anda membuka file `index.html` langsung dari komputer (file://). Favicon akan muncul setelah aplikasi diunggah ke GitHub Pages (https://).
- **Penyimpanan:** Skor dan level yang terbuka disimpan di `localStorage` browser. Jika siswa me-refresh halaman, mereka tidak perlu mengulang dari awal.
- **Cetak Hasil:** Di halaman akhir, ada tombol "Cetak Hasil" yang akan membuka dialog print browser. Siswa dapat menyimpannya sebagai PDF atau mencetaknya untuk dikumpulkan.
- **Easter Egg:** Jika siswa mendapatkan skor sempurna (1000), akan muncul animasi konfeti!
