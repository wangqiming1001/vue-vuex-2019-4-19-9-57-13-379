export default{
    strict:true,
    state: {
      // 应用的数据
      todoList: [
        {content:'吃饭',status:'all'},
        {content:'睡觉',status:'active'},
        {content:'起床',status:'completed'}
    ]
    },
    getters:{
        filterToDoList:function(){
            let filterList = [];
            for (let index = 0; index < state.todoList.length; index++) {
                const element =  state.todoList[index];
                if (element.status === state.currentFilter ||state.currentFilter === "all") {
                    filterList.push(element);
                }
            }
            return filterList;
        }
    },
    mutations:{
        minusValue(state,index){
            state.counters[index].value--;
            state.counterTotal--;
        },
        plusValue(state,index){
            state.counters[index].value++;
            state.counterTotal++;
        }
    }
  }