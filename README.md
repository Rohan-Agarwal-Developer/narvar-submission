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
