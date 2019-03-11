[
  {
    "_id": "5c49af8adddd1f5b1c71b96a",
    "iso": "US",
    "name": "UNITED STATES",
    "nicename": "United States",
    "iso3": "USA",
    "numcode": 840,
    "phonecode": 1,
    "id": "5c49af8adddd1f5b1c71b96a"
  },
  {
    "_id": "5c49b635dddd1f5b1c71b96b",
    "iso": "AF",
    "name": "AFGHANISTAN",
    "nicename": "Afghanistan",
    "iso3": "AFG",
    "numcode": 4,
    "phonecode": 93,
    "id": "5c49b635dddd1f5b1c71b96b"
  },
  {
    "_id": "5c49b635dddd1f5b1c71b96c",
    "iso": "CN",
    "name": "CHINA",
    "nicename": "China",
    "iso3": "CHN",
    "numcode": 156,
    "phonecode": 86,
    "id": "5c49b635dddd1f5b1c71b96c"
  },
  {
    "_id": "5c49b635dddd1f5b1c71b96d",
    "iso": "HK",
    "name": "HONG KONG",
    "nicename": "Hong Kong",
    "iso3": "HKG",
    "numcode": 344,
    "phonecode": 852,
    "id": "5c49b635dddd1f5b1c71b96d"
  },
  {
    "_id": "5c49b635dddd1f5b1c71b96e",
    "iso": "IN",
    "name": "INDIA",
    "nicename": "India",
    "iso3": "IND",
    "numcode": 356,
    "phonecode": 91,
    "id": "5c49b635dddd1f5b1c71b96e"
  },
  {
    "_id": "5c49b635dddd1f5b1c71b96f",
    "iso": "ID",
    "name": "INDONESIA",
    "nicename": "Indonesia",
    "iso3": "IDN",
    "numcode": 360,
    "phonecode": 62,
    "id": "5c49b635dddd1f5b1c71b96f"
  },
  {
    "_id": "5c49b635dddd1f5b1c71b970",
    "iso": "JP",
    "name": "JAPAN",
    "nicename": "Japan",
    "iso3": "JPN",
    "numcode": 392,
    "phonecode": 81,
    "id": "5c49b635dddd1f5b1c71b970"
  },
  {
    "_id": "5c49b635dddd1f5b1c71b971",
    "iso": "JO",
    "name": "JORDAN",
    "nicename": "Jordan",
    "iso3": "JOR",
    "numcode": 400,
    "phonecode": 962,
    "id": "5c49b635dddd1f5b1c71b971"
  },
  {
    "_id": "5c49b635dddd1f5b1c71b972",
    "iso": "KZ",
    "name": "KAZAKHSTAN",
    "nicename": "Kazakhstan",
    "iso3": "KAZ",
    "numcode": 398,
    "phonecode": 7,
    "id": "5c49b635dddd1f5b1c71b972"
  },
  {
    "_id": "5c49b635dddd1f5b1c71b973",
    "iso": "ZA",
    "name": "SOUTH AFRICA",
    "nicename": "South Africa",
    "iso3": "ZAF",
    "numcode": 710,
    "phonecode": 27,
    "id": "5c49b635dddd1f5b1c71b973"
  },
  {
    "_id": "5c49b635dddd1f5b1c71b974",
    "iso": "TH",
    "name": "THAILAND",
    "nicename": "Thailand",
    "iso3": "THA",
    "numcode": 764,
    "phonecode": 66,
    "id": "5c49b635dddd1f5b1c71b974"
  },
  {
    "_id": "5c49b635dddd1f5b1c71b975",
    "iso": "AE",
    "name": "UNITED ARAB EMIRATES",
    "nicename": "United Arab Emirates",
    "iso3": "ARE",
    "numcode": 784,
    "phonecode": 971,
    "id": "5c49b635dddd1f5b1c71b975"
  },
  {
    "_id": "5c49b635dddd1f5b1c71b976",
    "iso": "GB",
    "name": "UNITED KINGDOM",
    "nicename": "United Kingdom",
    "iso3": "GBR",
    "numcode": 826,
    "phonecode": 44,
    "id": "5c49b635dddd1f5b1c71b976"
  }
]


http://localhost:4000/users/register
Content-Type: application/json
{
	"username":"amarjeet3212@gmail.com",
	"password":"test",
	"confirmpass":"test",
	"firstName":"Amarjeet",
	"lastName":"Rao",
	"country":"india",
	"contact":784837888
}

http://localhost:4000/users/authenticate
Content-Type: application/json
{
	"username":"amarjeet@gmail.com",
	"password":"test"
}

get All user
http://localhost:4000/users/
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YzQ4NTM4MGQxMTI2MDM3M2NiYmUzZWQiLCJpYXQiOjE1NDgzMTY2OTd9.uwlvKxwNIsrClUkBiYlQCrFnZPNzZa0zHCkpXo0Poe4



get current user

http://localhost:4000/users/current

Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YzQ4NTM4MGQxMTI2MDM3M2NiYmUzZWQiLCJpYXQiOjE1NDgyNDUyMDl9.QgWR6iXZfw3iBB9RXFg0Xk6NPMomaHIdVlMDv_ZKig4


get user by ID
http://localhost:4000/users/?id=5c485380d11260373cbbe3ed

Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YzQ4NTM4MGQxMTI2MDM3M2NiYmUzZWQiLCJpYXQiOjE1NDgyNDUyMDl9.QgWR6iXZfw3iBB9RXFg0Xk6NPMomaHIdVlMDv_ZKig4

http://localhost:4000/getCountry/country

Content-Type: application/json