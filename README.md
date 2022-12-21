1. To start the api, run the command:
   node src/index.js

_Available endpoints_ <br/>
http://localhost:3000/launches <br/>
http://localhost:3000/favorite (post)<br/>
http://localhost:3000/favorite (delete)<br/>

2. For the favorite endpoints (post and delete), the request's body must have the next format:
```json
  {
   "flight_number":"2",
   "user_id": "1"
   }
```
