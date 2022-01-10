# URL Shortener in Node.js

This service allows a user to shorten their url and then redirect ro the same url using the shorter url

## How to Run Locally?

npm install
npm run dev

## Sample to shorten URL:

http://localhost:5000/api/url/shorten
body: {
"longUrl": "https://temp.url.com/code:hf@wuifabiliwncbpw"
}

## Sample Response

{
"longUrl": "https://temp.url.com/code:hf@wuifabiliwncbpw",
"shortUrl": "http://localhost:5000/Gy-Is-wgn",
"urlCode": "Gy-Is-wgn",
"data": "2022-01-10T06:08:28.222Z"
}

To redirect to original url, just visit the short url. You will automatically be redirected

Technical Understanding:

1. The user can input a url of any length and an output is expected in length 7-14. The characters are user friendly. Namely A-Z, a-z, 0-9, _-
2. I have used javascript as language here as I am very comfortable here and as a backend framework I have used node.js as i have setup dockerfiles previously for node. Another advantage of using node is that it has tonnes of packages for free.

3. Shortid is used here as a npm package which shortens the uri to a code that is 7-14 characters long. It can generate any number of ids without duplicates, even millions per day. As per the requirement in the problem statement this package is best upto my knowledge in node.

4. Since there is no big schema for this solution we can use SQL or NoSQL, as I have prior experience to mongodb, mongodb shell and atlas, I have used mongodb to save the long and short urls, I have also added date as one of the parameters.

5. I have also included a docker file to directly setup the project on other system.
