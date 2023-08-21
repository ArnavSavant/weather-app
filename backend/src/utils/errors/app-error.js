class AppError extends Error {
   constructor(message,statusCode) {
      super(message);
      this.explanation = message;
      this.statusCode = statusCode;
   }
}

module.exports = AppError;