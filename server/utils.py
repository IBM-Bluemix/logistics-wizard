"""
High level utilities, can be used by any of the layers (data, service,
interface) and should not have any dependency on Flask or request context.
"""
import jwt
import re
from types import FunctionType
from server.config import Config
from server.exceptions import TokenException


def validate_email(email_address):
    """
    Verify that the email is a valid email address
    """
    email_regex = re.compile("[a-z0-9!#$%&'*+/=?^_`{|}~-]+"
                             "(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*"
                             "@"
                             "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+"
                             "[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")

    if email_regex.match(email_address) is None:
        return False
    else:
        return True


def tokenize(data):
    """
    Creates a signed JSON Web Token of the data.

    :param data:  Any dict to be tokenized.
    :return:      A signed token representing the data.
    """
    return jwt.encode(data, Config.SECRET)


def detokenize(token):
    """
    Convert a token to a dict. Raises a TokenException if the token is
    expired or tampered with.

    :param token:   The token to be converted.
    :return:
    """
    try:
        data = jwt.decode(token, Config.SECRET)
    except Exception as e:
        raise TokenException('Error decoding JWT token.',
                             internal_details=str(e))

    return data

# Map of extensions to content types
_EXT_MAP = {
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'pdf': 'application/pdf'
}


def get_content_type_from_ext(ext):
    """
    Get the content type associated with this files extension.
    :param ext:    A file extension.
    :return:       A MIME content type.
    """
    return _EXT_MAP.get(ext.replace('.', ''), None)


def async_helper(args):
    """
    Calls the passed in function with the input arguments. Used to mitigate
    calling different functions during multiprocessing

    :param args:    Function and its arguments
    :return:        Result of the called function
    """

    # Isolate function arguments in their own tuple and then call the function
    func_args = tuple(y for y in args if type(y) != FunctionType)
    return args[0](*func_args)
