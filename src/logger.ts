import * as uart from "uart";


const serial1 = uart.open({
  id: "mainuart",
  success: function () {
    console.log("open main_uart success");
  },
  fail: function () {
    console.log("open main_uart fail");
  },
});

class Logger {
  private serial1 = serial1;



  write(message: string) {
    return this.serial1.write(message)
  }

}



export default new Logger()
