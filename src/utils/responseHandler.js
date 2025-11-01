import { STATUS_CODES } from './statusCodes.js';

class ResponseHandler {
	constructor(req, res) {
		this.req = req;
		this.res = res;
	}

	// Common sender
	sender(code, message, data, sendData = true) {
		this.res.status(code).json({
			message,
			data: sendData ? data : {},
		});
	}

	/** Custom Response */
	custom(code, message, data) {
		this.sender(code, message, data);
	}

	/** Success (200) */
	success(data, message) {
		this.sender(STATUS_CODES.SUCCESS, message || 'Success', data);
	}

	/** Created (201) */
	created(data, message) {
		this.sender(STATUS_CODES.CREATED, message || 'Created Successfully', data);
	}

	/** 🔴 Unified Error (400) */
	error(message) {
		this.res.status(STATUS_CODES.BAD_REQUEST).json({
			message: 'Error',
			data: { message },
		});
	}

	// ↓ All below methods forward to error()
	badRequest(data, message) {
		this.error(message || 'Bad Request');
	}

	unauthorized(data, message) {
		this.error(message || 'Unauthorized');
	}

	forbidden(data, message) {
		this.error(message || 'Forbidden');
	}

	notFound(data, message) {
		this.error(message || 'Requested resource not found!');
	}

	notAllowed(data, message) {
		this.error(message || 'Method is not allowed!');
	}

	conflict(data, message) {
		this.error(message || 'Provided information already exist!');
	}

	preconditionFailed(data, message) {
		this.error(message || 'Please complete other steps first');
	}

	validationError(data, message) {
		this.error(message || 'Validation error!');
	}

	serverError(data, message) {
		this.error(message || 'Internal Server Error!');
	}
}

export default ResponseHandler;
