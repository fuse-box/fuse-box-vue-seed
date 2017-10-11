import Vue from "vue";

export class Lib {
    public run() {
        console.log("In lib");
    }
}

Vue.component('some-vue', {
    props: ['label', 'value'],
    data: function () {
        return {
            x: 1
        };
    },
    template: 
`<div>
    <label>{{ this.label }}</label>
    <p>x:{{x}}</p>      
</div>`
});
