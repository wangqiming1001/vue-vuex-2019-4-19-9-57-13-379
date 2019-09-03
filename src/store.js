export default{
   // strict:true,
    state: {
      // 应用的数据
      todoList: [
        {content:'吃饭',status:'active'},
        {content:'睡觉',status:'active'},
        {content:'起床',status:'active'}
    ],
        currentFilter: 'all'
    },
    getters:{
        filterToDoList:function(state){
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
        
    }
  }