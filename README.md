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
To run the server
```
cd frontend && yarn start
```