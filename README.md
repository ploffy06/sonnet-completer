# sonnet-completer
The sonnet completer simply takes in an input (or no input) and generates a sonnet that starts with the given user input.

It does this through a petrained gpt model that was built using PyTorch (see `backend/src/gptModel`).

## Running locally
1. on one terminal
```
cd frontend
yarn start
```
2. on another terminal
```
cd backend
flask run
```
You may need to install some packages in the backend in which case, in the backend directory
```
pip install -r requirements. txt
```