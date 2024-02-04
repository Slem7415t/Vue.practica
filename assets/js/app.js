// new Vue ({
//     el: "#app",
//     data: {
//         string: 'Hello world',
//         text: 'ups'
//     },
//     methods: {
//         greet: function () {
//             return "Hello new " + this.string;
//         }
//     }
// })

const myCounter = {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}
Vue.createApp(myCounter).mount('#my1'); // счетчик

const myTitle = {
  data() {
    return {
      message: 'Страница загружена ' + new Date().toLocaleString()
    }
  }
}
Vue.createApp(myTitle).mount('#my2'); // динамичный title

const myMessage = {
  data() {
    return {
      message: 'Привет, Vue.js!'
    }
  },
  methods: {
    functionClick() {
      this.message = this.message
      .split('') // разбиваем строку на элементы
      .reverse() // переворачиваем получившийся массив в обратную сторону
      .join('') // склеиваем массив обратно в сроку
    }
  }
}
Vue.createApp(myMessage).mount('#my3'); // кнопка "Перевернуть сообщение"

const myInput = {
  data() {
    return {
      message: 'Привет, Vue.js!'
    }
  }
}
Vue.createApp(myInput).mount('#my4'); // Input

const mySee = {
  data() {
    return {
      seen: true
    }
  }
}
Vue.createApp(mySee).mount('#my5'); // Отображение или скрытие

const myLoop = {
  data() {
    return {
      todos: [
        {text: 'Я учу JavaScript', level: '6'},
        {text: 'Я учу Vue', level: '2'},
        {text: 'Я учу Frontend', level: '5'}
      ]
    }
  }
}
Vue.createApp(myLoop).mount('#my6'); // Список

const TodoItem = {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
} // item компонента
const TodoList = {
  data() {
    return {
      groceryList: [
        {text: 'Овощи'},
        {text: 'Сыр'},
        {text: 'Мясо'},
        {text: 'Фрукты'},
        {text: 'Что ещё люди должны есть'}
      ] // список item
    }
  },
  components: {
    TodoItem //Регистрируем новый компонент, если их несколько то через запятую
  }
}
Vue.createApp(TodoList).mount('#my7'); // Создаем Vue-приложение
// Компоненты

const RootComponent = {
  /* опции корневого компонента */
  // например methods, props, computed, inject и setup
  data() { // свойство
    return {
      count: 1
    }
  },
  created() { //хук жизненного цикла, например: mounted, updated и unmounted
    // `this` указывает на экземпляр vm
    console.log('счетчик: ' + this.count) // => "счетчик: 1"

  }
}

const my8 = Vue.createApp(RootComponent) // Жизненный цикл Vue | Компоненты более подробно
const vm = my8.mount('#my8') // vm сокращение от ViewModel
console.log(vm.count)

const RenderHtmlApp = {
  data() {
    return {
      msg: 'Hello, World',
      rawHtml: '<span style="color: red">This should be red.</span>',
      dynamicId: 1,
      number: 3,
      ok: false,
      message: 'Vue',
      id: 5,
    }
  }
}
Vue.createApp(RenderHtmlApp).mount('#my9'); // Синтаксис