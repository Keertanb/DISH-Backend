import { STATUS_CODES } from './statusCodes.js';

export default class ResponseHandler {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  /**
   * Internal method to send response
   * @private
   * @param {number} code - HTTP status code
   * @param {string} message - Response message
   * @param {*} [data] - Response data
   * @param {boolean} [sendData=true] - Whether to include data in response
   */
  sender(code, message, data, sendData = true) {
    this.res.status(code).json({
      success: code >= 200 && code < 300,
      message,
      ...(sendData ? { data: data || {} } : {})
    });
  }

  /**
   * Send a custom response
   * @param {number} code - HTTP status code
   * @param {string} message - Response message
   * @param {*} [data] - Response data
   */
  custom(code, message, data) {
    this.sender(code, message, data);
  }

  /**
   * Status Code - 200
   * @param {*} [data] - Response data
   * @param {string} [message='Success'] - Success message
   */
  success(data, message = 'Success') {
    this.sender(STATUS_CODES.SUCCESS, message, data);
  }

  /**
   * Status Code - 201
   * @param {*} [data] - Created resource data
   * @param {string} [message='Created Successfully'] - Success message
   */
  created(data, message = 'Created Successfully') {
    this.sender(STATUS_CODES.CREATED, message, data);
  }

  /**
   * Status Code - 400
   * @param {*} [data] - Error details
   * @param {string} [message='Bad Request'] - Error message
   */
  badRequest(data, message = 'Bad Request') {
    this.sender(STATUS_CODES.BAD_REQUEST, message, data);
  }

  /**
   * Status Code - 401
   * @param {*} [data] - Error details
   * @param {string} [message='Unauthorized'] - Error message
   */
  unauthorized(data, message = 'Unauthorized') {
    this.sender(STATUS_CODES.UNAUTHORIZED, message, data);
  }

  /**
   * Status Code - 403
   * @param {*} [data] - Error details
   * @param {string} [message='Forbidden'] - Error message
   */
  forbidden(data, message = 'Forbidden') {
    this.sender(STATUS_CODES.FORBIDDEN, message, data);
  }

  /**
   * Status Code - 404
   * @param {*} [data] - Error details
   * @param {string} [message='Requested resource not found!'] - Error message
   */
  notFound(data, message = 'Requested resource not found!') {
    this.sender(STATUS_CODES.NOT_FOUND, message, data);
  }

  /**
   * Status Code - 405
   * @param {*} [data] - Error details
   * @param {string} [message='Method is not allowed!'] - Error message
   */
  notAllowed(data, message = 'Method is not allowed!') {
    this.sender(STATUS_CODES.NOT_ALLOWED, message, data);
  }

  /**
   * Status Code - 409
   * @param {*} [data] - Error details
   * @param {string} [message='Provided information already exists!'] - Error message
   */
  conflict(data, message = 'Provided information already exists!') {
    this.sender(STATUS_CODES.CONFLICT, message, data);
  }

  /**
   * Status Code - 412
   * @param {*} [data] - Error details
   * @param {string} [message='Please complete other steps first'] - Error message
   */
  preconditionFailed(data, message = 'Please complete other steps first') {
    this.sender(STATUS_CODES.PRECONDITION_FAILED, message, data);
  }

  /**
   * Status Code - 422
   * @param {*} [data] - Error details (usually validation errors)
   * @param {string} [message='Validation error!'] - Error message
   */
  validationError(data, message = 'Validation error!') {
    this.sender(STATUS_CODES.VALIDATION_ERROR, message, data);
  }

  /**
   * Status Code - 500
   * @param {*} [data] - Error details (not sent in production)
   * @param {string} [message='Internal Server Error!'] - Error message
   * @param {boolean} [sendData=false] - Whether to include error details
   */
  serverError(data, message = 'Internal Server Error!', sendData = false) {
    // In production, don't send error details to the client
    const errorData = process.env.NODE_ENV === 'production' && !sendData ? {} : data;
    this.sender(STATUS_CODES.SERVER_ERROR, message, errorData, sendData);
  }
}

export { ResponseHandler };
