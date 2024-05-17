# HaaS510 工程模板
> 本工程模板适用于HaaS510 V2.1硬件
## 相关硬件文档
[硬件文档地址](https://help.aliyun.com/zh/alios-things/developer-reference/haas-510-dtu?spm=a2c4g.11186623.0.0.7e1e28886Eh0Jw)
## 工程模板使用说明
工程模板可以帮助用户快速启动自己的应用开发，在模板中，已完成HaaS510 DTU板相关硬件的配置，可参考模板中的app.json文件。并在app.js中完成了必要硬件库的引用。

拷贝工程模板到目标文件夹，打开模板编写自己APP
### 操作HaaS510提供的接口
工程模板中已经对板载硬件进行了初始化操作（open），用户在编程中可以直接使用已经初始化的硬件实例。

如有部分硬件不希望试用，在开发中，可以将对应的初始化代码注释。如下：

```C
/* GPIO init */
var GPIO1 = gpio.open({
	id: 'IO1'
});
var GPIO2 = gpio.open({
	id: 'IO2'
});
var GPIO1 = gpio.open({
	id: 'IO3'
});
// var GPIO1 = gpio.open({
// 	id: 'IO4'
// });
GPIO1.writeValue(0);	// GPIO output 0
GPIO2.writeValue(1);	// GPIO output 1
GPIO3.writeValue(1);	// GPIO output 1
// GPIO4.writeValue(1);	// GPIO output 1

 /* open mainuart */
 var serial1 = uart.open({
	id: 'mainuart',
	success: function() {
		console.log('open main_uart success')
	},
	fail: function() {
		console.log('open uart fail')
	}
});
```

