# CurrDiT 项目主页

基于 [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) 定制的纯静态学术主页，保留 Bulma 基础样式。网页内容为英文，适合国际学术项目展示。

## 已包含

- 论文标题、研究概述、方法与课程学习结构图。
- 三组原论文结果图的修复前后拖动对比。
- 7 个评测集合、10 种方法、5 项指标；数值来自论文表 1，共 350 个数值。
- VintagePortraits 数据集介绍、样例和退化合成图。
- 手机布局、键盘可用的比较控件、可横向滚动的结果表。
- 无外部字体、脚本、CDN 或后台服务依赖。

## 内容来源

依据提供的 `neurips_2026.tex` 正文整理。采用正文引用的 `figures/com.pdf`、`net.png`、`pipeline-1.png` 和附录中的数据集/退化样例。比较面板从原 PDF 的 Input 与 CurrDiT 列裁切提取，没有重新生成结果图。

作者和单位仍未确认，因此未展示姓名、单位或作者 BibTeX。公开论文、代码、数据集链接暂缺，因此未添加无法访问的资源按钮。没有声称论文已被某会议接收。

## 如何开放外网：GitHub Pages

不需要公网 IP、云服务器、内网穿透，也不需要让电脑一直开着。

1. 登录 GitHub，创建一个公开仓库，例如 `currdit`（GitHub Free 支持公开仓库的 Pages）。
2. 上传本目录内容，确保 `index.html`、`.nojekyll` 和 `static/` 直接位于仓库根目录。不要只上传压缩包，也不要多套一层文件夹。若使用 GitHub Pages 专用压缩包，先解压再上传其中的文件。
3. 打开仓库 **Settings → Pages**。
4. 在 **Build and deployment → Source** 选择 **Deploy from a branch**。Branch 选择 **main**，目录选择 **/(root)**，然后 Save。
5. 等待 GitHub Pages 部署成功，以 Settings → Pages 显示的实际访问链接为准。项目页面的常见地址格式为 `https://你的用户名.github.io/currdit/`，这是格式示意，不是已经创建的地址。

官网说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

更新方法：修改相应文件并上传到同一发布分支，GitHub 会重新发布。当前所有内部资源均使用相对路径，可直接用于 GitHub 项目子路径。

## 本地修改

直接打开 `index.html` 即可查看，也可以运行：

```sh
npm install
npm run dev
```

- 页面内容：`index.html`
- 页面样式：`static/css/index.css`
- 比较控件与切换表格：`static/js/index.js`
- 便于审阅的表格数据：`static/js/results.json`
- 图片素材：`static/images/`

更新指标时，需要同时修改 JS 数据和 HTML 中默认显示的 VintagePortraits 表格；`results.json` 是供审阅的数据副本。`npm run build` 将发布内容复制到 `dist/`。页面无需构建也可通过 GitHub Pages 发布。

补充作者时，在标题下添加真实作者与单位，再按实际公开资源添加 Paper、Code、Dataset 按钮和作者元数据。正式引用信息确认后再添加 BibTeX。

## 授权与致谢

网站模板来自 Eliahu Horwitz 的 [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template)，其部分设计来自 [Nerfies](https://nerfies.github.io/)。模板及本页面的模板改编部分遵循 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)。论文文本、实验结果和图像保留各自权利，此说明不授予论文或数据集新的开放许可。Bulma 保留其原有 MIT 许可。
