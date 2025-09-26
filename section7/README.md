# 一時的にコンテナを起動して入る場合
docker-compose run --rm frontend sh

- npm install -g @vue/cli
- vue create .（docker-compose.ymlでvolumesに指定しているディレクトリが生成済み）

# npm install
docker-compose run --rm frontend npm install

# ビルド
docker-compose run --rm frontend npm run build