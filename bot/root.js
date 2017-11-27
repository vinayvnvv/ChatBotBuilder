
function counterViewModel(attributes) {
    console.log("called")
    this.data = attributes;
    this.a = "vinay";

    this.increment = function (event, scope) {
        // Rivets renames kebab-case to camelCase
        scope.data.counterAttr.value++;
    };
    this.decrement = function (event, scope) {
        scope.data.counterAttr.value--;
    };
    this.toggleColor = function (event, scope) {
        var old = scope.data.colorAttr.value;
        
        if (old === 'red') scope.data.colorAttr.value = 'blue';
        else scope.data.colorAttr.value = 'red';
    };
}

rivets.components['bot-flow-root'] = {
    template: function() {
        return '<div class="ss">This is root</div>';
    },
    initialize: function(el, attributes) {
        console.log("call")
        return new counterViewModel(attributes);
    }
};


