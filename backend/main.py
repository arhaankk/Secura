from flask import Flask, request
from flask_restx import Api, Resource, fields
from flask_cors import CORS
from app.detector import CodeDetector  



app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    return {"message": "Welcome to Secura backend"}

api = Api(app, version='1.0', title='Secura API',
          description='Vulnerability detection using LLMs',
          doc="/docs")

ns = api.namespace("secura", description="Code vulnerability analyzer")

code_model = api.model("CodeInput", {
    "code": fields.String(required=True, description="Code to analyze")
})

@ns.route("/analyze")
class Analyzer(Resource):
    @ns.expect(code_model)
    def post(self):
        code = request.json.get("code")
        if not code:
            return {"error": "Missing 'code'"}, 400

        detector = CodeDetector(code)
        report = detector.run_pipeline()
        if report is None:
            return {"error": "Analysis failed"}, 500
        return report, 200

if __name__ == "__main__":
    app.run(debug=True, port=8000)
