<template>
    <div id="app">
        <h2>
            Vue To Do List
            Simple Todo List with adding and filter by diff status.
        </h2>
            <CreateForm 
                @addHandle="addInput"
                @addHandleChange="addChange"
            ></CreateForm>
        <div id="list">
            <ul>
                <li  v-for="(item,index) in filterToDoList" v-bind:key="index">
                    <input type="checkbox" @click="selectItem(item)" v-model="item.select">
                    <span :class="{selected:item.select}">{{item.content}}</span>
                </li>
            </ul>
        </div>

        <div id="filter">
            <button @click="handlerFilter('all')">all</button>
            <button @click="handlerFilter('active')">Active</button>
            <button @click="handlerFilter('completed')">Completed</button>
        </div>
        
    </div>  
</template>

<script>
    import CreateForm from "./components/CreateForm.vue"
    export default {
        name: 'app',
        components: {
           CreateForm :CreateForm
        },
        data: function () {
            return {
                /**
                 * 定义了 todo item 中属性为 {content:'吃饭',status:'active'}
                 * 定义了 todo 的两种状态 completed、active，默认为 active
                 */
                // todoList: [
                //     {content:'吃饭',status:'active'},
                //     {content:'睡觉',status:'active'},
                //     {content:'起床',status:'active'}
                // ],
                inputText:"",
                // currentFilter: 'all',
                
            }
        },
        computed:{
            filterToDoList:function(){
            //     let filterList = [];
            //     for (let index = 0; index < this.todoList.length; index++) {
            //         const element =  this.todoList[index];
            //         if (element.status === this.currentFilter ||this.currentFilter === "all") {
            //             filterList.push(element);
            //         }
            //     }
            //     return filterList;
                return this.$store.getters.filterToDoList;
            }
            
        },
        methods: {
            addInput:function(inputText){
                    this.$store.state.todoList.push({
                    content:inputText,
                    status:"active"
                });
            },
            handlerFilter:function(status){
                console.log(status);
                this.$store.state.currentFilter = status;
            },
            addChange:function(param){
                this.inputText = param;
            },
            selectItem:function(item){
                    item.select = !item.select;
                    console.log(item.select);
                    if(item.select){
                        item.status =  "completed";
                        //this.item.currentFilter = "completed";
                    }else{
                        item.status =  "active";
                    }
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .items {
        list-style: none;
        text-align: left;
        line-height: 30px;
    }

    .items li.completed {
        text-decoration: line-through;
    }

    .filter a {
        margin: 0 10px;
        line-height: 30px;
    }

    .filter a.active {
        color: #f60;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 3px;
        cursor: pointer;
    }

    .selected{
        text-decoration:line-through
}
</style>
