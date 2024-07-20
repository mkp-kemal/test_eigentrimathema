
<a href="https://linkedin.com/in/muhammad-kemal-pasha-a97770213/" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="30" height="30">
</a>

# Backend Test Case
> - `git clone` project
> - jalankan `npm i`
> - buat file `.env`, masukan isinya pada zip yang dikirimkan lewat email
> - jalankan dengan `npm run dev`
> - localhost:3000

## Entities

- Member
- Book

## Use Case

- Members can borrow books with conditions
    - [ ]  Members may not borrow more than 2 books ✅
    - [ ]  <img src="https://raw.githubusercontent.com/mkp-kemal/test_eigentrimathema/development/doc/borrow%20not%203%20book.png" alt="Image 2" width="400" height="300">
    - [ ]  Borrowed books are not borrowed by other members ✅
    - [ ]  Member is currently not being penalized ✅
- Member returns the book with conditions
    - [ ]  The returned book is a book that the member has borrowed ✅
    - [ ]  <img src="https://raw.githubusercontent.com/mkp-kemal/test_eigentrimathema/development/doc/return%20book.png" alt="Image 3" width="400" height="300">
    - [ ]  <img src="https://raw.githubusercontent.com/mkp-kemal/test_eigentrimathema/development/doc/return%20no%20borrowed%20book.png" alt="Image 3" width="400" height="300">
    - [ ]  If the book is returned after more than 7 days, the member will be subject to a penalty. Member with penalty cannot able to borrow the book for 3 days ✅
- Check the book
    - [ ]  <img src="https://raw.githubusercontent.com/mkp-kemal/test_eigentrimathema/development/doc/find%20book%20with%20not%20stock%200.png" alt="Image 1" width="400" height="300">
    - [ ]  Shows all existing books and quantities ✅
    - [ ]  Books that are being borrowed are not counted ✅
- Member check
    - [ ]  <img src="https://raw.githubusercontent.com/mkp-kemal/test_eigentrimathema/development/doc/find%20all%20existing%20books%20and%20quantities.png" alt="Image 1" width="400" height="300">
    - [ ]  Shows all existing members ✅
    - [ ]  The number of books being borrowed by each member ✅


## Requirements

- [ ]  use [ExpressJS](https://expressjs.com/) ✅
- [ ]  it should be use Swagger as API Documentation ✅
- [ ]  it should be use Database (NoSQL) MongoDB ✅
- [ ]  it should be open sourced on your github repo ✅

## Extras

- [ ]  Implement [DDD Pattern]([https://khalilstemmler.com/articles/categories/domain-driven-design/](https://khalilstemmler.com/articles/categories/domain-driven-design/)) ✅
- [ ]  Implement Unit Testing ✅

## Notes
- Feel free to add some structure or plugins


------

# ALGORITMA ✅
Kerjakan dengan menggunakan bahasa pemograman yg anda kuasai, buat folder terpisah untuk soal ini

1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
    > - `node reverseAlphabet.js`
2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
    > - `node longestWord.js`

```
const sentence = "Saya sangat senang mengerjakan soal algoritma"

longest(sentence) 
// mengerjakan: 11 character
```
3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
    > - `node countWordsInInput.js`
    
```
INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']  

OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT
```

4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
    > - `node matrixDiagonalDifference.js`

```
Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

diagonal pertama = 1 + 5 + 9 = 15 
diagonal kedua = 0 + 5 + 7 = 12 

maka hasilnya adalah 15 - 12 = 3
```

