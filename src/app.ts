import led from './led'
import logger from './logger';



setInterval(() => {
  led.toggle();
  logger.write("hello world main uart\r\n");
  logger.write("hello amp!");
  logger.write("amp version is: " + system.version());
  logger.write("amp platform is: " + system.platform());
  logger.write("amp heapTotal is: " + system.memory().heapTotal);
  logger.write("amp heapUsed is: " + system.memory().heapUsed);
}, 1000);
