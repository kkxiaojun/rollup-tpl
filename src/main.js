class Hello {
  constructor(props) {
    this.name = props
  }
  say () {
    console.log(this.name)
  }
}

let hello = new Hello('hh ni hao , lj')

hello.say()

(()=>{console.log('es6')})()
