from wsgiref.simple_server import WSGIServer
from flask import Flask, request
from json import dumps
from src.sonnet import sonnet

app = Flask(__name__)

@app.route('/sonnet', methods=["GET"])
def sonnet_create():
    """
    Returns a generated sonnet that starts with the given context
    """
    context = str(request.args.get('context'))
    generated_sonnet = sonnet.create_sonnet(context)

    return dumps({
        "sonnet": generated_sonnet
    })


if __name__ == '__main__':
    # # Debug/Development
    # # app.run(debug=True, host="0.0.0.0", port="5000")
    # # Production
    http_server = WSGIServer(('', 3000), app)
    http_server.serve_forever()

    app.run()
