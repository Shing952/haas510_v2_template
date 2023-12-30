import * as gpio from "gpio";

interface Led {
  toggle(): void;
}

const led: Led = gpio.open({
  id: "USER_LED",
});



export default led