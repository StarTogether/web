
# 更新文档，重新生成 HTML
# npm run docs

# 输入文章英文标题，用于文章列表以及文章路由

echo "请输入文章英文标题，将用于文章列表以及文章路由，例如 devops_meetup_review"

read -p "文章标题: "

echo $REPLY

# 写入文章列表
# {
#     article_bg: devopsBG, // 文章背景图
#     bg: devops, // 文章列表缩略图
#     key: 'devops_ml_mlops-2022-06-21', // 文章英文标题、路由
#     title: 'DevOps + Machine Learning = MLOps ?', // 文章中文标题
#     desc: '近日，企业智能化转型开源社区 — 星策社区组织了 DevOps 和 MLOps 的 Meetup，是把 DevOps 和 MLOps 拉在一起进行分享的社区活动，笔者作为该活动的组织者，写点东西来说下这两者的关系和异同，并做回顾。', // 文章概要
#     index_html: devops_index // 文章关联生成的文档
# }

