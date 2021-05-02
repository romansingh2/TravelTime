import os

from cs50 import SQL
from flask import Flask, flash, jsonify, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import apology, login_required

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response



# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///travelers.db")


@app.route("/")
@login_required #user must be logged in to see index page
def index():

        return render_template("index.html")


@app.route("/quiz", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def quiz():


        return render_template("quiz.html")


@app.route("/relaxing", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def relaxing():

    return render_template("relaxing.html")



@app.route("/B", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def B():

    return render_template("B.html")
    
    
@app.route("/C", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def C():

    return render_template("C.html")


@app.route("/D", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def D():

    return render_template("D.html")

@app.route("/E", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def E():

    return render_template("E.html")


@app.route("/F", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def F():

    return render_template("F.html")
    

@app.route("/G", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def G():

    return render_template("G.html")


@app.route("/H", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def H():

    return render_template("H.html")
    

@app.route("/I", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def I():

    return render_template("I.html")
    
    
    
@app.route("/J", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def J():

    return render_template("J.html")
    
    
@app.route("/K", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def K():

    return render_template("K.html")    
    
    
@app.route("/M", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def M():

    return render_template("M.html")   

@app.route("/N", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def N():

    return render_template("N.html") 

@app.route("/O", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def O():

    return render_template("O.html") 

@app.route("/P", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def P():

    return render_template("P.html") 
    
    
@app.route("/Q", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def Q():

    return render_template("Q.html") 

@app.route("/R", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def R():

    return render_template("R.html") 
    
@app.route("/S", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def S():

    return render_template("S.html")

@app.route("/T", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def T():

    return render_template("T.html") 

@app.route("/U", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def U():

    return render_template("U.html")

@app.route("/V", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def V():

    return render_template("V.html")

@app.route("/W", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def W():

    return render_template("W.html")

@app.route("/X", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def X():

    return render_template("X.html")
    
@app.route("/Y", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def Y():

    return render_template("Y.html")
    
@app.route("/Z", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def Z():

    return render_template("Z.html")

@app.route("/A1", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def A1():

    return render_template("A1.html")
    
@app.route("/A3", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def A3():

    return render_template("A3.html")

@app.route("/A4", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def A4():

    return render_template("A4.html")
    
@app.route("/A5", methods=["GET", "POST"])
@login_required #user must be logged in to see index page
def A5():

    return render_template("A5.html")





@app.route("/login", methods=["GET", "POST"]) #get -> get webpage, post -> submit data, when you hit login you will get the webpage, enter data and than submit
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST": #if user is trying to submit data via this form log user in

        # Ensure username was submitted
        if not request.form.get("username"): #if no username typed in return apology
            return apology("must provide username", 403)

        # Ensure password was submitted
        elif not request.form.get("password"): #if no password typed in return apology
            return apology("must provide password", 403)

        # Query database for username, check if there is a user with that username
        rows = db.execute("SELECT * FROM users WHERE username = :username",
                          username=request.form.get("username")) # select from users user with that username, ":username" is a placeholder for the username because we don't know what username will be typed in

        # Ensure username exists and password is correct, if username exists check if password is correct
        #what we get back when we run select query is a list of all the matching rows
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")): #if length of rows is not one, that means no user came back, because username should be unique, therefore that user does not exist
            return apology("invalid username and/or password", 403) #check_password_hash checks if password entered corresponds to hash value of password in database

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"] #look at the row we just got back of the user and store the id column value of it in session[user_id]

        # Redirect user to home page
        return redirect("/") #redirect user back to / route

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")



@app.route("/register", methods=["GET", "POST"])
def register():

    # Forget any user_id
    session.clear()


    if request.method == "POST": #if user is trying to submit this data via this form register user



        if not request.form.get("username"):
            return apology("must provide username", 403)

        elif not request.form.get("password"):
            return apology("must provide password", 403)

        elif not request.form.get("email-address"):
            return apology("must provide email address", 403)

        if request.form.get("password") != request.form.get("confirm_password"):
            return apology("passwords do not match", 403)

        rows = db.execute("SELECT * FROM users WHERE username = :username", username=request.form.get("username")) # select from users user with that username

        if len(rows) != 0: #if length of rows is not zero that means a user with that username exists
            return apology("that username already exists", 403)

        elif len(rows) == 0:
            password_hash = generate_password_hash(request.form.get("password"))
            rows = db.execute("INSERT INTO users (username, hash) VALUES (?, ?)", request.form.get("username"), password_hash)
            return redirect("/") #redirect user back to / route


    else:
        return render_template("register.html")






def errorhandler(e):
    """Handle error"""
    if not isinstance(e, HTTPException):
        e = InternalServerError()
    return apology(e.name, e.code)


# Listen for errors
for code in default_exceptions:
    app.errorhandler(code)(errorhandler)
