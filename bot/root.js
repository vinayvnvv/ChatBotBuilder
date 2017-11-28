
// function botCtrl(attributes) {
//     console.log("counterViewModel called")
//     this.botView = this;
//     this.data = {
//         title: "vinnnnn"
//     };
//     this.a = "vinay";
//     this.text = "vvv";
//     this.increment = function (event, scope) {
//         // Rivets renames kebab-case to camelCase
//         scope.data.counterAttr.value++;
//     };
//     this.decrement = function (event, scope) {
//         scope.data.counterAttr.value--;
//     };
//     this.toggleColor = function (event, scope) {
//         var old = scope.data.colorAttr.value;
        
//         if (old === 'red') scope.data.colorAttr.value = 'blue';
//         else scope.data.colorAttr.value = 'red';
//     };
//     this.reset = function(p, s, a) {
//         console.log("called", p, s, a)
//         a.text = p;
//         console.log(s.a)
//     }
//     this.isD = function() {
//         return (this.text == 'viny')
//     }
// }





// rivets.components['bot-flow-root'] = {
//     template: function() {
//         return `<h1>{ botView.text }</h1>
//         {a}
//                 <input rv-value="botView.text">
//                 <button rv-show="a" rv-on-click="botView.reset | args 'viny' 'ss' botView">Remove</button>
//                 <h1 rv-if="botView.text == 'viny'">Vinay</h1>
//                 `;
//     },
//     initialize: function(el, attributes) {
//         return new botCtrl;
//     }
// };


