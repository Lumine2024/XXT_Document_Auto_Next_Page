# 学习通文档自动翻页

# XXT_Document_Auto_Next_Page

本插件用于自动刷学习通课程中的文档，将本插件的代码复制到油猴脚本中，待打开文档后即可自动刷课。

This plug-in is used for automatically watch the documents in Xuexitong. Copy those codes into TamperMonkey and open documents, and it will "watch" the courses.

插件原理：寻找“下一页”按钮，找到就点下一页，找不到就点上一页（因此可能会出现在最后一页和倒数第二页之间循环的情况）

Principle: Find the button of "Next page" and click it if we found, otherwise find the button "Previous page" and click it, which can cause it loop between the last page and the last but one.
