import os

from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__, instance_relative_config=True)

# Load the default configuration
app.config.from_object('config.default')

# Load the configuration from the instance folder
app.config.from_pyfile('config.py', silent=True)

# Load the file specified by the APP_CONFIG_FILE environment variable
# Variables defined here will override those in the default configuration
if 'APP_CONFIG_FILE' in os.environ:
	app.config.from_object('config.%s' % os.environ.get('APP_CONFIG_FILE'))

db = SQLAlchemy(app)

from app.frontend import dashboards
from app.api import feeds, users, subscriptions, items

from app import models