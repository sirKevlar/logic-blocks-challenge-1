## General approach:

- [x] Create sample dataset

  ```
  data.js 
  ```

- [x] Create `Regex` to capture date instances
  
  ```
  /\d{2}-\d{2} #\d{2} [.#]{60}/g
  ```

- [x] Create `array` using `regex`

- [x] Create `object` with guard properties

- [x] Find laziest Guard
  
  ```
  findLaziestOfficer()
  ```

- [x] Find most frequent minute
  
  ```
  findBestMinutesAndOfficer()
  ```

- [x] Do the silly multiplication at the end
  
  ```
  idTimesMinutes()
  ```