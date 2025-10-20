# Params Server API

## Base URL
`http://localhost:3000`

## Endpoints

### GET /
Redirects to `/home`.

### GET /home
**Response:**  
`I am the home page`

### GET /doggy
**Response:**  
`I am the doggy route`

### GET /:doggy
**Path Params:**
- `doggy` (string) → echoed back in response.  
  Example: `/poodle` → `poodle`

### GET /doggy/cat
**Response:**  
`I am the doggy/cat route`

### GET /:doggy/cat
**Path Params:**
- `doggy` (string)  
  Example: `/poodle/cat` → `I am the doggy/cat route`

### GET /bank/:name/account/:money
**Path Params:**
- `name` (string)
- `money` (number)  
  **Response:**  
  `<name> has $<money+10>`  
  If money is not numeric → `Please submit again with a numerical value`

### Unmatched routes
**Response:**  
`Route not found` (404 status)