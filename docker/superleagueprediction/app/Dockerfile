FROM python:3.8

WORKDIR /usr/src/app

RUN sed -i 's|http://|https://|g' /etc/apt/sources.list.d/debian.sources && \
        apt-get update && apt-get install -y \
        tzdata gcc gettext \
        libjpeg62-turbo-dev libfreetype6-dev libtiff5-dev liblcms2-dev libwebp-dev tk8.6-dev python3-tk \
        libldap2-dev libsasl2-dev \
        postgresql-client \
        vim \
        postgresql-client  \
    --no-install-recommends && rm -rf /var/lib/apt/lists/* && \
    rm /etc/localtime && ln -s /usr/share/zoneinfo/Turkey /etc/localtime

ADD env_base_requirements.pip /tmp/
RUN pip install --no-cache-dir -r /tmp/env_base_requirements.pip

ADD run.sh /usr/run/

CMD ["/bin/bash", "/usr/run/run.sh"]