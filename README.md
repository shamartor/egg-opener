# opener

基于[egg](https://github.com/eggjs/egg)重定义controller,router的加载规则。基于此框架可以加载多层controller与router。

## 重定义项

### controller

支持加载framework层面的controller定义，不支持重写。主要为了让部分通用controller沉淀入框架层。

### router

支持加载framework层面的router定义。主要为了让部分通用router沉淀入框架层，通过调整route顺序定义处理优先级。
