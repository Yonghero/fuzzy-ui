import { e as _createForOfIteratorHelper } from '../tool-7dacb5da.js';
export { g as getRandomColor, i as isAsyncFunction, t as tmplProps, w as withInstall } from '../tool-7dacb5da.js';

var nodeList = new Map();
var startClick;
document.addEventListener('mousedown', function (e) {
  startClick = e;
  return null;
});
document.addEventListener('mouseup', function (e) {
  var _iterator = _createForOfIteratorHelper(nodeList.values()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var handlers = _step.value;
      var _iterator2 = _createForOfIteratorHelper(handlers),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var documentHandler = _step2.value.documentHandler;
          documentHandler(e, startClick);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
function createDocumentHandler(el, binding) {
  var excludes = [];
  var whiteClass = '';
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (typeof binding.arg === 'string') {
    whiteClass = binding.arg;
  }
  return function (mouseup, mousedown) {
    var popperRef = binding.instance.popperRef;
    var mouseUpTarget = mouseup.target;
    var mouseDownTarget = mousedown === null || mousedown === void 0 ? void 0 : mousedown.target;
    var isBound = !binding || !binding.instance;
    var isTargetExists = !mouseUpTarget || !mouseDownTarget;
    var isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    var isSelf = el === mouseUpTarget;
    var isTargetExcluded = excludes.length && excludes.some(function (item) {
      return item === null || item === void 0 ? void 0 : item.contains(mouseUpTarget);
    }) || excludes.length && excludes.includes(mouseDownTarget);
    var isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    var isClass = whiteClass && mouseDownTarget.classList.contains(whiteClass);
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper || isClass) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
var ClickOutside = {
  beforeMount: function beforeMount(el, binding) {
    console.log('binding: ', binding);
    // there could be multiple handlers on the element
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated: function updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    var handlers = nodeList.get(el);
    var oldHandlerIndex = handlers.findIndex(function (item) {
      return item.bindingFn === binding.oldValue;
    });
    var newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      // replace the old handler to the new handler
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted: function unmounted(el) {
    // remove all listeners when a component unmounted
    nodeList["delete"](el);
  }
};

export { ClickOutside };
