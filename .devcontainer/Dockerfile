FROM mcr.microsoft.com/devcontainers/jekyll

ENV LANG=en_US.UTF-8 \
    LANGUAGE=en_US:en \
    LC_ALL=en_US.UTF-8 \
    JEKYLL_ENV=production

RUN rm -f /etc/apt/sources.list.d/yarn.list \
    && rm -f /etc/apt/trusted.gpg.d/yarn.gpg

RUN apt-get update -y && apt-get install -y --no-install-recommends \
    imagemagick \
    inotify-tools \
    procps \
    jupyter-nbconvert && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /srv/jekyll

ADD Gemfile.lock /srv/jekyll
ADD Gemfile /srv/jekyll

WORKDIR /srv/jekyll

RUN gem install jekyll bundler
RUN bundle install --no-cache

EXPOSE 8080

COPY bin/entry_point.sh /tmp/entry_point.sh
CMD ["/tmp/entry_point.sh"]
