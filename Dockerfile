FROM node:22-slim

# n を使うための設定
# ENV N_PREFIX=/usr/local
# ENV PATH=$N_PREFIX/bin:$PATH

# 作業ディレクトリを作成
WORKDIR /work

# npm を最新にして n をインストール
RUN npm install -g npm
# RUN npm install -g npm \
#     && npm install -g n \
#     && n stable

# openssl のインストール
RUN apt-get update && apt-get install -y openssl

# apt-get update によって取得されたパッケージリスト( /var/lib/apt/lists/* )を削除し、Dockerイメージのサイズを削減する
RUN rm -rf /var/lib/apt/lists/*

# コンテナ起動時のコマンド

# 汎用パターン
# このコマンド自体に意味は無いが、起動時に実行する処理が無いとコンテナが終了してしまう為
CMD ["tail", "-f", "/dev/null"]

# Next.jsの開発環境パターン
# CMD ["npm", "run", "dev"]


# CMD ["sh", "-c", "npm install && npm run dev"]
