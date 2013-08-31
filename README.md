Position server
===============

Send your current GPS coordinates for later retrieval.

Save

    http://localhost:5000/save/32.1234/-110.1234

    Response: OK

Retrieve

    http://localhost:5000/

    Response: {
              lat: "32.1234",
              lon: "-110.1234",
              sec: 1377981737591
              }
              
