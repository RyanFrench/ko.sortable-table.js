ko.bindingHandlers.sortBy = {
    init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var asc = !0;
        element.style.cursor = "pointer";
        var value = valueAccessor(), data = value.array, sortBy = value.sortBy, sortFunction = null, siblings = element.parentNode.querySelectorAll("th"), updateCSS = function() {
            for (i = 0; i < siblings.length; i++) value.css.desc && siblings[i].classList.remove(value.css.desc), 
            value.css.asc && siblings[i].classList.remove(value.css.asc);
            asc ? (value.css.desc && element.classList.remove(value.css.desc), value.css.asc && element.classList.add(value.css.asc)) : (value.css.asc && element.classList.remove(value.css.asc), 
            value.css.desc && element.classList.add(value.css.desc));
        };
        if (!ko.isObservable(data) || !Array.isArray(data())) throw "Incorrect argument for array. Must be an observableArray";
        switch (!0) {
          case "function" == typeof sortBy:
            sortFunction = sortBy;
            break;

          case Array.isArray(sortBy):
            var length = sortBy.length;
            sortFunction = function(a, b) {
                for (var index = -1; ++index < length; ) {
                    var field = sortBy[index], value_a = "function" == typeof a[field] ? a[field]() : a[field], value_b = "function" == typeof b[field] ? b[field]() : b[field];
                    if (value_a != value_b) return value_a > value_b ? 1 : -1;
                }
            };
            break;

          case "string" == typeof sortBy:
            sortFunction = function(a, b) {
                var value_a = "function" == typeof a[sortBy] ? a[sortBy]() : a[sortBy], value_b = "function" == typeof b[sortBy] ? b[sortBy]() : b[sortBy];
                return value_a > value_b ? 1 : value_b > value_a ? -1 : 0;
            };
            break;

          default:
            throw "Incorrect argument for sortBy";
        }
        element.onclick = function() {
            asc = !asc, data.sort(sortFunction), asc || data.reverse(), void 0 !== value.css && updateCSS();
        };
    }
};