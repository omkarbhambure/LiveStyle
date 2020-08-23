FROM tiangolo/uvicorn-gunicorn:python3.6-alpine3.8
RUN mkdir -p /app
COPY requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt
COPY . /app
ENTRYPOINT ["/start-reload.sh"]