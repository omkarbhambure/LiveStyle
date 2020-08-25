FROM tiangolo/uvicorn-gunicorn:python3.6-alpine3.8
RUN mkdir -p /app
COPY requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt
RUN apk add build-base python-dev py-pip jpeg-dev zlib-dev
ENV LIBRARY_PATH=/lib:/usr/lib
RUN pip install pillow
COPY . /app
ENTRYPOINT ["/start-reload.sh"]