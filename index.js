/**
 * Module dependencies.
 */

var Emitter = require('emitter');

/**
 * Expose `Submit`.
 */

module.exports = Submit;

/**
 * Initialize a new `Submit` file`.
 * This represents a single file upload.
 *
 * Events:
 *
 *   - `error` an error occurred
 *   - `abort` upload was aborted
 *   - `progress` upload in progress (`e.percent` etc)
 *   - `end` upload is complete
 *
 * @param {File} file
 * @api private
 */

function Submit(form) {
  if (!(this instanceof Submit)) return new Submit(file);
  Emitter.call(this);
  this.form = form;
}

/**
 * Mixin emitter.
 */

Emitter(Submit.prototype);

/**
 * Submit to the given `path`.
 *
 * @param {String} path
 * @api public
 */

Submit.prototype.to = function(path){
  // TODO: x-browser
  var req = this.req = new XMLHttpRequest;
  req.open('POST', path);
  req.onload = this.onload.bind(this);
  req.onerror = this.onerror.bind(this);
  req.upload.onprogress = this.onprogress.bind(this);
  req.send(this.form);
};

/**
 * Abort the XHR.
 *
 * @api public
 */

Submit.prototype.abort = function(){
  this.emit('abort');
  this.req.abort();
};

/**
 * Error handler.
 *
 * @api private
 */

Submit.prototype.onerror = function(e){
  this.emit('error', e);
};

/**
 * Onload handler.
 *
 * @api private
 */

Submit.prototype.onload = function(e){
  this.emit('end', this.req);
};

/**
 * Progress handler.
 *
 * @api private
 */

Submit.prototype.onprogress = function(e){
  e.percent = e.loaded / e.total * 100;
  this.emit('progress', e);
};