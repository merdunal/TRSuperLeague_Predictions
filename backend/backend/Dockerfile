FROM python:3.8

WORKDIR /usr/src/app

RUN sed -i 







ADD env_base_requirements.pip /tmp/
RUN pip install --no-cache-dir -r /tmp/env_base_requirements.pip

ADD backend /usr/src/app
ADD run /usr/run

CMD ["/bin/bash", "/usr/run/run.sh"]