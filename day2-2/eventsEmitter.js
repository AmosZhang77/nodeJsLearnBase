// 自己实现发布订阅功能

class EventEmitter { // {'失恋‘： [eat,cry,shopping]}
  constructor () {
    this._events = {}
  }

  on (eventName, callback) {
    if (!this._events[eventName]) { // 第一次 失恋里面新加东西
      this._events[eventName] = [callback]
    } else {
      this._events[eventName].push(callback) // 失恋里面加一项

    }
  }

  emit (eventName) {
    if (this._events[eventName]) {
      this._events[eventName].forEach(cb => cb())
    }
  }

  removeListener (eventName, callback) {
    if (this._events[eventName]) {
      this._events[eventName] = this._events[eventName].filter(cb => cb != callback) // 失恋里面删掉一项
    }
  }

  once (eventName, callback) {
    let fn = () => { // 绑定的是fn，执行的时候触发fn函数
      callback() // fn函数种原有的callback
      this.removeListener((eventName, fn)) // 执行一次callback后删除
    }

    this.on(eventName, fn) // 为了让移除动作在callback之后执行
    // this.on(eventName, callback) // 先绑定， 要在callback种删除绑定，事件执行过一次之后。所以套了一层fn赖世雄按
  }
}

let e = new EventEmitter()
let cry = () => {
  console.log('cry')
}
e.on('失恋', cry)
e.on('失恋', cry)
e.emit('失恋')

// cry
// cry

e.removeListener('失恋', cry)
