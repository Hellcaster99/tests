Hi, I'm Chinmay Pandya

Steps to run the project:
1) npm install
2) npm run dev

Features to note:
1) Form validation
    a. only text can be entered in name filed (reg exp).
    b. only numbers can be added in pincode (regular expression).
2) Form control
    a. buttons will be disabled once submitted till the result is being fetched.
    b. error or success message notification upon fetch results.
3) State Management
    a. Utilized Redux to store user and API data powered by localStorage.
    b. Data persist upon refreshing.
    c. Past data remains upon invalid fetch.
    d. Error handling upon failed fetched.
4) Redirection
    a. Submit button redirects to data page
    b. Go Bak redirects to Home page
5) Table 
    a. Pagination for data overload
    b. Filters for state and vaccine columns.
    c. Sorting option for age limit and slot columns.
