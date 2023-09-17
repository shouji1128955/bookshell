module.exports = function customTimePlugin(context, options) {
  return {
    name: 'custom-time-plugin',
    async contentLoaded({ content, actions }) {
      const { createData } = actions;
      const date = new Date().toLocaleDateString(); // 获取当前日期
      const timeInfo = `本文档最后更新时间：${date}`; // 自定义时间信息格式
      
      // 在文档开头插入时间信息
      content = timeInfo + '\n' + content;

      // 创建数据以供其他插件和组件使用
      createData('customTime', { timeInfo });

      return content;
    },
  };
};
