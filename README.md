# Kad REST

This is a REST API on top of Kad DHT

## Quick Start

The Kademelia DHT implementation is by [Gordon Hall's Kad project](http://github.com/gordonwritescode)

```
# getting the code
git@github.com:niahmiah/kad-rest.git && cd kad-rest
```

### Configuring the seed list

Create the file config/local.json, and populate it with your seeds in the following format.

```
{
  "kad": {
    "seeds": [
      { "address": "some.domain.name", port: 35000 },
      { "address": "some.other.name", port: 35000 },
    ]
  }
}
```

```
# running the server
npm install
npm start
```
