from flask import Flask
from flask import render_template
from requests import get
try:
    response = get("https://icanhazdadjoke.com/",headers={"Accept":"text/plain"}).text
except:
    print("Whoops! Please check your internet connection and try again.")
    exit(0)
app = Flask(__name__)
@app.route('index.html')
def getResponse():
    print(response)
    return render_template("index.html",joke=response)

if __name__ == "__main__":
    app.run(debug=True)






