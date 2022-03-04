Angular可以透過 platformBrowserDynamic().bootstrapModule() 以及 module bootstrap進行頁面載入設定

可以同時載入多個main module (AppModule)，且能設定多個root route

在route進行跳轉時，同步切換不同module對應以及component

例如：


****************************************************************
|                                                              |
| route-outlet-1                                               |
|                                                              |
|                                                              |
|                                                              |
|                                                              |
|                                                              |
|==============================================================|
|                                                              |
| route-outlet-2                                               |
|                                                              |
|                                                              |
|                                                              |
|                                                              |
|                                                              |
|                                                              |
****************************************************************