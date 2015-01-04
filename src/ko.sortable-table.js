ko.bindingHandlers.sortBy = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    var asc = true;
    element.style.cursor = 'pointer';

    element.onclick = function(){
      var value = valueAccessor();
      var data = value.array;
      var sortBy = value.sortBy;

      asc = !asc;

      if(typeof sortBy === "function"){
        data.sort(sortBy);
      }
      else if(Array.isArray(sortBy)){
        console.log(sortBy);
        var length = sortBy.length;
        data.sort(function(a,b){
          var index = -1;
          while(++index < length)
          {
            var field = sortBy[index];
            if(a[field] == b[field]) continue;
            return a[field] > b[field] ? 1 : -1;
          }
        })
      }
      else if(typeof sortBy === "string"){
        data.sort(function(a,b){
          return a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0;
        })
      }
    };
  }
};