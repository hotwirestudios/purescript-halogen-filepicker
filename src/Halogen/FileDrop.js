// module Halogen.FileDrop

exports.newMouseEvent = function(eventType) {
  return new MouseEvent(eventType, {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });
};
