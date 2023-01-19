# sonnet-completer
The sonnet completer simply takes in an input (or no input) and generates a sonnet that starts with the given user input.

It does this through a petrained gpt model that was built using PyTorch (see `backend/src/gptModel`).

## Running locally
You may need to install the following packages
```
torch
flask
wsgiref
```
1. On one terminal run the backend by typing in the following commands:
```
cd backend
flask run
```
2. On a separate terminal run the frontend by typing in the following commands:
```
cd frontend
yarn start
```