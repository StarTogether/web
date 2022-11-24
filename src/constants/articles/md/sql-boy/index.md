*7月10日，由星策社区主办的第三期「MLOps Meetup」于线上开展，本次活动由51CTO、开源中国、CSDN、思否、示说网、云原生社区同步直播，累计观看人次**1.5w+** 。*

*活动围绕“如何使用 SQL 实现工业级机器学习全流程”，星策社区发起人—**谭中意**，为本次活动进行开场，同时介绍了“ SQL boy 也可以做AI ”的活动背景；开源项目OpenMLDB PMC、第四范式平台架构师—**陈迪豪**，介绍如何用 SQL 实现特征工程；百度飞桨、EDL、SQLFlow、Couler 核心开发者贡献者—**武毅**，分享如何用 SQL 做模型训练与预测；Byzer社区PMC、Kyligence技术合伙人—**祝海林**，介绍如何用 SQL 完成端到端机器学习流程。*

🌟本文根据四位老师分享的重点内容整理而成，视频回顾见文章末尾，PPT获取请关注公众号「星策开源」并回复「0710」

## Part1：SQL Boy 也可以做 AI —谭中意

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c44598596564c68b4c704df8e3724cf~tplv-k3u1fbpfcp-zoom-1.image)

**为什么 SQL 如今仍在流行？**

SQL 从1978年发展至今仍在业界非常流行，原因有以下几点：首先，SQL 是一种声明式编程语言，它只需表达想要得到的结果，而不用关心具体实现的过程。其次，SQL 是标准化的，只要是符合标准（ANSI等）的SQL，在不同的机器与环境下都可以运行，并得到同样的结果。最后，SQL 最大的优点就是简单，工程师可以很容易学习和使用。

**SQL 的用途**

SQL 的用途很广，比如在传统的企业业务系统里，用MySQL数据库或微软 SQL 数据库等做CRUD的应用。大数据的数据分析领域，有 Spark SQL 、HiveSQL 等。除此之外，SQL 的应用也能涉及机器学习领域，它可以实现特征工程、模型训练，甚至可以做端到端的机器学习。本次 Meetup 就将介绍如何用 SQL 完成这些。




## Part2：OpenMLDB—以SQL为核心的线上线下一致性特征平台—陈迪豪

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/14f1321f5cef40df9c3c80e40c79e642~tplv-k3u1fbpfcp-zoom-1.image)

**人工智能工程化落地的数据和特征挑战**

根据 Gartner 的调查统计，如今人工智能领域中95%的时间精力都花费在数据上，如何正确、高效的 AI 数据和特征供给成为数据侧的新挑战。机器学习应用从开发到上线的全流程（MLOps）可以分成离线开发与线上服务两个过程，这两个过程分别包含：DataOps、FeatureOps、ModelOps三个步骤。其中特征问题尤为棘手，如 FeatureOps（特征工程）中线上线下一致性校验带来的高昂工程化落地成本问题。为了解决这一问题：1%的头部企业选择耗费上千小时自研构建平台，非头部企业有的则会采购昂贵的 SaaS 工具和服务，而OpenMLDB 提供了另一种解决方案，它以 SQL 为核心，提供了低成本、高效的线上线下一致性生产级特征计算平台。

**OpenMLDB 用 SQL 完成开发即上线**

OpenMLDB是一个开源机器学习数据库，提供了线上线下一致的特征平台，他的整体架构如下图所示，与 AI 应用落地所需要的工具链一样，整体框架分为离线与在线两部分，分别提供了基于Spark++ 的批处理 SQL 引擎与基于自研时序数据库的实时SQL引擎，中间层提供了基于 SQL 的一致性执行计划生成器。总结来看，通过 OpenMLDB 开发者只要会写 SQL，只需三步，即可完成开发即上线的过程。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77ff6938bb594ddc93ea7ed3e77616f1~tplv-k3u1fbpfcp-zoom-1.image)

**以SQL为核心的开发和管理体验**

使用OpenMDLB，SQL boy 也可以做机器学习。如下图所示 OpenMLDB 的命令行与 SQL 命令行类似，进入 OpenMLDB CLI 后，用户可以直接执行 SQL 语句做离线特征计算，同时通过 Deploy 语句将 SQL 方案上线，上线完成后即可在客户端做线上请求。整个使用体验均基于 SQL ，降低了机器学习特征工程部分的使用门槛。

​OpenMLDB GitHub（​[​https://github.com/4paradigm/OpenMLDB​](https://github.com/4paradigm/OpenMLDB)​）

**Part3：从 SQLFlow 到 “3-FLow”—武毅**

![1 (2).png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a4bec8ccd8c44e8b5abfe967fbd2304~tplv-k3u1fbpfcp-watermark.image?)
**SQLFLow**

SQLFlow 是一个编译器，它可以将 SQL 程序编译为在 Kubernetes上运行的工作流。该输入是一个SQL程序，用扩展SQL语法编写，以支持AI作业，包括培训、预测、模型评估、模型解释、自定义作业和数学编程。输出是在分布式Kubernetes集群上运行的Argo工作流。同时，SQLFlow支持各种数据库系统，如 MySQL、MariaDB、TiDB、Hive、MaxCompute 以及许多机器学习工具包，如TensorFlow、Keras、XGBoost等。




**为什么使用SQLFLow**

众所周知，使用 SQL 实现 AI 计算不需要了解具体的计算细节，只需要定义要去训什么样的模型及参数，就可以完成整体的训练。SQLFlow 的目标就是为了降低整体机器学习和 AI 应用构建多门槛，同时它还是 Declarative 和 imperative 并存的，SQLFLow 可以更 High Level 的定义整个模型及数据的流向。




**SQLFLow优势**

如下图所示，SQLFLow 在对标 Microsoft SQL Server、Teradata SQL for DL 及Google BigQuery 上拥有以下四个优势：它可以适配主流数据库系统、适配每个数据库系统的语法方言、定义扩展语法完成训练/预测/解释/线性规划、同时还能模型库/自定义模型的功能。

![企业微信截图_d5276e51-dd54-4456-aea1-f059c1367a4b.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84209f5b0b9f41c1add758ccf48d12f9~tplv-k3u1fbpfcp-watermark.image?)
其中，关于SQLFLow 如何详细训练 DNN 等 DL 模型、自动调整参数、训练 XGBoost 模型、执行预测、模型解释 (SHAP)、使用模型库中的模型/自定义模型、求解线性规划问题(linear programming)、运行自定义程序等设计细节可查看文章末尾完整视频。




**在MLOps上的实现**

“3-Flow”是 KubeFlow、MLFlow、SQLFlow的整合，可以覆盖 MLOps 里大部分的流程。目前该项目使用 Helm Chart 在其他环境快速安装和配置 Kubeflow，SQLFlow 的加入完成了一体化部署以及对应功能。未来，将加入 ParaFlow SDK等模块，继续完善其MLOps功能。


![企业微信截图_698a837c-a24c-4050-972b-1b13f2ffea4c.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5729f07ce9b4a689a42092c23a1c29f~tplv-k3u1fbpfcp-watermark.image?)

SQLFLow GitHub（https://github.com/sql-machine-learning/sqlflow）



**Part4：OpenMLDB + Byzer 使用 SQL完成端到端机器学习流程”—祝海林**


![1 (4).png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/939508d5953046ef8f439bb8c01ff4da~tplv-k3u1fbpfcp-watermark.image?)
**Byzer是什么**

Byzer是一门面向 Data+AI 领域的云原生类 SQL语言。目前，Byzer 支持 ETL ，数据挖掘和分析， 机器学习建模，模型部署。使用 Byzer ﻿就能轻易完成整个机器学习的Pipline，这包括：加载数据、处理数据、模型训练（支持多组参数，模型版本等）、批量预测、模型评估、部署API服务。架构图如下。

![企业微信截图_a9b86f3e-95fb-457f-ba83-0a2b142aeac0.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec7a76070d6b4a1f8cb8c3e68977f3fc~tplv-k3u1fbpfcp-watermark.image?)
**为什么需要Byzer**

如今，大数据和 AI 的门槛仍然很高，平台割裂，语言割裂，维护困难，使用困难等问题让很多人望而却步。Byzer 的出现可以帮助企业和个人都能够最低成本地挖掘数据的价值，极大降低 Data + AI 门槛。



**Byzer + OpenMLDB**

虽然目前，Byzer 已经可以实现几乎不需要编程就能完成整个机器学习的Pipeline。但对于特征工程，尤其实时在线特征计算这块，Byzer 目前还有软肋。所以在引入 OpenMLDB 之后，完美解决了 Byzer 在特征工程方面的短板。活动中详细演示了以Kaggle出租车行车时间预测问题为例，如何使用OpenMLDB和 Byzer 联合来打造完整机器学习应用，涵盖湖仓数据加载，特征计算，模型训练，部署，及对外以 Rest API 提供端到端的预测能力，可查看文章末尾完整视频。



总结来看，使用 OpenMLDB+ Byzer 的过程，让整个特征计算通过 FeatureStoreExt 插件转化到 OpenMLDB 中进行计算。Online 部分通过 Rest 函数实时请求 OpenMLDB 获得特征值。Byzer 作为流式处理，可以将数据规整化写入 Kafka 再进入 OpenMLDB。由此可以发现，Byzer 的使用非常具有扩展性，可以让算法工程师/数据工程师/分析师等在 Notebook 中衔接更多的生态进来。

![企业微信截图_3daacaa1-1e7a-47d6-839f-4f79625360e4.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03d6a67a2a9440999544946762c6fea0~tplv-k3u1fbpfcp-watermark.image?)
Byzer GitHub（https://github.com/byzer-org/byzer-lang）




**总结**

随着人工智能领域的持续发展和技术的迭代演进，机器学习不再是大家触不可及的领域，工程师可以通过一些如 SQL 这样更简单、易用、低门槛的编程语言，通过像 OpenMLDB /SQLFlow / Byzer 等开源工具，快速实现机器学习应用全流程，解决机器学习各阶段难题。相信在未来，AI的落地会越来越简单，落地速度也将越来越快。本次活动中各家的实现细节可观看完整视频回放，希望大家有所收获。




最后，欢迎大家持续关注 MLOps ，加入[MLOps爱好者交流群](https://sourl.cn/vZ2Jhv)和我们一起讨论相关内容。

-   SQL也能玩转工业级AI ！——谭中意

    https://www.bilibili.com/video/BV14g411f7Ut/\


-   OpenMLDB以SQL为核心的线上线下一致性特征平台——陈迪豪\


    https://www.bilibili.com/video/BV1eg411f7sC/

-   从 SQLFlow 到 “3-FLow”用SQL完成 AI 建模——武毅\


    https://www.bilibili.com/video/BV1hT411g7hz/

-   OpenMLDB + Byzer 用SQL完成端到端机器学习全流程！——祝海林\


    https://www.bilibili.com/video/BV1te4y1R7yn/
    
    
    
    
    
|场景  |动作 | 台词
| --- | --- | --- |
| 某电商网站热门推荐功能上线，第一周，用户点击率高，模型上线效果不错| 产品经理+AI科学家举杯同庆；AI工程师刚刚结束加班 |产品经理：用户点击率很高，推荐的很精准嘛；AI科学家：哈哈！小意思
| 上线一周后，效果越来越差 | 复盘追责 | 产品经理：怎么回事，推荐效果越来越差？用户点击率下来了？什么原因？ ；AI科学家：我们模型肯定没问题啊，是不是他们上线优化的时候出问题了？；AI工程师：你们模型不标准，我们优化半天好不容易上线了，完还背锅了？？？？ |
| 工程师费解 | 社群求助|又背锅了！模型上线后效果差，怎么总让我们背锅，有没有同感？  |
| 社群讨论吐槽纷纷有此经历 |扫地僧出现  | 社群中扫地僧：上线过程没有问题的话，应该跟pm建议重新训练模型，别白背锅了！|
| 如果你也是AI工程师，爱讨论，爱交流，欢迎加入星策社区交流群～讨论技术，交流吐槽～|


