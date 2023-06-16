function Calculadora() {
  this.display = document.querySelector('#display');

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  }

  this.capturaEnter = () => {
    document.addEventListener('keydown', e => {
      if (e.keyCode !== 13) return;
      this.doMath();
    })
  }

  this.capturaCliques = () => {
    document.addEventListener('click', e => {
      const el = e.target;
      if (el.classList.contains('btn-num')) this.displayNum(el);
      if (el.classList.contains('btn-clear')) this.displayClear(el);
      if (el.classList.contains('btn-del')) this.displayDel();
      if (el.classList.contains('btn-eq')) this.doMath();
    });
  };

  this.displayNum = el => {
    this.display.value += el.innerText;
    this.display.focus()
  }
  this.displayClear = () => this.display.value = '';
  this.displayDel = () => this.display.value = this.display.value.slice(0, -1);
  this.doMath = () => {
    let math = this.display.value;
    try {
      math = eval(math)
      if (!math) {
        alert('Conta inválida!');
        return;
      }
      this.display.value = String(math);
    } catch (e) {
      alert('Conta inválida!');
      return;
    }
  }
}

const calculadora = new Calculadora();
calculadora.inicia();