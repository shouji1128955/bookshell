## 使用 Results 传递数据

我们在build镜像的时候，因为都是固定写死的，所以，我们现在需要实现修改镜像tag, 需要用到results这个方法

两种方式



- 可以通过Build-id，也可以通过commit-id来实现。
- 还需要获取到构建的时间